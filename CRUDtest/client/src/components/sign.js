import React from "react";
import Signup from "../components/signup";
import "./sign.css";

const sign = () => {
  return (
    <div className="sign">
      <div className="sign_id">
        <input placeholder="아이디"></input>
      </div>
      <div className="sign_password">
        <input placeholder="비밀번호"></input>
      </div>

      <Signup />
    </div>
  );
};

export default sign;
