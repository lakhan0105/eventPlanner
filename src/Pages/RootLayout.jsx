import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { BigNavBar, Sidebar, SmallNavBar } from "../Components/index";

function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // handleSidebar
  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  // change header color based on page
  const location = useLocation();
  let navBgColor = location.pathname === "/" ? "bg-transparent" : "bg-black";

  return (
    <>
      <header
        className={`fixed h-[50px] top-0 left-0 right-0 z-40 text-white ${navBgColor}`}
      >
        <SmallNavBar toggleSidebar={toggleSidebar} />
        <BigNavBar />
      </header>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <Outlet />
    </>
  );
}

export default RootLayout;
