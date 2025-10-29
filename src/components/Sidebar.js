"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  CalendarPlus,
  CalendarDays,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Home", icon: Home, href: "/dashboard" },
  { name: "Create Event", icon: CalendarPlus, href: "/dashboard/create-event" },
  { name: "My Events", icon: CalendarDays, href: "/dashboard/my-events" },
  { name: "Analytics", icon: BarChart3, href: "/dashboard/analytics" },
  { name: "Team", icon: Settings, href: "/dashboard/team" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Hide sidebar on specific pages
  if (
    pathname === "/dashboard/walima-ceremony" ||
    pathname === "/dashboard/summer-gala" ||
    pathname === "/dashboard/share-links"
  ) {
    return null;
  }

  // ✅ Logout function
  const handleLogout = async () => {
    setLoading(true);
    try {
      const token =
        localStorage.getItem("access_token") ||
        localStorage.getItem("authToken");

      if (!token) {
        console.warn("⚠️ No token found, redirecting to login.");
        router.push("/login");
        return;
      }

      // Call logout API
      const res = await fetch("https://api.fotoshareai.com/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok && res.status !== 204) {
        console.error("❌ Logout API failed:", await res.text());
      }

      // ✅ Clear tokens
      localStorage.removeItem("access_token");
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");

      // ✅ Redirect to login page
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
