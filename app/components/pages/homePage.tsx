import React from 'react'
import AlerModal from '../modals/dangerModal';
import { Button } from '~/common/shadcn/button';

export default function HomePage() {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
    <AlerModal isOpen={isOpen} setOpen={setIsOpen} isLoading onConfirm={() => {}} title="title" description="description" />
    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    </>
  )
}
