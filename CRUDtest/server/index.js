const express = require("express");
const app = express();

const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
app.use(cors());

//이거 필요한거임?
// app.use(express.static("Images"));
//testtesttest
//testtestestet

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "crudtest",
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

///////

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/Image/");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});

app.post("/submit", upload.single("file"), (req, res) => {
  // console.log(req.body.posts, "레큐바디");
  console.log(JSON.stringify(req.body), "JSON.stringify(req.body)");
  console.log(req.body, "바디");

  const profile = req.file.path;
  const id = req.body.iddd;
  const password = req.body.password;

  console.log(id, password, "아이디랑 패스워드");

  console.log(req.file, "파일");
  console.log(profile, "프로파일");

  console.log(profile, "프로필 들어갈 정보");

  db.query(
    "INSERT INTO userlist (userId,userPassword,userProfile) VALUES (?,?,?) ",
    [id, password, profile],

    (err, result) => {
      if (err) {
        console.log(err, "실패ㅠㅠㅠ");
      } else {
        res.send("userlist values inserted");
        // console.log("성공~");
      }
    }
  );
});

app.get("/showUserDB", (req, res) => {
  db.query("SELECT * FROM userlist", (err, result) => {
    if (err) {
      console.log(err, "에러요");
    } else {
      res.send(result);
    }
  });

  console.log("백이요");
});

app.listen(3001, () => {
  console.log("your server is running on 3001~! yeah");
});
