import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { JwtPayload } from "jsonwebtoken"
import { jwtUtils } from "./utils/jwt"
import { cookies } from "next/headers"

const AUTH_ROUTES = ["/login", "/register"]
const PUBLIC_ROUTES = ["/", "/news"]

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const cookieStore = await cookies();
    const accessToken = request.cookies.get("accessToken")?.value;

    // রাউট চেকিং (পাবলিক নাকি অথ রাইট)
    const isAuthRoute = AUTH_ROUTES.some((route) => pathname === route || pathname.startsWith(route + "/"));
    const isPublicRoute = PUBLIC_ROUTES.some((route) => pathname === route || pathname.startsWith(route + "/"));

    // টোকেন ভেরিফিকেশন
    const decodedToken = accessToken ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string) : null;

    // টোকেন মেয়াদোত্তীর্ণ বা ইনভ্যালিড হলে সেটি মুছে ফেলা
    if (accessToken && !decodedToken?.success) {
        cookieStore.delete("accessToken");
        // প্রোটেক্টেড বা ব্যক্তিগত রাউটে যাওয়ার চেষ্টা করলে লগইনে পাঠানো হবে
        if (!isPublicRoute && !isAuthRoute) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    let userRole = null;
    
    if (decodedToken?.success && decodedToken.data) {
        userRole = (decodedToken.data as JwtPayload).role;
    }

    // ১. ইউজার লগইন না থাকলে এবং প্রোটেক্টেড রাউটে যাওয়ার চেষ্টা করলে লগইনে রিডাইরেক্ট করা হবে
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