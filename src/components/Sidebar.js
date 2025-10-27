"use client";

import { usePathname } from "next/navigation";
import {
  Home,
  CalendarPlus,
  CalendarDays,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";

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

  // Hide sidebar only on /dashboard/events/1
  if (pathname === "/dashboard/events/1") {
    return null;
  }

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
        <button className="flex items-center gap-2 text-red-600 text-sm">
          <LogOut size={16} /> Log out
        </button>
      </div>
    </aside>
  );
}
