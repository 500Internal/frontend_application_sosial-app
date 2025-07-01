import React from 'react'
import { Card, CardContent } from '~/common/shadcn/card'
import HomeHeaderForm from '../form/homeHeaderForm'

export default function HomeHeaderCard() {
  return (
    <>
    <Card className='bg-[#1d232a] border-0  shadow-lg'>
        <CardContent>
            <HomeHeaderForm />
        </CardContent>
    </Card>
    </>
  )
}
