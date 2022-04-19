import React from "react";

import { Link } from "react-router-dom";
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
      <div>
        <Link to="signup">회원가입</Link>
      </div>
    </div>
  );
};

export default sign;
