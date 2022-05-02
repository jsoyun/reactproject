const express = require("express");
const app = express();

const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
app.use(cors());
//바디파서가 안되는거같아서
const bodyParser = require("body-parser");

//bodyparser사라지고 이거랑 위에꺼쓴다는데 과연..
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
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
// const upload = multer({
//   dest: "Images/",
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

// app.post("/up", upload.array("img"), (req, res) => {
//   console.log(req.files);
// });

app.post("/submit", upload.single("file"), (req, res) => {
  console.log(req.body.posts, "레큐바디");
  console.log(req.body, "바디");
  console.log(JSON.stringify(req.body.posts), "spsp");

  // console.log(req.body, "레큐바디");

  // const password = req.body.posts;
  // const profile = req.file.originalname;
  const profile = req.file.path;
  const id = req.body;
  const password = req.body;
  console.log(id, password, "아이디랑 패스워드");

  //   res.send(`
  //   body: ${JSON.stringify(req.body)},<br/>
  //   file: ${JSON.stringify(req.file)}
  // `);

  console.log(req.file, "파일");
  console.log(profile, "프로파일");

  // res.json({ url: `/img/${req.file.filename}` });
  // FormData의 경우 req로 부터 데이터를 얻을수 없다.
  // upload 핸들러(multer)를 통해서 데이터를 읽을 수 있다

  //   function insertRecord(req, res) {
  // req.files.forEach((e) => {
  // // console.log(e.filename);
  // // });
  // console.log(req.file, "파일");
  // console.log(profile, "이미지");
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

app.listen(3001, () => {
  console.log("your server is running on 3001~! yeah");
});
