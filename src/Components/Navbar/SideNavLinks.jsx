import React from "react";
import { NavLink } from "react-router-dom";

function SideNavLinks() {
  return (
    <div className="flex flex-col mt-5 leading-8">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/"}>About</NavLink>
      <NavLink to={"/"}>Sound-System</NavLink>
      <NavLink to={"/"}>Lights</NavLink>
    </div>
  );
}

export default SideNavLinks;
