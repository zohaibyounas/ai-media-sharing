"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ to redirect after register
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react"; // 👈 Added for show/hide password

export default function RegisterPage() {
  const router = useRouter(); // ✅ useRouter hook

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 state for toggle

  // ✅ Normal registration
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const body = {
        email,
        name,
        password,
        acceptTerms: true,
      };
      console.log("🟡 Sending Register Request Body:", body);

      const res = await fetch("https://api.fotoshareai.com/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(res);
      console.log("🟠 Register Response Status:", res.status);

      const data = await res.json().catch(() => ({}));
      console.log("🟢 Register API Response:", data);

      if (!res.ok) throw new Error(data.message || "Registration failed");

      toast.success(
        `Registration successful! Welcome ${data.user?.username || "user"} 👋`
      );
      setEmail("");
      setName("");
      setPassword("");

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err) {
      console.error("🔴 Register Error:", err);
      setMessage(`❌ ${err.message || "Network error. Please try again."}`);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Load Google script (only once)
  useEffect(() => {
    const loadGoogle = () => {
      if (!window.google || window.googleInitialized) return;
      window.googleInitialized = true;

      google.accounts.id.initialize({
        client_id:
          "1024635425185-pupqinl9kj4nq1hv5eq7mu5jbj4nkuvs.apps.googleusercontent.com",
        callback: async (googleResponse) => {
          try {
            const idToken = googleResponse.credential;
            console.log("🟡 Google ID Token:", idToken);

            const apiUrl =
              "https://api.fotoshareai.com/auth/oauth/google/token";
            console.log("🟣 Sending to:", apiUrl);

            const apiRes = await fetch(apiUrl, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ idToken }),
            });

            console.log("🟠 Google Auth API Response Status:", apiRes.status);
            const data = await apiRes.json();
            console.log("🟢 Full Google Auth Response:", data);

            if (!apiRes.ok)
              throw new Error(data.message || "Google Sign-up failed");

            const accessToken = data.accessToken;
            console.log("🔵 Extracted Access Token:", accessToken);

            if (accessToken) {
              localStorage.setItem("access_token", accessToken);
              console.log(
                "💾 Saved access_token to localStorage:",
                accessToken
              );
            }

            if (data.user) {
              localStorage.setItem("user", JSON.stringify(data.user));
              console.log("💾 Saved user data to localStorage:", data.user);
            }

            toast.success(
              `Registration successful! Welcome ${
                data.user?.username || "user"
              } 👋`
            );
            setTimeout(() => router.push("/dashboard"), 1000);
          } catch (err) {
            console.error("🔴 Google Sign-up Error:", err);
            setMessage(`❌ ${err.message}`);
          }
        },
      });
    };

    // Load only once
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
  }, []);

  // ✅ Handle Google button
  const handleGoogleSignUp = () => {
    if (!window.google || !window.googleInitialized) {
      setMessage("⚠️ Google Sign-In not ready yet. Please try again shortly.");
      return;
    }

    try {
      google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          console.warn(
            "Google Sign-In prompt dismissed:",
            notification.getMomentType()
          );
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

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl lg:max-w-[65%] overflow-hidden rounded-3xl bg-white shadow-md">
        {/* Left Image */}
        <div className="w-full lg:w-[45%] flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 p-8">
          <Image
            src="/login.png"
            alt="Register illustration"
            width={400}
            height={400}
            className="object-contain max-w-full h-auto"
            priority
          />
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 sm:px-10 py-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1 text-center lg:text-left">
            Register Account
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-center lg:text-left">
            Get your free account now
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter email"
                className="h-10 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Username
              </label>
              <Input
                type="text"
                placeholder="Enter username"
                className="h-10 text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="h-10 text-sm pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 cursor-pointer" />
                ) : (
                  <Eye className="w-4 h-4 cursor-pointer" />
                )}
              </button>
            </div>

            {message && (
              <p
                className={`text-sm ${
                  message.includes("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}

            <Button
              type="submit"
              className="w-full bg-[#0b1222] hover:bg-[#1a243d] text-white mt-2"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </form>

          <div className="relative my-6">
            <Separator />
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-gray-500">
              Or
            </span>
          </div>

          <Button
            variant="outline"
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center space-x-2 border-gray-200"
          >
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              width={18}
              height={18}
            />
            <span className="text-sm text-gray-700 cursor-pointer">
              Sign up with Google
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
