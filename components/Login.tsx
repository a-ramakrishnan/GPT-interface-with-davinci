"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image src="/logo-image1.jpg" width={150} height={150} alt="logo" />{" "}
      <button
        onClick={() => signIn("google")}
        className="text-white mt-4 text-3xl animate-pulse font-semibold"
      >
        Sign In to Use Chat GPT
      </button>
    </div>
  );
}

export default Login;
