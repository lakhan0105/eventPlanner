import React from "react";
import { NavLink } from "react-router-dom";

function LoginBtn() {
  return (
    <NavLink to={"/login"}>
      <span className="mr-2">login</span>
    </NavLink>
  );
}

export default LoginBtn;
