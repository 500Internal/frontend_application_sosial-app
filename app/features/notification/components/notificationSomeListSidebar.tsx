import React from "react";
import { timeAgo } from "shared/helpers/timeAgo";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "shared/shadcn/avatar";
import { Badge } from "shared/shadcn/badge";
import { Separator } from "shared/shadcn/separator";
import type { NotificationType } from "shared/types/notificationType";

type Props = {
  notifications: NotificationType[];
};

export default function NotificationSomeListSidebar({
  notifications,
}: Props) {

  // Notification Type to Badge expression
function badgeExpression(type: NotificationType["type"]) {
  switch (type) {
    case "like":
      return <Badge variant="outline" className="text-blue-500 border-blue-500">Like</Badge>
    case "comment":
      return <Badge variant="outline" className="text-green-500 border-green-500">Comment</Badge>
    case "friend_request":
      return <Badge variant="outline" className="text-yellow-500 border-yellow-500">Request</Badge>
    case "comment_reply":
      return <Badge variant="outline" className="text-purple-500 border-purple-500">Reply</Badge>
    case "accepted_friend_request":
      return <Badge variant="outline" className="text-emerald-500 border-emerald-500">Accepted</Badge>
    case "rejected_friend_request":
      return <Badge variant="outline" className="text-rose-500 border-rose-500">Rejected</Badge>
    default:
      return <Badge variant="secondary">Other</Badge>
  }
}
  return (
    <div className="flex flex-col gap-2">
      {notifications.map((notification, i) => (
        <div
          key={notification.id}
          className="flex flex-col gap-1 p-2 rounded-md hover:bg-white/5 transition"
        >
          <div className="flex items-center gap-3">
            <Avatar className="w-9 h-9">
              <AvatarImage
                src={notification.sender?.profile?.avatarImage || ""}
                alt={notification.sender?.profile?.name || "User"}
              />
              <AvatarFallback>
                {notification.sender?.profile?.name
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase() || "US"}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm text-white/90 font-medium">
                {notification.sender?.profile?.name || "Unknown"}
              </span>
              <span className="text-xs text-white/60">
                {timeAgo(notification.createdAt)}
              </span>
            </div>
            <div>
              {badgeExpression(notification.type)}
            </div>
          </div>
          <div className="ml-12 text-sm text-white/80 line-clamp-2">
            {notification.message}
          </div>
          {i !== notifications.length - 1 && (
            <Separator className="bg-white/10 mt-2" />
          )}
        </div>
      ))}
    </div>
  );
}
