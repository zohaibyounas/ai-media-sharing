"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Normal registration
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://api.fotoshareai.com/auth/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          password,
          acceptTerms: true,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      setMessage("✅ Registration successful! You can now log in.");
      setEmail("");
      setName("");
      setPassword("");
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Google Sign-Up handler
  const handleGoogleSignUp = () => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "656438575097-1o2lffjt39mbqhjg5fqmnon3iun7aj37.apps.googleusercontent.com", // 🔴 Replace with your Google Client ID
      callback: async (response) => {
        try {
          const idToken = response.credential;

          const res = await fetch(
            "https://api.fotoshareai.com/auth/oauth/google/token",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ idToken }),
            }
          );
          console.log(res);
          const data = await res.json();
          console.log(data);
          if (!res.ok) throw new Error(data.message || "Google Sign-up failed");

          console.log("✅ Google user:", data);
          setMessage(`✅ Welcome ${data.user?.username || "Google user"}!`);
        } catch (err) {
          console.error(err);
          setMessage(`❌ ${err.message}`);
        }
      },
    });

    google.accounts.id.prompt(); // opens Google popup
  };

  // ✅ Load Google script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl lg:max-w-[65%] overflow-hidden rounded-3xl bg-white shadow-md">
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

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter password"
                className="h-10 text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <p className="text-xs text-gray-500 mt-1">
              By registering you agree to the Photomo{" "}
              <a
                href="#"
                className="text-[#0b1222] hover:underline font-medium"
              >
                Terms of Use
              </a>
            </p>

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

          {/* Divider */}
          <div className="relative my-6">
            <Separator />
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-gray-500">
              Or
            </span>
          </div>

          {/* ✅ Google Sign-Up (Kept & Functional) */}
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
            <span className="text-sm text-gray-700">Sign up with Google</span>
          </Button>

          <p className="text-center text-xs text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#0b1222] font-medium hover:underline"
            >
              Login
            </Link>
          </p>

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
