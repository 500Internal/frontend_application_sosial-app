import React from 'react'
import { Card, CardContent } from '~/common/shadcn/card'
import HeaderPost from '../headers/headerPost'
import type { PostType } from '~/common/types/postType'
import PostContent from '../contents/postContent'

export type Props = {
    post:PostType
}

export default function PostCard({post}:Props) {
  return (
    <Card className='bg-[#1d232a] mt-4  rounded-md border-0  shadow-lg'>
        <CardContent className='p-0'>
            {post&&
            <HeaderPost post={post} />
            }
            {post&&
            <PostContent post={post} />
            }
        </CardContent>
    </Card>
  )
}
