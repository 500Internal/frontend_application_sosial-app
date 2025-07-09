import React from "react";
import { timeAgo } from "shared/helpers/timeAgo";
import { Avatar, AvatarFallback, AvatarImage } from "shared/shadcn/avatar";
import { Separator } from "shared/shadcn/separator";
import type { NotificationType } from "shared/types/notificationType";

type Props = {
  notifications: NotificationType[];
};

export default function NotificationSomeListSidebar({ notifications }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {notifications.map((notification) => (
        <div key={notification.id} className="flex flex-col  gap-1">
          <div className="flex items-center gap-2">
            <Avatar className="w-9 h-9">
              <AvatarImage
                src={notification.sender.profile.avatarImage || ""}
              />
              <AvatarFallback>
                {notification.sender.profile.name}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm text-white/80">
                {notification.sender.profile.name}
              </span>
              <span className="text-xs text-white/60">
                {timeAgo(notification.createdAt)}
              </span>
            </div>
          </div>
          <div className="flex flex-col text-left ml-3">
            <span className="text-sm  w-full text-ellipsis line-clamp-1 overflow-hidden text-white/80">
              {notification.message}
            </span>
          </div>
          <Separator className="bg-gray-600" />
        </div>
      ))}
    </div>
  );
}
