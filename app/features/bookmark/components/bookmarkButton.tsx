import { Bookmark } from 'lucide-react'
import React from 'react'
import type { PostType } from 'shared/types/postType'
import { useGetBookmarkByPostId } from '../hooks/useGetBookmarkByPostId'
import { useSession } from '~/features/auth/hooks/useSession'

type Props = {
  post: PostType
}

export default function BookmarkButton({ post }: Props) {
  const {data: session} = useSession();
  const {data: bookmark} = useGetBookmarkByPostId(post.id);
  const isBookmark = bookmark?.data && bookmark?.data.userId === session?.data.id
  return (
    <button className="flex p-1 rounded hover:bg-amber-50/25 items-center gap-2">
        <Bookmark size={25} className={`text-white/60 ${isBookmark && 'text-amber-400 fill-amber-500' }`} />
    </button>
  )
}
