"use server"

import { cookies } from "next/headers";

export const getNewAccessToken = async () => {
    try {
        const cookieStore = await cookies();
        const refreshToken = cookieStore.get("refreshToken")?.value || null;
      
        if (!refreshToken) {
            return {
                success: false,
                message: "refreshToken not found"
            };
        }

        const backendApiUrl = process.env.BACKEND_API_URL;
        if (!backendApiUrl) {
            return {
                success: false,
                message: "Backend API URL is not configured in .env file."
            };
        }

        const res = await fetch(`${backendApiUrl}/api/auth/refresh-token`, {
            headers: {
                Authorization: `Bearer ${refreshToken}` 
            },
            cache: "no-store",
        });

        if (!res.ok) {
            return {
                success: false,
                message: `Failed to refresh token. Status code: ${res.status}`
            };
        }

        const result = await res.json(); 
        return result; 

    } catch (error) {
        console.error("Error in getNewAccessToken:", error);
        return {
            success: false,
            message: "Failed to connect to authentication server."
        };
    }
}