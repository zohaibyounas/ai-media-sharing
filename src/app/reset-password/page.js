"use client";
"use client";
export const dynamic = "force-dynamic";
export const revalidate = 0; // 🚫 ensures it's not pre-rendered or cached
export const fetchCache = "force-no-store";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [token, setToken] = useState("");

  // ✅ extract token safely (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const t = searchParams.get("token");
      if (t) setToken(t);
    }
  }, [searchParams]);

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.fotoshareai.com/auth/password/reset",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token,
            code,
            email,
            newPassword,
          }),
        }
      );

      // ✅ Handle cases when response body is empty
      let data = null;
      try {
        data = await res.json();
      } catch (err) {
        console.warn("⚠️ No JSON body returned from API");
      }

      if (!res.ok) {
        throw new Error(
          data?.detail?.[0]?.msg ||
            data?.message ||
            "Password reset failed. Please try again."
        );
      }

      toast.success("✅ Password has been reset successfully!", {
        duration: 4000,
      });

      setTimeout(() => router.push("/login"), 4000);
    } catch (err) {
      console.error("❌ Reset password error:", err);
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
            alt="Reset password illustration"
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
              Reset Password
            </h2>
            <p className="text-sm md:text-base text-gray-500">
              Enter your email, reset code, and new password below.
            </p>
          </div>

          <form onSubmit={handleReset} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Reset Code
              </label>
              <Input
                type="text"
                placeholder="Enter reset code from email"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                New Password
              </label>
              <Input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0b1222] hover:bg-[#1a243d] text-white text-sm md:text-base"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>

          <p className="text-center text-xs sm:text-sm text-gray-500 mt-6">
            Back to{" "}
            <Link
              href="/login"
              className="text-[#0b1222] font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
