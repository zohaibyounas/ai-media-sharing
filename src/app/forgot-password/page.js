"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.fotoshareai.com/auth/password/forgot",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          errorData.detail?.[0]?.msg || "Failed to send reset link"
        );
      }

      toast.success("Password reset link sent to your email 📧", {
        duration: 4000,
      });
      setTimeout(() => router.push("/login"), 4000);
    } catch (err) {
      console.error("❌ Forgot password error:", err);
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-3 sm:px-6">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl lg:max-w-[70%] rounded-3xl bg-white shadow-md overflow-hidden">
        {/* Left Illustration */}
        <div className="flex w-full lg:w-[45%] items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 bg-white p-6 sm:p-10">
          <Image
            src="/login.png"
            alt="Forgot password illustration"
            width={500}
            height={500}
            className="object-contain w-full max-w-[360px] md:max-w-[420px] lg:max-w-[480px] h-auto"
            priority
          />
        </div>

        {/* Right Form */}
        <div className="flex w-full lg:w-[55%] flex-col justify-center px-6 sm:px-10 md:px-14 py-10 min-h-[400px]">
          <div className="text-center lg:text-left mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-1">
              Forgot Password?
            </h2>
            <p className="text-sm md:text-base text-gray-500">
              Enter your registered email to receive a password reset link.
            </p>
          </div>

          <form onSubmit={handleForgotPassword} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10 md:h-11 text-sm md:text-base"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0b1222] hover:bg-[#1a243d] text-white text-sm md:text-base"
            >
              {loading ? "Sending link..." : "Send Reset Link"}
            </Button>
          </form>

          <p className="text-center text-xs sm:text-sm text-gray-500 mt-6">
            Remember your password?{" "}
            <Link
              href="/login"
              className="text-[#0b1222] font-medium hover:underline"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
