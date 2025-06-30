import { IoNotifications } from "react-icons/io5";

export default function MainSidebarRight() {
  return (
    <aside className="hidden lg:flex flex-col gap-4 w-60 py-4 px-3 border-l border-gray-800">
      <h2 className="text-lg font-semibold">Notifikasi</h2>
      <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-md">
        <IoNotifications className="text-xl text-gray-400" />
        <span className="text-sm">Kamu punya 3 notifikasi baru</span>
      </div>
      <div className="text-sm text-gray-400">Teman Online: 5</div>
    </aside>
  );
}
