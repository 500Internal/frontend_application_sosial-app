import { useQuery } from "@tanstack/react-query";
import Navbar from "../../shared/ui/layoutParts/navigations/mainNavbar";
import MainSidebarLeft from "../../shared/ui/layoutParts/sidebar/mainSidebarLeft";
import MainSidebarRight from "../../shared/ui/layoutParts/sidebar/mainSidebarRight";
import { Outlet, redirect, useNavigate } from "react-router";
import { getSession } from "~/features/auth/service/authService";
import { getProfile } from "~/features/profile/service/profileService";
import type { ProfileType } from "shared/types/profileType";
import { useSession } from "~/features/auth/hooks/useSession";
import { useGetProfile } from "~/features/profile/hooks/useGetProfile";

export default function MainLayout() {
  const nav = useNavigate();
  const { data, isError } = useSession();
  if (isError) {
    return nav("/auth/login");
  }
  //profile query
  const { data: profile } = useGetProfile();
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
