import RegisterForm from "../_components/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
          <div className="space-y-2 text-center">
            {/* form generic text */}
            <h1 className="text-2xl font-bold">
              Create an account
            </h1>
            <p className="text-gray-500">
              Please enter your details below to create your new account.
            </p>
          </div>

          {/* form */}
          <RegisterForm />
        </div>
      </div>
    </>
  );
}