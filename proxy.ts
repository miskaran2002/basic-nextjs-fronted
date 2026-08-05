import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { JwtPayload } from "jsonwebtoken"
import { jwtUtils } from "./utils/jwt"
import { cookies } from "next/headers"
import { getNewAccessToken } from "./app/service/refreshToken"

const AUTH_ROUTES = ["/login", "/register"]
const PUBLIC_ROUTES = ["/", "/news"]

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const cookieStore = await cookies();

    let accessToken = request.cookies.get("accessToken")?.value;
    const refreshToken = request.cookies.get("refreshToken")?.value;

    // ১. প্রারম্ভিক টোকেন ভেরিফিকেশন (let ব্যবহার করা হয়েছে যাতে পরে এটি আপডেট করা যায়)
    let decodedAcessToken = accessToken ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string) : null;
    const decodedRefreshToken = refreshToken ? jwtUtils.verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET as string) : null;

    // ২. অ্যাক্সেস টোকেন এক্সপায়ার কিন্তু রিফ্রেশ টোকেন সচল থাকলে নতুন টোকেন তৈরি করা
    if (!decodedAcessToken?.success && decodedRefreshToken?.success) {
        const result = await getNewAccessToken();

        if (result && result.success) {
            const newAccessToken = result.data.accessToken;

            cookieStore.set("accessToken", newAccessToken, {
                httpOnly: true,
                maxAge: 60 * 60 * 24, // 1 day
                sameSite: "lax", 
            });
            
            accessToken = newAccessToken;
            // ক্রিশিয়াল ফিক্স: নতুন টোকেনটি এখানে রি-ডিকোড করা হলো যাতে নিচে এটি ডিলিট না হয়ে যায়
            decodedAcessToken = jwtUtils.verifyToken(newAccessToken, process.env.JWT_ACCESS_SECRET as string);
        }
    }

    // রাউট চেকিং (পাবলিক নাকি অথ রাইট)
    const isAuthRoute = AUTH_ROUTES.some((route) => pathname === route || pathname.startsWith(route + "/"));
    const isPublicRoute = PUBLIC_ROUTES.some((route) => pathname === route || pathname.startsWith(route + "/"));

    // টোকেন মেয়াদোত্তীর্ণ বা ইনভ্যালিড হলে সেটি মুছে ফেলা
    if (accessToken && !decodedAcessToken?.success) {
        cookieStore.delete("accessToken");
        // প্রোটেক্টেড বা ব্যক্তিগত রাউটে যাওয়ার চেষ্টা করলে লগইনে পাঠানো হবে
        if (!isPublicRoute && !isAuthRoute) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    let userRole = null;
    if (decodedAcessToken?.success && decodedAcessToken.data) {
        userRole = (decodedAcessToken.data as JwtPayload).role;
    }

    // ১. ইউজার লগইন না থাকলে এবং প্রোটেক্টেড রাউটে যাওয়ার চেষ্টা করলে লগইনে রিডাইরেক্ট করা হবে
    if (!accessToken && !isPublicRoute && !isAuthRoute) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // ২. লগইন করা ইউজার যদি পুনরায় লগইন/রেজিস্ট্রেশন পেজে যেতে চায়, তবে তাকে তার ড্যাশবোর্ডে রিডাইরেক্ট করা হবে
    if (accessToken && isAuthRoute) {
        if (userRole === "USER") {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        } else if (userRole === "ADMIN") {
            return NextResponse.redirect(new URL('/admin-dashboard', request.url));
        } else if (userRole === "AUTHOR") {
            return NextResponse.redirect(new URL('/author-dashboard', request.url));
        } else {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    // ৩. রোল ভিত্তিক সিকিউরিটি ও অথরাইজেশন চেক
    if (pathname.startsWith("/dashboard") && userRole !== "USER") {
        return NextResponse.redirect(new URL('/not-found', request.url));
    } 
    
    if (pathname.startsWith("/admin-dashboard") && userRole !== "ADMIN") {
        return NextResponse.redirect(new URL('/not-found', request.url));
    }
    
    if (pathname.startsWith("/author-dashboard") && userRole !== "AUTHOR") {
        return NextResponse.redirect(new URL('/not-found', request.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|favicon.ico|next/image|.*\\.png$).*)'
  ],
}