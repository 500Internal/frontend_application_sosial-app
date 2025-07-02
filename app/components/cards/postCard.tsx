import React from 'react'
import { Card, CardContent } from '~/common/shadcn/card'
import HeaderPost from '../headers/headerPost'
import type { PostType } from '~/common/types/postType'

export type Props = {
    post:PostType
}

export default function PostCard({post}:Props) {
  return (
    <Card className='bg-[#1d232a] mt-4 rounded-md border-0  shadow-lg'>
        <CardContent className=''>
            {post&&
            <HeaderPost post={post} />
            }
        </CardContent>
    </Card>
  )
}
