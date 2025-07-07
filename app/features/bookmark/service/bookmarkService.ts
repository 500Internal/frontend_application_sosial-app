import { apiClient } from "shared/helpers/apiClient";

export const createPostBookmark = async (postId: string) => {
    return apiClient<void>({
        method: "POST",
        url: "/bookmarks",
        data: { postId },
    });
};