"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

type LoginState={
    success: true,
    status:number,
    message:string
    data: {
        accessToken:string,
        refreshToken:string
    }
}

export const loginAction = async (prevState:LoginState,formData:FormData) => {
    console.log("formData")
    console.log(prevState)
    const email = formData.get("email")
    const password = formData.get("password")

    const  payload = {
        email,
        password
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
       
    });

    const result= await res.json()
    if (result.success){
        const cookieStore=  await cookies()
        cookieStore.set("accessToken",result.data.accessToken,{
            maxAge: 60*60*24,
            httpOnly: true,
            sameSite: "lax",
           
        })
        cookieStore.set("refreshToken",result.data.refreshToken,{
            maxAge: 60*60*24*7,
            httpOnly: true,
            sameSite: "lax",
        })

        redirect("/")


    }
    return result
    
}