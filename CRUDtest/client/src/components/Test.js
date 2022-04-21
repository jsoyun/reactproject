import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [file, setFile] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Images", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("http://localhost:3001/upload", formData, config)
      .then((res) => {
        console.log(res, "res가 뭐임??");
        alert("image uploaded successfully");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="Test">
      <form onSubmit={onFormSubmit}>
        <h1>simple submit</h1>
        <input type="file" name="Images" onChange={onInputChange} />
        <button type="submit">upload</button>
      </form>
    </div>
  );
};

export default Test;
