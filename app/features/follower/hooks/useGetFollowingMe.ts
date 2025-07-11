import { useQuery } from "@tanstack/react-query"
import { getFollowingMe } from "../service/followService"

export const useGetFollowingMe = () => {
    return useQuery({
        queryKey: ["followingMe"],
        queryFn: getFollowingMe,
    })
}