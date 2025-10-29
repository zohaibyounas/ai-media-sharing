"use client";

import { Bell, Settings, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Topbar() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const used = 25;
  const total = 100;
  const progress = (used / total) * 100;

  // ✅ Load user info (works for both Google + normal login)
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
      {/* LEFT SIDE (You can place logo or title here later if needed) */}
      <div></div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-5">
        {/* Usage Info */}
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

        {/* Theme toggle */}
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

        {/* ✅ Dynamic User Avatar and Name */}
        {user ? (
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 relative overflow-hidden rounded-full border border-gray-200">
              <img
                src={user.picture || "/topbar.jpg"}
                alt="User avatar"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <span className="text-sm font-medium text-gray-800 truncate max-w-[120px]">
              {user.name || user.email}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gray-200"></div>
            <span className="text-sm text-gray-500">Guest</span>
          </div>
        )}
      </div>
    </header>
  );
}
