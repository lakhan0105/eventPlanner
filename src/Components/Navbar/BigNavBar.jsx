import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function BigNavBar() {
  return (
    <nav className="h-full w-full hidden items-center justify-between px-3 sm:flex">
      <Logo />
      <NavLinks />
      <div>buttons</div>
    </nav>
  );
}

export default BigNavBar;
