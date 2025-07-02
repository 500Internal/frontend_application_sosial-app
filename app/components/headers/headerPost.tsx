import React from 'react'
import { ImageDefaultEnum } from '~/common/enums/imageDefaultEnum'
import { Avatar, AvatarFallback, AvatarImage } from '~/common/shadcn/avatar'
import type { PostType } from '~/common/types/postType'

export type Props = {
    post: PostType
}

export default function HeaderPost({post}:Props) {
  return (
    <section>
        <Avatar className='w-12 h-12'>
            <AvatarImage  src={post.user.profile.avatarImage || ImageDefaultEnum.Default} />
            <AvatarFallback>{post.user.profile.name || "profile"}</AvatarFallback>
        </Avatar>
    </section>
  )
}
