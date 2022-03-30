import { useState } from "react";
import "./login.css";
import Axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      frontname: name,
      frontage: age,
      frontcountry: country,
      frontposition: position,
      frontwage: wage,
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
    </div>
  );
}

export default Login;
