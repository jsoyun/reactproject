const express = require("express");
const app = express();

const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
app.use(cors());

app.use(express.json());
//이거 필요한거임?
app.use(express.static("Images"));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "crudtest",
});

// app.post("/upload", upload.single("Images"), (req, res) => {
//   const profile = req.body.file;
//   //레큐바디도 언디파인이었음
//   console.log(profile, "프로파일값이", req.body, "레큐바디");
// });

// app.post("/image", upload.single("file"), function (req, res) {
//   res.json({});
//   const profile = req.body.body;
//   console.log(profile, "이미지");

//   db.query(
//     "INSERT INTO userlist (userId, userPassword, userProfile) VALUES (?,?on,?) ",
//     [profile],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("userlist values inserted");
//       }
//     }
//   );
// });
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

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "Images");
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     cb(null, +Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({
//   storage: storage,
//   // fileFilter
// });
//.single("file"); //.single 싱글파일일때 붙인다함
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "Images/");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});

// app.post("/up", upload.array("img"), (req, res) => {
//   console.log(req.files);
// });

app.post("/submit", upload.single("file"), (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  const profile = req.files;
  console.log(req.body.formData);

  console.log(req.file, "파일");
  res.json({ url: `/img/${req.file.filename}` });
  // FormData의 경우 req로 부터 데이터를 얻을수 없다.
  // upload 핸들러(multer)를 통해서 데이터를 읽을 수 있다

  //   function insertRecord(req, res) {
  // req.files.forEach((e) => {
  // console.log(e.filename);
  // });
  console.log(req.body, "레큐바디");
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
