import React, { useState } from "react";
import Axios from "axios";
import "./signup.css";

function Signup() {
  //회원가입 값
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [imageUpload, setImageUpload] = useState(null);

  //다 userlist에 담아서 db저장하기
  // const [userList, setUserList] = useState([]);

  const onChangeId = (event) => {
    setId(event.target.value);
  };

  const onChagePassword = (event) => {
    setPassword(event.target.value);
  };

  const Submit = () => {
    Axios.post("http://localhost:3001/submit", {
      id: id,
      password: password,
      profile: imageUpload,
    }).then(() => console.log(imageUpload, "user정보 저장됨"));
  };

  return (
    <div className="formBox">
      <div className="signup_id">
        <input placeholder="아이디" onChange={onChangeId}></input>
      </div>
      <div className="signup_password">
        <input placeholder="비밀번호" onChange={onChagePassword}></input>
      </div>
      <div>
        <input placeholder="비밀번호 확인"></input>
      </div>
      {imageUpload ? (
        <>
          <img src={imageUpload} alt=""></img>
        </>
      ) : (
        ""
      )}
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
          console.log(event.target.files[0], "파일");
        }}
      />

      <button onClick={Submit}>제출</button>
    </div>
  );
}

export default Signup;
