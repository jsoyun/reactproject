import { useState } from "react";
import "./login.css";
import Axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [employeesList, setEmployeesList] = useState([]);

  const addEmployee = () => {
    console.log(name, "dfdfd");
    Axios.post("http://localhost:3001/create", {
      frontname: name,
      frontage: age,
      frontcountry: country,
      frontposition: position,
      frontwage: wage,
    }).then(
      () => {
        console.log("success");
      }
      // () => {
      //   //기존 배열에 방금추가한거 바로 띄우게 하는거인가? 배경은 뜨는데 값이 안띄워지네..흠
      //   //암튼 여러 방법이 있다고 함 있다가 해보자
      //   setEmployeesList([
      //     ...employeesList,
      //     {
      //       frontname: name,
      //       frontage: age,
      //       frontcountry: country,
      //       frontposition: position,
      //       frontwage: wage,
      //     },
      //   ]);
      //   console.log("zzzzzzz");
      // }
    );
  };

  const getEmployee = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeesList(response.data);
    });
  };

  const onChangefun = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="login">
      <div className="information">
        <label>Name : </label>
        <input type="text" onChange={onChangefun}></input>
        <label>Age : </label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        ></input>
        <label>Country : </label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        ></input>
        <label>Position : </label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        ></input>
        <label>Wage: </label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        ></input>
        <button onClick={addEmployee}>직원 등록</button>
      </div>

      <div className="showDB">
        <button className="showDB-button" onClick={getEmployee}>
          show employees
        </button>

        <div>
          {employeesList.map((val, index) => {
            return (
              <div className="employee">
                <h3>{val.name}</h3>
                <h3>{val.age}</h3>
                <h3>{val.country}</h3>
                <h3>{val.position}</h3>
                <h3>{val.wage}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Login;
