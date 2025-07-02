import React from 'react'
import type { PostType } from '~/common/types/postType'
type Props = {
    post: PostType
}

export default function PostContent({post}: Props) {
  return (
    <section className='flex flex-col gap-2 my-3'>
        <p className='text-sm font-mono text-white/60 whitespace-pre-wrap break-words break-all text-left'>{post.caption}</p>
    </section>
  )
}
