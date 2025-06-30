import React from "react";
import { Outlet } from "react-router";
import Navbar from "../navigations/mainNavbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
