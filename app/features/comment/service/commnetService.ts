import { apiClient } from "shared/helpers/apiClient";

type createRootCommentType = {
    postId: string;
    content: string;
}

export const createRootComment = async (data: createRootCommentType) => {
    return apiClient<void>({
        method: "POST",
        url: "/comments/root",
        data
    });
};


type createReplyCommentType = {
    commentId: string;
    content: string;
    parentId: string;
    postId: string
}
export const createReplyComment = async (data: createReplyCommentType) => {
    return apiClient<void>({
        method: "POST",
        url: "/comments/reply",
        data
    });
};