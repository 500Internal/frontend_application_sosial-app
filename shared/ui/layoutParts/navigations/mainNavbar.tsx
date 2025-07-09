import { Search } from "lucide-react";
import { FaHome, FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";
import { Input } from "shared/shadcn/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "shared/shadcn/tooltip";
import ProfildropDown from "../../../../app/features/profile/components/profilDropdown";
import type { ProfileType } from "shared/types/profileType";
import LogoutButton from "../../../../app/features/auth/components/logoutButton";
import { useGetNotificationUnread } from "~/features/notification/hooks/useGetNotificationUnread";

type Props = {
  profile: ProfileType;
};

export default function Navbar({ profile }: Props) {
  const navMainItems = [
    {
      name: "beranda",
      href: "/beranda",
      icon: <FaHome />,
    },
    {
      name: "teman",
      href: "/teman",
      icon: <FaUserFriends />,
    },
    {
      name: "group",
      href: "/group",
      icon: <FaUsers />,
    },
  ];

  const nav = useNavigate();

  const {data: notificationUnread} = useGetNotificationUnread();
  return (
    <nav className="flex fixed top-0 left-0 right-0 z-50 bg-[#1d232a] items-center justify-between px-5 py-2 shadow-md">
      <div className="hidden sm:flex items-center gap-3 flex-1">
        <img src="/logo-v1.webp" alt="logo" className="h-12 w-12" />
        <div className="flex items-center gap-1">
          <Input
            placeholder="cari"
            className="rounded-sm border border-gray-500 text-white/75 focus-visible:ring-0 focus-visible:outline-none"
          />
          <Search size={35} className="rounded-sm text-white/75" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 flex-1">
        {navMainItems.map((item) => (
          <Tooltip key={item.name}>
            <TooltipTrigger asChild>
              <NavLink to={item.href}>
                {({ isActive }) => (
                  <div
                    className={`p-3 rounded-md text-2xl transition ${
                      isActive
                        ? "bg-gray-800 text-blue-400"
                        : "text-gray-400 hover:bg-gray-800"
                    }`}
                  >
                    {item.icon}
                  </div>
                )}
              </NavLink>
            </TooltipTrigger>
            <TooltipContent>{item.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>

      <div className="flex items-center gap-4 justify-end flex-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <div onClick={() => nav("/notification")} className="hover:bg-gray-800 relative p-2 rounded-full">
              <IoNotifications className="text-2xl text-gray-500" />
              <p className="absolute top-0 right-0 bg-red-500 w-4 h-4 rounded-full flex items-center justify-center text-xs">{notificationUnread?.data || 0}</p>
            </div>
          </TooltipTrigger>
          <TooltipContent>Notifikasi</TooltipContent>
        </Tooltip>
        {profile && (
          <ProfildropDown profile={profile} label={"Account"}>
            <LogoutButton />
          </ProfildropDown>
        )}
      </div>
    </nav>
  );
}
