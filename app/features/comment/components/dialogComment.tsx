import { Send } from 'lucide-react'
import React from 'react'
import { AlertDialog, AlertDialogContent, AlertDialogFooter } from 'shared/shadcn/alert-dialog'
import { Input } from 'shared/shadcn/input'
import { ScrollArea } from 'shared/shadcn/scroll-area'
import RootCommentForm from './rootCommentForm'

type Props = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DialogComment({ isOpen, setIsOpen }: Props) {
  return (
    <>
    <AlertDialog open={isOpen} onOpenChange={setIsOpen} >
        <AlertDialogContent className='h-[90vh] bg-[#1d232a] border-0'>
            <ScrollArea className="h-[75vh]">
                <p>asssssssssssssss</p>
                <p>asssssssssssssss</p>
            
            </ScrollArea>
            <AlertDialogFooter className='my-3 flex items-center justify-center'>
                <RootCommentForm />
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    </>
  )
}
