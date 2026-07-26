"use client"



import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const LoginForm = () => {
  return (
    
        <form className='space-y-4'>
            <Card className='p-5 space-y-4'>
               <Input name="email" type="email" placeholder='Enter You Email'/>
               <Input name="password" type="password" placeholder='Enter You Password'/>
               <Button type="submit">Login</Button>
            </Card>

        </form>
    
  )
}

export default LoginForm
