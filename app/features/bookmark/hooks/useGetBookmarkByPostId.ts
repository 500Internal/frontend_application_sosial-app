import { useQuery } from "@tanstack/react-query"
import { getBookmarkByPostId } from "../service/bookmarkService"

export const useGetBookmarkByPostId = (postId: string) => {
    return useQuery({
        queryKey: ["bookmark", postId],
        queryFn: () => getBookmarkByPostId(postId),
    })
}