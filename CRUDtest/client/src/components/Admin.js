import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./Admin.css";

const Admin = (props) => {
  const [user, setUser] = useState([]);

  //   const { alt, ...otherProps } = props;

  const showUserDB = () => {
    Axios.get("http://localhost:3001/showUserDB").then((response) => {
      setUser(response.data);
      console.log(response.data, "리스폰스데이터");
      if (response.data.length === 0) {
        alert("유저정보없음");
      }

      console.log(user, "유저");
    });
  };

  const deleteUserDB = (id) => {
    console.log(id);
    Axios.delete(`http://localhost:3001/deleteUserDB/${id}`).then(
      (response) => {
        setUser(
          user.filter((val) => {
            console.log(val.id, "벨류쩜아이디");
            return val.id != id;
          })
        );
      }
    );
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

              <img
                src={`./Image/${value.userProfile}`}
                alt="회원사진"
                style={{ height: "200px" }}
              />
              <button
                onClick={() => {
                  deleteUserDB(value.id);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
