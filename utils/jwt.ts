import jwt from "jsonwebtoken";

const verifyToken = (token: string, secret: string) => {  
    try {
        const verifiedToken = jwt.verify(token, secret);
        return {
            success: true,
            message: "token verified successfully",
            data: verifiedToken,
        };
    } catch (error: any) {
        // টোকেন শুধুমাত্র এক্সপায়ার হলে টার্মিনাল ক্লিন রাখতে সংক্ষিপ্ত মেসেজ দেখাবে
        if (error.name === "TokenExpiredError") {
            console.log("Access token expired, attempting to auto-refresh...");
        } else {
            // টোকেন যদি টেম্পারড বা অন্য কোনো কারণে ইনভ্যালিড হয়, তবে এরর মেসেজ দেখাবে
            console.log("Token verification failed:", error.message);
        }

        return {
            success: false,
            message: error.message,
        };
    }
}

export const jwtUtils = {
    verifyToken
}