import React from "react";
import { NavLink } from "react-router-dom";

function RegisterBtn() {
  return (
    <NavLink to={"/register"}>
      <span>SignUp</span>
    </NavLink>
  );
}

export default RegisterBtn;
