import { LogOut } from 'lucide-react'
import React from 'react'
import { Button } from '~/common/shadcn/button'

export default function LogoutButton() {
  return (
    <Button variant='destructive' className='w-full'>
      <LogOut className='mr-2 h-4 w-4' />
      Logout
    </Button>
  )
}
