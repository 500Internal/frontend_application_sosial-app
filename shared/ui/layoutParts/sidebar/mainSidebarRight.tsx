import { IoNotifications } from "react-icons/io5";
import NotificationSomeListSidebar from "~/features/notification/components/notificationSomeListSidebar";
import { useGetSomeNotifications } from "~/features/notification/hooks/useGetSomeNotifications";

export default function MainSidebarRight() {
  const { data: someNotifications } = useGetSomeNotifications();
  return (
    <aside className="hidden lg:flex top-16 right-0 h-[calc(100vh-4rem)] z-40 overflow-y-auto fixed bg-[#1d232a] flex-col gap-4 w-60 py-4 px-3 border-l border-gray-800">
      <h2 className="text-lg text-white font-semibold">
        Notifikasi ({someNotifications?.data.length})
      </h2>
      <div className="">
        {someNotifications?.data.length === 0 ? (
          <div className="flex items-center gap-2">
            <IoNotifications className="text-white/60" />
            <span className="text-white/60">Tidak ada notifikasi</span>
          </div>
        ) : (
          <NotificationSomeListSidebar
            notifications={someNotifications?.data ?? []}
          />
        )}
      </div>
      <div className="text-sm text-gray-400">Teman Online: 5</div>
    </aside>
  );
}
