import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./Admin.css";

const Admin = (props) => {
  const [user, setUser] = useState([]);
  const { alt, ...otherProps } = props;

  const showUserDB = () => {
    Axios.get("http://localhost:3001/showUserDB").then((response) => {
      setUser(response.data);
      console.log(user, "유저");
    });
  };

  return (
    <div>
      <button onClick={showUserDB}>유저정보띄우기</button>
      <div>
        <h3>유저정보</h3>
        {user.map((value, index) => {
          return (
            <div className="admin_userDB">
              <h3>{value.id}</h3>
              <h3>{value.userId}</h3>
              <h3>{value.userPassword}</h3>
              <img src={value.userProfile} alt="profile" />
              {/* <img alt={value.userProfile} {otherProps...} /> */}
            </div>
          );
        })}
        <button>삭제</button>
      </div>
    </div>
  );
};

export default Admin;
