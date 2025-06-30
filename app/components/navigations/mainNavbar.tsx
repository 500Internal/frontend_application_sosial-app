import { Search } from "lucide-react";
import { FaHome, FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { NavLink } from "react-router";
import { Input } from "~/common/shadcn/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/common/shadcn/tooltip";

export default function Navbar() {
  const navMainItems = [
    {
      name: "beranda",
      href: "/beranda",
      icon: <FaHome className="text-2xl text-gray-500" />,
    },
    {
      name: "teman",
      href: "/teman",
      icon: <FaUserFriends className="text-2xl text-gray-500" />,
    },
    {
      name: "group",
      href: "/group",
      icon: <FaUsers className="text-2xl text-gray-500" />,
    },
  ];

  return (
    <nav className="flex items-center justify-between px-5 py-2 shadow-md">
      <div className="hidden sm:flex items-center gap-3">
        <img src="/logo-v1.webp" alt="logo" className="h-12 w-12" />
        <div className="flex items-center gap-1">
          <Input
            placeholder="cari"
            className="rounded-sm border border-gray-500 text-white/75 focus-visible:ring-0 focus-visible:outline-none"
          />
          <Search size={35} className="rounded-sm text-white/75" />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {navMainItems.map((item) => (
          <Tooltip key={item.name}>
            <TooltipTrigger asChild>
              <NavLink to={item.href}>
                {({ isActive }) => (
                  <div
                    className={`p-2 rounded-sm transition ${
                      isActive
                        ? "bg-gray-950"
                        : "hover:bg-gray-900 ease-in-out duration-200"
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

      <div>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="bg-gray-950 p-2 rounded-full">
              <IoNotifications className="text-2xl text-gray-500" />
            </div>
          </TooltipTrigger>
          <TooltipContent>Notifikasi</TooltipContent>
        </Tooltip>
      </div>
    </nav>
  );
}
