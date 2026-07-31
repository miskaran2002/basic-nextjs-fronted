"use server"

import { cookies } from "next/headers";

export const getMe = async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    console.log(accessToken)
  
    if (!accessToken) {
        return {
            success: false,
            message: "User not logged in"
        }
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/me`, {
        headers: {
            // আপনার ব্যাকএন্ড যদি Bearer Token আশা করে, তবে নিচের মতো করে দিতে পারেন:
            Authorization: `Bearer ${accessToken}` 
            // অথবা যদি ব্যাকএন্ড সরাসরি টোকেন চায়: Authorization: accessToken
        }
    });

    // এখানে await যোগ করা হয়েছে
    const result = await res.json(); 
    console.log(result);
    
    // ডাটাটি অবশ্যই রিটার্ন করতে হবে
    return result; 
}