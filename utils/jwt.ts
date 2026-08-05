


import jwt from "jsonwebtoken";





const verifyToken = (token: string, secret: string) => {  
    
    try{
        const verifiedToken= jwt.verify(token,secret);
    return {
        success: true,
        message: "token verified successfully",
        data: verifiedToken,
    };

    }catch(error:any){
        console.log("token verified failed",error)
        return {
            success: false,
            message:error.message,
        }

    }
    
    
}

export const jwtUtils = {
   
    verifyToken
    
}