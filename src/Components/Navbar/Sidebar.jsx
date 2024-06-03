import React from "react";
import Logo from "./Logo";
import { IoMdClose } from "react-icons/io";
import SideNavLinks from "./SideNavLinks";

function Sidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed top-0 left-0 right-0 bottom-0 z-50 bg-white p-2 sm:hidden ${
        !isSidebarOpen ? "hidden" : "block"
      }`}
    >
      <header className="flex justify-between items-center">
        <Logo />

        <button onClick={toggleSidebar} className="text-3xl">
          <IoMdClose />
        </button>
      </header>

      <SideNavLinks />
    </aside>
  );
}

export default Sidebar;
