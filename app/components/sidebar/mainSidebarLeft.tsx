import { FaUserFriends, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router";
import { Separator } from "~/common/shadcn/separator";
import ProfileButton from "../buttons/avaarButton";
import { FaBookmark } from "react-icons/fa"

const navItems = [
  { name: "teman", href: "/teman", icon: <FaUserFriends /> },
  { name: "group", href: "/group", icon: <FaUsers /> },
  { name: "tersimpan", href: "/tersimpan", icon: <FaBookmark /> },
];

export default function MainSidebarLeft() {
  return (
    <aside className="hidden lg:flex flex-col fixed top-16 left-0 h-[calc(100vh-4rem)] z-40 overflow-y-auto border-r bg-[#1d232a] pl-1 gap-6 w-72 py-4  shadow-2xl border-gray-800">
        <ProfileButton />
      <Separator orientation="horizontal" className="bg-gray-500" />
      <div className="flex flex-col gap-1">
        {navItems.map(({ name, href, icon }) => (
          <NavLink to={href} key={name}>
            {({ isActive }) => (
              <div
                className={`p-3 rounded-md items-center flex gap-4 transition ${
                  isActive
                    ? "bg-gray-600 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                <span className="text-2xl ">{icon}</span>
                <div>
                    <span className="text-sm">{name}</span>
                </div>
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
