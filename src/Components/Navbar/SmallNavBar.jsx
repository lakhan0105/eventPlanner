import React from "react";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo";

function SmallNavBar({ toggleSidebar }) {
  return (
    <nav className={`flex h-full items-center justify-between p-2 sm:hidden`}>
      <button className="text-2xl cursor-pointer" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <Logo />
    </nav>
  );
}

export default SmallNavBar;
