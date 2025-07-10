import { useQuery } from "@tanstack/react-query"
import { getUserNotFollower } from "../service/userService"

export const useGetUserNotFollower = () => {
    return useQuery({
        queryKey: ["userNotFollower"],
        queryFn: getUserNotFollower,
    })
}