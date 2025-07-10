import { useQuery } from "@tanstack/react-query"
import { getUserNotFollower } from "../service/userService"

export const useGetUserNotFollowing = () => {
    return useQuery({
        queryKey: ["userNotFollowing"],
        queryFn: getUserNotFollower,
    })
}