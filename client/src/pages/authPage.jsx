import AuthForm from "../component/authForm";

const AuthPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Section - Auth Form */}
      <AuthForm />

      {/* Right Section - Chat Preview */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-teal-600 to-teal-800 text-white items-center justify-center p-8">
        <div className="space-y-6">
          <img
            className="hidden md:block absolute  right-20 lg:right-22 lg:top-25 w-[20rem] lg:w-[25rem] xl:w-[35rem] "
            src="/bg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
