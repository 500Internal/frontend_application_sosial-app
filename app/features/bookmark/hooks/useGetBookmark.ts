import { useQuery } from "@tanstack/react-query";
import { getBookmark } from "../service/bookmarkService";

export const useGetBookmark = () => {
    return useQuery({
        queryKey: ["bookmarks"],
        queryFn: getBookmark,
    });
};