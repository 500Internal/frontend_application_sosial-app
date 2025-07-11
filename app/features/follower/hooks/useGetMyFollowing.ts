import { useQuery } from "@tanstack/react-query"
import { getMyFollowing } from "../service/followService"

export const useGetMyFollowing = () => {
    return useQuery({
        queryKey: ["myFollowing"],
        queryFn: getMyFollowing,
    })
}