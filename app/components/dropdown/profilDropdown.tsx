import React from 'react'
import { ImageDefaultEnum } from '~/common/enums/imageDefaultEnum'
import { Avatar, AvatarFallback, AvatarImage } from '~/common/shadcn/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '~/common/shadcn/dropdown-menu'
import type { ProfileType } from '~/common/types/profileType'

type Props = {
  profile:ProfileType
}

export default function ProfildropDown({profile}:Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='w-12 h-12'>
          <AvatarImage  src={profile.avatarImage || ImageDefaultEnum.Default } />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-[#1d232a]  border-gray-600/65 rounded-sm shadow-lg'>
        <DropdownMenuLabel>Account</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
