import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  // handleLogout
  function handleLogout(e) {
    dispatch(logoutUser());
  }

  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutBtn;
