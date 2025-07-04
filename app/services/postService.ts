import { apiClient } from "~/common/helpers/apiClient";
import type {
  MetaPostPaginationType,
  PostPaginationType,
  PostType,
} from "~/common/types/postType";

interface createPostSchema {
  caption: string;
  media: File[];
}

export const createPost = async (data: createPostSchema) => {
  // buat form data karena ada media/gambar
  const formData = new FormData();
  formData.append("caption", data.caption);
  // karena media berupa array file maka perlu looping
  if (data.media) {
    for (let i = 0; i < data.media.length; i++) {
      formData.append("media[]", data.media[i]);
    }
  }
  return apiClient<{ data: PostType }>({
    method: "POST",
    url: "/posts",
    data: formData,
  });
};

export const getPosts = async ({
  pageParam = 1,
}): Promise<{
  data: PostPaginationType;
  meta: MetaPostPaginationType;
  posts: PostType[];
}> => {
  const res = await apiClient<{
    data: PostPaginationType;
    meta: MetaPostPaginationType;
    posts: PostType[];
  }>({
    method: "GET",
    url: "/posts",
    params: { page: pageParam },
  });


  return {
    data: res.data,
    posts: res.data.data,
    meta: res.data.meta,
  };
};

//get create delete pa