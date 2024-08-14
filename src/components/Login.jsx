import React from "react";

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/google-login";
  };

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-between">
      <div className="flex items-center justify-center p-3 border-b border-[#343a40] w-full">
        <img src="/main.png" alt="Logo" />
      </div>

      <div className="bg-[#121212] h-72 w-[420px] text-center flex flex-col items-center justify-evenly rounded-2xl border border-[#343A40]">
        <h2 className="text-white text-xl">Create a new account</h2>
        <div
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 text-[#cccccc] text-base border border-[#707172] p-2 w-80 rounded-md cursor-pointer"
        >
          <img src="/Frame.png" alt="Google Logo" />
          <p>Sign up with Google</p>
        </div>
        <button className="text-white bg-gradient-to-r from-[#4B63DD] to-[#0524BF] px-9 py-3 rounded-md">
          Create an Account
        </button>
        <p className="text-[#909296] text-base">
          Already have an account?{" "}
          <span className="text-[#c1c2c5] cursor-pointer">Sign In</span>
        </p>
      </div>

      <div className="bg-[#121212] text-[#5C5F66] w-full text-center p-2 text-xs border-t border-[#343a40]">
        <p>© 2023 Reachinbox. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
