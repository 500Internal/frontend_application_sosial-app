import { Send } from 'lucide-react'
import React from 'react'
import { AlertDialog, AlertDialogContent, AlertDialogFooter } from 'shared/shadcn/alert-dialog'
import { Input } from 'shared/shadcn/input'
import { ScrollArea } from 'shared/shadcn/scroll-area'
import RootCommentForm from './rootCommentForm'
import type { PostType } from 'shared/types/postType'
import { useGetNestedComment } from '../hooks/useGetNestedComment'
import NestedComment from './nestedComment'
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog'


type Props = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    post:PostType
}

export default function DialogComment({ isOpen, setIsOpen, post }: Props) {
    const {data:nestedComment, isLoading:nestedCommentLoading} = useGetNestedComment(post.id,isOpen)
  return (
    <>
    <AlertDialog open={isOpen} onOpenChange={setIsOpen} >
        <AlertDialogContent className='h-[90vh] bg-[#1d232a] !border-none !shadow-none !ring-0 !outline-none focus-visible:ring-0 focus-visible:outline-none'>
            <AlertDialogTitle onClick={() => setIsOpen(false)} className='text-2xl text-white text-end h-[2vh] font-semibold'>X</AlertDialogTitle>
            <ScrollArea className="h-[70vh] mt-2 !border-none !shadow-none !ring-0 !outline-none focus-visible:ring-0 focus-visible:outline-none">
                <NestedComment comments={nestedComment?.data || []}/>
            </ScrollArea>
            <AlertDialogFooter className='my-3 flex items-center justify-center'>
                <RootCommentForm postId={post.id} />
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    </>
  )
}
