import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import App from "./App";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  //BrowserRouter 웹 애플리케이션에 HTML5의 History API를 사용하여
  //페이지를 새로 불러오지 않고도 주소를 변경하고 현재 주소의 경로에 관련된 정보를 리액트 컴포넌트에서 사용할 수 있도록 해 줌
  <BrowserRouter>
    <Header />
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
