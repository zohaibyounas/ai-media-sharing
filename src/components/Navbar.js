"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "How it works", href: "#" },
    { name: "Products", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Use Cases", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Case Study", href: "#" },
    { name: "Examples", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#E2E2FF]  backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl lg:max-w-[87%] mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="font-semibold text-gray-900 text-lg">Logohere</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 text-gray-700 font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden lg:block">
          <button className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-black transition-colors">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-black"
            >
              {link.name}
            </a>
          ))}
          <button className="mt-3 w-full bg-gray-900 text-white py-2 rounded-lg">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
