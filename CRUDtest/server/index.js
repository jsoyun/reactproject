const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());
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

app.listen(3001, () => {
  console.log("your server is running on 3001~! yeah");
});
