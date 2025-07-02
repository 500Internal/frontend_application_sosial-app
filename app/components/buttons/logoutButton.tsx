import { LogOut } from 'lucide-react'
import React from 'react'
import { Button } from '~/common/shadcn/button'
import DangerModal from '../modals/dangerModal'
import { useMutation } from '@tanstack/react-query'
import { logOut } from '~/services/authService'
import { toast } from 'sonner'

export default function LogoutButton() {
  const [isOpen, setIsOpen] = React.useState(false)

  // logOut mutation
  const {mutate,isPending} = useMutation({
    mutationFn:logOut,
    onSuccess: () => {
      toast.success('Logout berhasil')
      setIsOpen(false)
    },
    onError: () => {
      toast.error('Logout gagal')
    }
  })

  const handleLogout = () => {
    mutate()
  }
  return (
    <>
    <DangerModal
    isLoading={isPending}
    isOpen={isOpen}
    setOpen={setIsOpen}
    onConfirm={handleLogout}
    title='Logout'
    description='Apakah kamu yakin ingin logout?  '
    />
    <Button onClick={() => setIsOpen(true)} variant='destructive' className='w-full'>
      <LogOut className='mr-2 h-4 w-4' />
      Logout
    </Button>
    </>
  )
}
