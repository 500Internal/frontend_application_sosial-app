import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '~/common/shadcn/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '~/common/shadcn/dropdown-menu'

export default function ProfildropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='w-12 h-12'>
          <AvatarImage  src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-[#1d232a]  border-gray-600/65 rounded-sm shadow-lg'>
        <DropdownMenuLabel>Account</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
