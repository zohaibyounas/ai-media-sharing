"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  CalendarPlus,
  CalendarDays,
  BarChart3,
  Settings,
  LogOut,
  Users,
  ChevronDown,
  ChevronRight,
  Globe,
  QrCode,
  Palette,
  User,
  CreditCard,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Home", icon: Home, href: "/dashboard" },
  { name: "Create Event", icon: CalendarPlus, href: "/dashboard/create-event" },
  { name: "My Events", icon: CalendarDays, href: "/dashboard/my-events" },
  { name: "Analytics", icon: BarChart3, href: "/dashboard/analytics" },
  { name: "Team", icon: Users, href: "/dashboard/team" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(true); // expand by default

  // Hide sidebar on certain pages
  if (
    pathname === "/dashboard/walima-ceremony" ||
    pathname === "/dashboard/summer-gala" ||
    pathname === "/dashboard/share-links"
  ) {
    return null;
  }

  // ✅ Logout logic
  const handleLogout = async () => {
    setLoading(true);
    try {
      const token =
        localStorage.getItem("access_token") ||
        localStorage.getItem("authToken");

      if (!token) {
        router.push("/login");
        return;
      }

      await fetch("https://api.fotoshareai.com/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      localStorage.removeItem("access_token");
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");

      router.push("/login");
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="w-60 bg-white border-r border-gray-200 flex flex-col justify-between">
      <div>
        <div className="px-6 py-4 text-lg font-semibold border-b">
          Logo here
        </div>

        <nav className="p-4 space-y-1">
          {/* Main Links */}
          {links.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md ${
                  active
                    ? "bg-[#F2F4F7] text-gray-900 font-medium"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <Icon size={16} />
                {item.name}
              </Link>
            );
          })}

          {/* Settings Section */}
          <div>
            <button
              onClick={() => setSettingsOpen(!settingsOpen)}
              className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-md"
            >
              <div className="flex items-center gap-3">
                <Settings size={16} />
                <span>Settings</span>
              </div>
              {settingsOpen ? (
                <ChevronDown size={14} className="text-gray-500" />
              ) : (
                <ChevronRight size={14} className="text-gray-500" />
              )}
            </button>

            {/* Sub-links */}
            {settingsOpen && (
              <div className="ml-8 mt-1 space-y-1">
                <Link
                  href="/dashboard/settings/domains"
                  className={`flex items-center gap-2 text-sm px-2 py-1.5 rounded-md ${
                    pathname === "/dashboard/settings/domains"
                      ? "text-gray-900 bg-[#F2F4F7] font-medium"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <Globe size={14} /> Domains
                </Link>
                <Link
                  href="/dashboard/settings/qr-code"
                  className={`flex items-center gap-2 text-sm px-2 py-1.5 rounded-md ${
                    pathname === "/dashboard/settings/qr-code"
                      ? "text-gray-900 bg-[#F2F4F7] font-medium"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <QrCode size={14} /> My QR Code
                </Link>
                <Link
                  href="/dashboard/settings/branding"
                  className={`flex items-center gap-2 text-sm px-2 py-1.5 rounded-md ${
                    pathname === "/dashboard/settings/branding"
                      ? "text-gray-900 bg-[#F2F4F7] font-medium"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <Palette size={14} /> Branding
                </Link>
                <Link
                  href="/dashboard/settings/profile"
                  className={`flex items-center gap-2 text-sm px-2 py-1.5 rounded-md ${
                    pathname === "/dashboard/settings/profile"
                      ? "text-gray-900 bg-[#F2F4F7] font-medium"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <User size={14} /> Profile
                </Link>
                <Link
                  href="/dashboard/settings/plan"
                  className={`flex items-center gap-2 text-sm px-2 py-1.5 rounded-md ${
                    pathname === "/dashboard/settings/plan"
                      ? "text-gray-900 bg-[#F2F4F7] font-medium"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <CreditCard size={14} /> My Plan
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          disabled={loading}
          className="flex items-center gap-2 text-red-600 text-sm hover:text-red-700 cursor-pointer"
        >
          <LogOut size={16} />
          {loading ? "Logging out..." : "Log out"}
        </button>
      </div>
    </aside>
  );
}
