import LoginForm from "../_components/LoginForm";

export default function LoginPage() {
 
  return (
  <>
  <div className="flex min-h-screen items-center justify-center
  ">
    <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
      <div className="space-y-2 text-centre">
        {/* form generic text */}
      <h1 className="space-y-2 text-centre">
        Welcome back!
      </h1>
      <p className="text-gray-500">
        Please enter your email and password to sign in to your account.
      </p>
      
        
      </div>

       {/* form */}
    <LoginForm />
      
    </div>
   

  </div>

  </>
    
  )
}
