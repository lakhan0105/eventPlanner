import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NavLinks() {
  return (
    <Wrapper className="flex">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/"}>About</NavLink>
      <NavLink to={"/"}>Sound-System</NavLink>
      <NavLink to={"/"}>Lights</NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  transform: translateX(5%);

  a {
    margin-right: 0.9em;
    /* font-size: 0.95rem; */
  }
`;

export default NavLinks;