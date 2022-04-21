const express = require("express");
const app = express();

const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
app.use(cors());

app.use(express.json());
//이거 필요한거임?
// app.use(express.static("public"))

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "crudtest",
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, +Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage: storage,
  // fileFilter
});

app.post("/upload", upload.single("Images"), (req, res) => {
  const profile = req.body.file;
  //레큐바디도 언디파인이었음
  console.log(profile, "프로파일값이", req.body, "레큐바디");

  const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }

  console.log(obj);
});

app.post("/create", (req, res) => {
  const name = req.body.frontname;
  const age = req.body.frontage;
  const country = req.body.frontcountry;
  const position = req.body.frontposition;
  const wage = req.body.frontwage;
  console.log(req.body.frontname, "레큐바디의 프론트");

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    //콜백함수
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values Inserted");
      }
    }
  );
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.frontId;
  const wage = req.body.frontWage;
  db.query(
    "UPDATE employees SET wage = ? WHERE id =? ",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  //테이블이름, 보낼거 , id하나만 보낼거라서 배열로 안묶어줌 걍보내
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/submit", upload.single(), (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  const profile = req.body.imageUpload;
  console.log(profile, "이미지");

  db.query(
    "INSERT INTO userlist (userId, userPassword, userProfile) VALUES (?,?,?) ",
    [id, password, profile],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("userlist values inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("your server is running on 3001~! yeah");
});
