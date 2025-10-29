"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [message, setMessage] = useState("");

  // ✅ Google Sign-In setup
  useEffect(() => {
    const loadGoogle = () => {
      if (!window.google || window.googleInitialized) return;
      window.googleInitialized = true;

      google.accounts.id.initialize({
        client_id:
          "656438575097-1o2lffjt39mbqhjg5fqmnon3iun7aj37.apps.googleusercontent.com",
        callback: async (googleResponse) => {
          try {
            const idToken = googleResponse.credential;
            console.log("Google ID Token:", idToken);

            const apiRes = await fetch("/api/auth/google", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ idToken }),
            });

            const data = await apiRes.json();
            console.log("Google Auth Response:", data);

            if (!apiRes.ok)
              throw new Error(data.message || "Google Sign-in failed");

            // ✅ Store user in localStorage
            localStorage.setItem("user", JSON.stringify(data.user));

            // Optionally store backend token
            if (data.token) {
              localStorage.setItem("authToken", data.token);
            }

            setMessage(`✅ Welcome ${data.user?.name || "Google user"}!`);

            // Redirect to dashboard
            setTimeout(() => router.push("/dashboard"), 1000);
          } catch (err) {
            console.error("Google Sign-in error:", err);
            setMessage(`❌ ${err.message}`);
          }
        },
      });
    };

    // ✅ Load Google script once
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

    try {
      google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          console.warn("Google Sign-In prompt dismissed:", notification);
          setMessage(
            "⚠️ Google Sign-In was closed or blocked. Please try again."
          );
        }
      });
    } catch (err) {
      console.error("Google Sign-In error:", err);
      setMessage("❌ Google Sign-In failed. Please refresh and try again.");
    }
  };

  // ✅ Normal email login
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

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Invalid email or password");
      }

      const data = await res.json();
      const token = data.access_token || data.token || data.accessToken || null;

      if (token) localStorage.setItem("access_token", token);
      else console.warn("⚠️ No token found in API response:", data);

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
