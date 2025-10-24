"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl lg:max-w-[70%] overflow-hidden rounded-3xl bg-white shadow-md">
        {/* Left Illustration */}
        <div className="w-full lg:w-[45%] bg-white flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 p-8">
          <Image
            src="/login.png"
            alt="Register illustration"
            width={400}
            height={400}
            className="object-contain max-w-full h-auto"
            priority
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 sm:px-10 py-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1 text-center lg:text-left">
            Register Account
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-center lg:text-left">
            Get your free account now
          </p>

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter email"
                className="h-10 text-sm"
              />
            </div>

            {/* Username */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Username
              </label>
              <Input
                type="text"
                placeholder="Enter username"
                className="h-10 text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter Password"
                className="h-10 text-sm"
              />
            </div>

            {/* Terms of Use */}
            <p className="text-xs text-gray-500 mt-1">
              By registering you agree to the Photomo{" "}
              <a
                href="#"
                className="text-[#0b1222] hover:underline font-medium"
              >
                Terms of Use
              </a>
            </p>

            {/* Register Button */}
            <Button
              type="submit"
              className="w-full bg-[#0b1222] hover:bg-[#1a243d] text-white mt-2"
            >
              Register
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <Separator />
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-gray-500">
              Or
            </span>
          </div>

          {/* Google Sign Up */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center space-x-2 border-gray-200"
          >
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              width={18}
              height={18}
            />
            <span className="text-sm text-gray-700">Sign up with Google</span>
          </Button>

          {/* Already Have Account */}
          <p className="text-center text-xs text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#0b1222] font-medium hover:underline"
            >
              Login
            </Link>
          </p>

          {/* Footer Links */}
          <div className="flex justify-center gap-1 mt-4 text-[11px] text-gray-400">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <span>&amp;</span>
            <Link href="#" className="hover:underline">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
