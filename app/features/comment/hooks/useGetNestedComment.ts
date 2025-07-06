import { useQuery } from "@tanstack/react-query";
import { getNestedComments } from "../service/commnetService";

export const useGetNestedComment = (postId: string, isOpen: boolean) => {
    return useQuery({
        queryKey: ["commentNested", postId],
        queryFn: () => getNestedComments(postId),
        enabled: isOpen && !!postId
    });
}