import React from 'react'
import { ImageDefaultEnum } from '~/common/enums/imageDefaultEnum'
import { Avatar, AvatarFallback, AvatarImage } from '~/common/shadcn/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuTrigger } from '~/common/shadcn/dropdown-menu'
import type { ProfileType } from '~/common/types/profileType'
import LogoutButton from '../buttons/logoutButton'
import { Separator } from '~/common/shadcn/separator'

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
        <DropdownMenuLabel className='text-white'>Account</DropdownMenuLabel>
        <DropdownMenuGroup className='flex flex-col gap-2 p-2'>
        <Separator className='bg-gray-500' />
        <LogoutButton />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
