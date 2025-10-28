"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.fotoshareai.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Handle unauthorized response
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Invalid email or password");
      }

      const data = await res.json();

      // ✅ Store token automatically (works on Vercel too)
      const token = data.access_token || data.token || data.accessToken || null;

      if (token) {
        localStorage.setItem("access_token", token);
      } else {
        console.warn("⚠️ No token found in API response:", data);
      }

      // ✅ Redirect to dashboard
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-3 sm:px-6">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl lg:max-w-[70%] rounded-3xl bg-white shadow-md overflow-hidden">
        {/* Left Illustration */}
        <div className="flex w-full lg:w-[45%] items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 bg-white p-6 sm:p-10">
          <div className="w-full flex justify-center">
            <Image
              src="/login.png"
              alt="Login illustration"
              width={500}
              height={500}
              className="object-contain w-full max-w-[360px] md:max-w-[420px] lg:max-w-[480px] h-auto"
              priority
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex w-full lg:w-[55%] flex-col justify-center px-6 sm:px-10 md:px-14 py-10 min-h-[400px]">
          <div className="text-center lg:text-left mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-1">
              Welcome Back!
            </h2>
            <p className="text-sm md:text-base text-gray-500">
              Sign in to continue to Photmo
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10 md:h-11 text-sm md:text-base"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <a href="#" className="text-xs text-gray-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <Input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-10 md:h-11 text-sm md:text-base"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-normal text-gray-600"
              >
                Remember me
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Login Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0b1222] hover:bg-[#1a243d] text-white text-sm md:text-base"
            >
              {loading ? "Logging in..." : "Log In"}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <Separator />
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs sm:text-sm text-gray-500">
              Or
            </span>
          </div>

          {/* Google Sign In */}
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
            <span className="text-sm md:text-base text-gray-700">
              Sign in with Google
            </span>
          </Button>

          {/* Register Link */}
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-[#0b1222] font-medium hover:underline"
            >
              Register
            </Link>
          </p>

          {/* Footer Links */}
          <div className="flex justify-center flex-wrap gap-1 mt-4 text-[11px] sm:text-xs text-gray-400">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>&amp;</span>
            <a href="#" className="hover:underline">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
