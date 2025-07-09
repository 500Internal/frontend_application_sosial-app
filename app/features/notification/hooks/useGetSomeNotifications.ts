import { useQuery } from "@tanstack/react-query"
import { getSomeNotifications } from "../service/notificationService"

export const useGetSomeNotifications = () => {
    return useQuery({
        queryKey: ["someNotifications"],
        queryFn: getSomeNotifications,
    })
}