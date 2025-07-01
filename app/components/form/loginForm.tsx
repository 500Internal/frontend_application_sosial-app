import React from 'react'
import { Button } from '~/common/shadcn/button'
import { Input } from '~/common/shadcn/input'
import { useForm } from "react-hook-form"
import { loginSchema, type LoginSchema } from '~/common/schema/authSchema'
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from '@tanstack/react-query'
import { loginService } from '~/services/authService'

export default function LoginForm() {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    })
    // mutation
    const {mutate,isPending,} = useMutation({
        mutationFn: loginService,
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const onSubmit = (data:LoginSchema) => {
        mutate(data)
    }
  return (
    <form className='flex flex-col  gap-6' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-3 text-white/60'>
            <Input type='email' className='h-10' placeholder='email' {...register('email')} />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <Input type='password' className='h-10' placeholder='password' {...register('password')} />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <div>
            <Button disabled={isPending} type='submit' className='w-full bg-gray-600 text-gray-300'>Masuk</Button>
        </div>
    </form>
  )
}
