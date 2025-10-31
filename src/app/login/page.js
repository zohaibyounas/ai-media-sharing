"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Google Sign-In setup
  useEffect(() => {
    const loadGoogle = () => {
      if (!window.google || window.googleInitialized) return;
      window.googleInitialized = true;

      google.accounts.id.initialize({
        client_id:
          "1024635425185-pupqinl9kj4nq1hv5eq7mu5jbj4nkuvs.apps.googleusercontent.com",
        callback: async (googleResponse) => {
          try {
            console.log("🟢 Google Response:", googleResponse);

            const idToken = googleResponse.credential;
            const apiRes = await fetch(
              "https://api.fotoshareai.com/auth/oauth/google/token",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idToken }),
              }
            );

            const data = await apiRes.json();
            if (!apiRes.ok)
              throw new Error(data.message || "Google Sign-in failed");

            const token =
              data.accessToken || data.access_token || data.token || null;

            if (token) {
              localStorage.setItem("access_token", token);
              console.log("✅ Google access_token stored:", token);
            }

            localStorage.setItem("user", JSON.stringify(data.user));
            console.log("👤 Google User stored:", data.user);

            toast.success(
              `Login successful! Welcome ${data.user?.username || "user"} 👋`,
              { duration: 5000 }
            );

            // ⏳ Wait 5 seconds before redirect
            setTimeout(() => router.push("/dashboard"), 5000);
          } catch (err) {
            console.error("❌ Google Login Error:", err);
            setMessage(`❌ ${err.message}`);
          }
        },
      });
    };

    if (!document.getElementById("google-client-script")) {
      const script = document.createElement("script");
      script.id = "google-client-script";
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = loadGoogle;
      document.body.appendChild(script);
    } else {
      loadGoogle();
    }
  }, [router]);

  // ✅ Trigger Google popup
  const handleGoogleSignIn = () => {
    if (!window.google || !window.googleInitialized) {
      setMessage("⚠️ Google Sign-In not ready yet. Please try again shortly.");
      return;
    }
    google.accounts.id.prompt();
  };

  // ✅ Email/Password login
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

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Invalid email or password");

      const token = data.access_token || data.token || data.accessToken || null;

      if (token) {
        localStorage.setItem("access_token", token);
      }

      const user = {
        email: email,
        name: data.user?.name || email.split("@")[0],
        picture:
          data.user?.picture ||
          "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      };
      localStorage.setItem("user", JSON.stringify(user));

      toast.success(
        `Login successful! Welcome ${data.user?.username || "user"} 👋`,
        { duration: 5000 }
      );

      // ⏳ Wait 5 seconds before redirect
      setTimeout(() => router.push("/dashboard"), 5000);
    } catch (err) {
      console.error("❌ Login error:", err);
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

        {/* Right Form */}
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

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-normal text-gray-600"
              >
                Remember me
              </label>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

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

          {/* Google Sign-In */}
          <Button
            variant="outline"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center space-x-2 border-gray-200"
          >
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              width={18}
              height={18}
            />
            <span className="text-sm md:text-base text-gray-700 cursor-pointer">
              Sign in with Google
            </span>
          </Button>

          {message && (
            <p className="text-center text-xs text-gray-500 mt-2">{message}</p>
          )}

          <p className="text-center text-xs sm:text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-[#0b1222] font-medium hover:underline"
            >
              Register
            </Link>
          </p>

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
