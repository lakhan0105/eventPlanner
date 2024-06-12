import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LoginBtn from "../LoginBtn";
import RegisterBtn from "../RegisterBtn";
import { useSelector } from "react-redux";
import LogoutBtn from "../LogoutBtn";

function BigNavBar() {
  const { currUser } = useSelector((state) => state.authReducer);

  return (
    <nav className="h-full w-full hidden items-center justify-between px-3 sm:flex">
      <Logo />
      <NavLinks />

      {/* show the logout and login, register btns based on currUser */}
      <div>
        {currUser ? (
          <LogoutBtn />
        ) : (
          <>
            <LoginBtn />
            <RegisterBtn />
          </>
        )}
      </div>
    </nav>
  );
}

export default BigNavBar;
