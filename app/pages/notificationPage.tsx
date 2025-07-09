// src/pages/notification/page.tsx (jika pakai Next.js Pages Router)
// atau
// src/app/notification/page.tsx (jika pakai App Router)

import {
  Bell,
  CheckCheck,
  Heart,
  MessageCircle,
  UserPlus,
  XCircle,
} from "lucide-react";
import { useGetAllNotification } from "~/features/notification/hooks/useGetAllNotification";
import type { NotificationType } from "shared/types/notificationType";
import { timeAgo } from "shared/helpers/timeAgo";
import { Badge } from "shared/shadcn/badge";

export default function NotificationPage() {
  const { data: notifications } = useGetAllNotification();
  function renderIcon(type: NotificationType["type"]) {
    switch (type) {
      case "like":
        return <Heart className="text-pink-500" size={20} />;
      case "comment":
      case "comment_reply":
        return <MessageCircle className="text-blue-500" size={20} />;
      case "friend_request":
        return <UserPlus className="text-yellow-500" size={20} />;
      case "accepted_friend_request":
        return <CheckCheck className="text-green-500" size={20} />;
      case "rejected_friend_request":
        return <XCircle className="text-red-500" size={20} />;
      default:
        return <Bell className="text-gray-400" size={20} />;
    }
  }
  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <h1 className="text-xl text-white/80 font-bold mb-4">Notifikasi</h1>

      <div className="space-y-3">
        {notifications?.data.map((notif) => (
          <div
            key={notif.id}
            className={`flex items-center justify-between gap-3 p-3 rounded-lg bg-[#1d232a] `}
          >
            <div className="flex items-center gap-3">
              {renderIcon(notif.type)}
              <div className="flex-1">
                <p className="text-sm whitespace-pre-wrap break-words break-all text-left  text-white/80">
                  {notif.message}
                </p>
                <span className="text-xs text-gray-500">
                  {timeAgo(notif.createdAt)}
                </span>
              </div>
            </div>
            <div>
              {notif.isRead ? (
                <Badge
                  variant="outline"
                  className="text-green-500 border-green-500"
                >
                  Read
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="text-red-500 border-red-500"
                >
                  Unread
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
