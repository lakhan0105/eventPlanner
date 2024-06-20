import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NavLinks() {
  const { currUser } = useSelector((state) => {
    return state.authReducer;
  });

  return (
    <Wrapper className="flex">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/"}>About</NavLink>
      <NavLink to={"/all-products"}>All Products</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>

      {currUser && <NavLink to={"/my-orders"}>My Orders</NavLink>}
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
