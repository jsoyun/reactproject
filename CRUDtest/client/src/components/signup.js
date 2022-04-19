import React, { useState } from "react";

import "./signup.css";

const [id, setId] = useState[""];

const ID = (event) => {
  setId(event.target.value);
  console.log(event.target.value);
};

const Submit = () => {};

const Signup = () => {
  return (
    <div className="formBox">
      <div className="signup_id">
        <input placeholder="아이디" onChange={ID}></input>
      </div>
      <div className="signup_password">
        <input placeholder="비밀번호"></input>
      </div>
      <div>
        <input placeholder="비밀번호 확인"></input>
      </div>
      <button onClick={Submit}>제출</button>
    </div>
  );
};

export default Signup;
