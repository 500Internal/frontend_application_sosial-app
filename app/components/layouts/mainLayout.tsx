import { useQuery } from "@tanstack/react-query";
import Navbar from "../navigations/mainNavbar";
import MainSidebarLeft from "../sidebar/mainSidebarLeft";
import MainSidebarRight from "../sidebar/mainSidebarRight";
import { Outlet, redirect, useNavigate } from "react-router";
import { getSession } from "~/services/authService";
import { getProfile } from "~/services/profileService";
import type { ProfileType } from "~/common/types/profileType";

export default function MainLayout() {
  const nav = useNavigate();
  //session query
  const { data, isError } = useQuery({
    queryKey: ["session"],
    queryFn: getSession,
  });
  if (isError) {
    return nav("/auth/login");
  }

  //profile query
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar profile={profile?.data as ProfileType} />
      <div className="flex flex-1">
        <MainSidebarLeft profile={profile?.data as ProfileType} />
        <main className="flex-1 bg-[#15191d] mt-16 lg:ml-72 lg:mr-60">
          <Outlet />
        </main>
        <MainSidebarRight />
      </div>
    </div>
  );
}
