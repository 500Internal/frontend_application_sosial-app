import Navbar from "../navigations/mainNavbar";
import MainSidebarLeft from "../sidebar/mainSidebarLeft";
import MainSidebarRight from "../sidebar/mainSidebarRight";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <div className="flex flex-1">
        <MainSidebarLeft />
        <main className="flex-1 bg-[#15191d] px-4 py-6">
          <Outlet />
        </main>
        <MainSidebarRight />
      </div>
    </div>
  );
}
