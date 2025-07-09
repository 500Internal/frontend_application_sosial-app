import { useQuery } from "@tanstack/react-query"
import { getNotificationUnread } from "../service/notificationService"

export const useGetNotificationUnread = () => {
    return useQuery({
        queryKey: ["notificationUnread"],
        queryFn: getNotificationUnread,
    })
}