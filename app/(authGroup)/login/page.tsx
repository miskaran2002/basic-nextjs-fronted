import LoginForm from "../_components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-gradient p-4">
     
      <div className="w-full max-w-md space-y-6 rounded-lg border bg-white p-8 shadow-lg">
        <div className="space-y-2">
        
          <h1 className="text-3xl font-extrabold text-gradient text-center">
            Welcome back!
          </h1>
          <p className="text-center text-gray-500">
            Please enter your email and password to sign in to your account.
          </p>
        </div>

       
        <LoginForm />
      </div>
    </div>
  );
}