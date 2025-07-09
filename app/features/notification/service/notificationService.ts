import { apiClient } from "shared/helpers/apiClient";
import type { NotificationType } from "shared/types/notificationType";

export const getSomeNotifications = async (): Promise<{ data: NotificationType[] }> => {
    return apiClient<{ data: NotificationType[] }>({
        method: "GET",
        url: "/notifications/some",
    });
};