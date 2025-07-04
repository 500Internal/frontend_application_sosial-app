import { useQuery } from "@tanstack/react-query"
import { getLikePostByPostId } from "../service/postService"

export const useGetLikePostByPostId = (postId:string) => {
    return useQuery({
        queryKey: ["like", postId],
        queryFn: () => getLikePostByPostId(postId),
    })
}