import { useQuery } from "@tanstack/react-query";
import { getCommentsCount } from "../service/commnetService";


export const useGetCommentCount = (postId: string) => {
    return useQuery({
        queryKey: ["comment", postId],
        queryFn: () => getCommentsCount(postId),
    });
}