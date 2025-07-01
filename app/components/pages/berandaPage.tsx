import React from 'react'
import AlerModal from '../modals/dangerModal';
import { Button } from '~/common/shadcn/button';
import {toast, ToastContainer} from "react-toastify"

export default function BerandaPage() {
  const handleToast = () => {
    toast.success('success')
  }
  return (
    <>
    <div >
      <ToastContainer />
      <Button onClick={handleToast}>Toast</Button>
    </div>

    </>
  )
}
