import React from 'react'
import { Card, CardContent } from '~/common/shadcn/card'
import LoginForm from '../form/loginForm'

export default function LoginCard() {
  return (
    <Card className='md:w-2/8 bg-[#1d232a] border-gray-700 rounded-md'>
        <CardContent>
            <LoginForm />
        </CardContent>
    </Card>
  )
}
