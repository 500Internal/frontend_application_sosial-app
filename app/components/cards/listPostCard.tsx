import React from 'react'
import { Card, CardContent } from '~/common/shadcn/card'
import HeaderPost from '../headers/headerPost'
import type { PostType } from '~/common/types/postType'
import PostContent from '../contents/postContent'
import { Separator } from '~/common/shadcn/separator'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getLikeByPostId } from '~/services/likeService'
import { Button } from '~/common/shadcn/button'
import { Command, ThumbsUp } from 'lucide-react'
import LikeButton from '../buttons/likeButton'

export type Props = {
    post:PostType
}

export default function ListPostCard({post}:Props) {
    const {data} = useQuery({
        queryKey: ["like", post.id],
        queryFn: () => getLikeByPostId(post.id),
      });

  return (
    <Card className='bg-[#1d232a] mt-4  rounded-md border-0  shadow-lg'>
        <CardContent className='p-0 flex flex-col gap-1'>
            {post&&
            <HeaderPost post={post} />
            }
            {post&&
            <PostContent post={post} />
            }
            <div className='my-3'>
              <div className='flex justify-between px-4'>
                <span className='text-sm text-white/60'>{data?.data.length || 0} likes</span>
                <span>2 comments</span>
              </div>
                <Separator className='bg-gray-500' />
            </div>
            <div className='flex justify-between px-4'>
              <LikeButton post={post} like={data?.data || []} />
              <Command/>             
            </div>
        </CardContent>
    </Card>
  )
}
