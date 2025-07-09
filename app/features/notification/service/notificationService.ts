import { apiClient } from "shared/helpers/apiClient";
import type { NotificationType } from "shared/types/notificationType";

export const getSomeNotifications = async (): Promise<{ data: NotificationType[] }> => {
    return apiClient<{ data: NotificationType[] }>({
        method: "GET",
        url: "/notifications/some",
    });
};

export const getNotificationUnread = async (): Promise<{ data: number }> => {
    return apiClient<{ data: number }>({
        method: "GET",
        url: "/notifications/count",
    });
};

export const getAllNotifications = async (): Promise<{ data: NotificationType[] }> => {
    return apiClient<{ data: NotificationType[] }>({
        method: "GET",
        url: "/notifications",
    });
};

export const updateAllNotifications = async (): Promise<void> => {
    return apiClient<void>({
        method: "PATCH",
        url: "/notifications",
    });
}