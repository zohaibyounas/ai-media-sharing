"use client";

import {
  Bell,
  Settings,
  Sun,
  Moon,
  Menu,
  Home,
  CalendarPlus,
  CalendarDays,
  BarChart3,
  Users,
  CreditCard,
  Globe,
  QrCode,
  Palette,
  User as UserIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Topbar() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const used = 25;
  const total = 100;
  const progress = (used / total) * 100;

  const pathname = usePathname();

  const languages = [
    "English",
    "French",
    "German",
    "Spanish",
    "Arabic",
    "Chinese",
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setTimeout(() => setUser(JSON.parse(storedUser)), 0);
    }
  }, []);

  const mainLinks = [
    { name: "Home", icon: Home, href: "/dashboard" },
    {
      name: "Create Event",
      icon: CalendarPlus,
      href: "/dashboard/create-event",
    },
    { name: "My Events", icon: CalendarDays, href: "/dashboard/my-events" },
    { name: "Analytics", icon: BarChart3, href: "/dashboard/analytics" },
    { name: "Team", icon: Users, href: "/dashboard/team" },
  ];

  const settingsLinks = [
    { name: "Domains", icon: Globe, href: "/dashboard/settings/domains" },
    { name: "My QR Code", icon: QrCode, href: "/dashboard/settings/qr-code" },
    { name: "Branding", icon: Palette, href: "/dashboard/settings/branding" },
    { name: "Profile", icon: UserIcon, href: "/dashboard/settings/profile" },
    { name: "My Plan", icon: CreditCard, href: "/dashboard/settings/plan" },
  ];

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-white border-b shadow-sm sticky top-0 z-50">
      {/* LEFT SIDE: Hamburger for small screens */}
      <div className="flex items-center gap-2">
        <button
          className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={20} className="text-gray-700" />
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Usage Info */}
        <div className="hidden md:flex flex-col items-end w-36">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-[#F4F4F5] flex items-center justify-center">
              <Image
                src="/gallery-icon.png"
                alt="gallery icon"
                width={18}
                height={18}
                className="object-contain"
              />
            </div>
            <div className="text-xs sm:text-sm text-gray-600 truncate">
              <span className="font-medium text-gray-900">{used}</span> of{" "}
              {total} images
            </div>
          </div>
          <div className="w-full h-1 bg-gray-200 rounded-full mt-1 overflow-hidden">
            <div
              className="h-full bg-[#101828] transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition cursor-pointer"
          title="Toggle theme"
        >
          {darkMode ? (
            <Moon size={16} className="text-gray-700" />
          ) : (
            <Sun size={16} className="text-gray-700" />
          )}
        </button>

        {/* Notifications */}
        <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
          <Bell size={16} className="text-gray-700" />
        </button>

        {/* Language Icon */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition cursor-pointer"
          >
            <Globe size={16} className="text-gray-700" />
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLangOpen(false)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Settings */}
        <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
          <Settings size={16} className="text-gray-700" />
        </button>

        {/* User Avatar */}
        {user ? (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 relative overflow-hidden rounded-full border border-gray-200">
              <img
                src={user.picture}
                alt="User avatar"
                className="object-cover rounded-full"
              />
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-800 truncate max-w-[100px] sm:max-w-[120px]">
              {user.name || user.username}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-200"></div>
            <span className="text-xs sm:text-sm text-gray-500">Guest</span>
          </div>
        )}
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md p-4 flex flex-col gap-3 sm:hidden z-50">
          {/* Usage */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Usage</span>
            <span className="text-xs font-medium">
              {used}/{total}
            </span>
          </div>
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#101828]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Main Links */}
          <div className="flex flex-col gap-1 mt-2">
            {mainLinks.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 text-sm px-2 py-1 rounded hover:bg-gray-100 ${
                    active ? "bg-gray-100 font-medium" : "text-gray-700"
                  } cursor-pointer`}
                >
                  <Icon size={16} />
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Settings Links */}
          <div className="flex flex-col gap-1 mt-2 border-t border-gray-200 pt-2">
            {settingsLinks.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 text-sm px-2 py-1 rounded hover:bg-gray-100 ${
                    active ? "bg-gray-100 font-medium" : "text-gray-700"
                  } cursor-pointer`}
                >
                  <Icon size={16} />
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Language Dropdown in mobile */}
          <div className="relative mt-2">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-2 py-1 bg-gray-100 rounded cursor-pointer"
            >
              <Globe size={16} />
              Language
            </button>
            {langOpen && (
              <div className="absolute mt-1 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLangOpen(false)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
