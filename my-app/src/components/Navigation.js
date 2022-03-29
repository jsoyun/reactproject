import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      {/* <Link to="/about">About</Link> */}
      <Link to="/about">About</Link>
    </div>
  );
}
