import React from 'react'
import { ImageDefaultEnum } from '~/common/enums/imageDefaultEnum'
import { localDate } from '~/common/helpers/localDate'
import { Avatar, AvatarFallback, AvatarImage } from '~/common/shadcn/avatar'
import type { PostType } from '~/common/types/postType'

export type Props = {
    post: PostType
}

export default function HeaderPost({post}:Props) {
  return (
    <section className='flex items-center gap-2'>
        <Avatar className='w-11 h-11'>
            <AvatarImage  src={post.user.profile.avatarImage || ImageDefaultEnum.Default} />
            <AvatarFallback>{post.user.profile.name || "profile"}</AvatarFallback>
        </Avatar>
        <div>
            <h4 className='font-semibold text-lg text-white/80'>{post.user.profile.name}</h4>
            <span className='text-sm text-white/60'>{localDate(post.createdAt)}</span>
        </div>
    </section>
  )
}
