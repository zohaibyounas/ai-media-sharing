"use client";

import { Bell, Settings, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Topbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  const used = 25;
  const total = 100;
  const progress = (used / total) * 100;

  // ✅ Load user data from localStorage when component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setTimeout(() => {
        setUser(JSON.parse(storedUser));
      }, 0);
    }
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-2 bg-white border-b shadow-sm sticky top-0 z-50">
      {/* LEFT SIDE (optional space) */}
      <div></div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-5">
        {/* Gallery Info */}
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-[#F4F4F5] flex items-center justify-center">
              <Image
                src="/gallery-icon.png"
                alt="gallery icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <div className="text-sm text-gray-600 whitespace-nowrap">
              <span className="font-medium text-gray-900">{used} images</span>{" "}
              of {total} images used
            </div>
          </div>

          <div className="w-44 h-1 bg-gray-200 rounded-full mt-1 overflow-hidden">
            <div
              className="h-full bg-[#101828] transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
          title="Toggle theme"
        >
          {darkMode ? (
            <Moon size={18} className="text-gray-700" />
          ) : (
            <Sun size={18} className="text-gray-700" />
          )}
        </button>

        {/* Notifications */}
        <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
          <Bell size={18} className="text-gray-700" />
        </button>

        {/* Settings */}
        <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
          <Settings size={18} className="text-gray-700" />
        </button>

        {/* User Avatar + Name */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 relative overflow-hidden rounded-full border border-gray-200">
            <Image
              src={user?.picture || "/topbar.jpg"}
              alt="avatar"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <span className="text-sm font-medium">{user?.name || "Guest"}</span>
        </div>
      </div>
    </header>
  );
}
