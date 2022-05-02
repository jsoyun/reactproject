import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Navi = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Button = styled.button`
  /* display: inline-block; */
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 0.8em 2em;
  margin: 0 2em 1em 2em;

  &:hover {
    color: green;
    text: border;
  }
`;

function Nav() {
  return (
    <Navi>
      <Link to="/">
        <Button>홈</Button>
      </Link>
      <Link to="/login">
        <Button>직원등록오직관리자만</Button>
      </Link>
      <Link to="/board">
        <Button>게시판</Button>
      </Link>
      <Link to="/sign">
        <Button>로그인</Button>
      </Link>
      <Link to="/mypage">
        <Button>마이페이지</Button>
      </Link>
    </Navi>
  );
}
export default Nav;
