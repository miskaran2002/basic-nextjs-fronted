"use client"

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const RegisterForm = () => {
  return (
    <form className='space-y-4'>
        <Card className='p-5 space-y-4'>
           <h2 className="text-xl font-bold text-center">Create an Account</h2>
           
           <Input name="name" type="text" placeholder='Enter Your Name'/>
           <Input name="email" type="email" placeholder='Enter Your Email'/>
           <Input name="password" type="password" placeholder='Enter Your Password'/>
           <Input name="confirmPassword" type="password" placeholder='Confirm Your Password'/>
           
           <Button type="submit" className="w-full">Register</Button>
        </Card>
    </form>
  )
}

export default RegisterForm