import { Bookmark } from 'lucide-react'
import React from 'react'
import type { PostType } from 'shared/types/postType'
import { useGetBookmarkByPostId } from '../hooks/useGetBookmarkByPostId'
import { useSession } from '~/features/auth/hooks/useSession'
import { useCreatePostBookmark } from '../hooks/useCreatePostBookmark'
import { useDeletePostBookmark } from '../hooks/useDeletePostBookmark'

type Props = {
  post: PostType
}

export default function BookmarkButton({ post }: Props) {
  const { data: session } = useSession();
  const userId = session?.data?.id;

  // Stop di sini kalau belum login
  if (!userId) return null;

  const { data: bookmark } = useGetBookmarkByPostId(post.id);
  const isBookmark = bookmark?.data?.userId === userId;

  const { addBookmark } = useCreatePostBookmark(post.id);

  // ❗ Jangan panggil useDeletePostBookmark jika id-nya belum ada
  const { deleteBookmark } = useDeletePostBookmark(
    bookmark?.data?.id ?? '',
    post.id
  );

  const handleBookmark = () => {
    if (isBookmark) {
      if (!bookmark?.data?.id) return console.warn('Bookmark ID not found!');
      deleteBookmark();
    } else {
      addBookmark();
    }
  };

  return (
    <button
      onClick={handleBookmark}
      className="flex p-1 rounded hover:bg-amber-50/25 items-center gap-2"
    >
      <Bookmark
        size={25}
        className={`text-white/60 ${
          isBookmark ? 'text-amber-400 fill-amber-500' : ''
        }`}
      />
    </button>
  );
}
