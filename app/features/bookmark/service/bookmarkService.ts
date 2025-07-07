import { apiClient } from "shared/helpers/apiClient";

export const createPostBookmark = async (postId: string) => {
    return apiClient<void>({
        method: "POST",
        url: "/bookmarks",
        data: { postId },
    });
};

export const deletePostBookmark = async (bookmarkId: string) => {
    return apiClient<void>({
        method: "DELETE",
        url: `/bookmarks/${bookmarkId}`,
    });
};