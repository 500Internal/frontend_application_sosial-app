import { useQuery } from "@tanstack/react-query"
import { getAllNotifications } from "../service/notificationService"

export const useGetAllNotification = () => {
    return useQuery({
        queryKey: ["allNotifications"],
        queryFn: getAllNotifications,
    })
}