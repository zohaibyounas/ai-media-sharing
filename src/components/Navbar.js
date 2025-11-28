"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { useI18n } from "../context/I18nContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const router = useRouter();
  const { t, lang, setLang } = useI18n();

  const links = [
    { name: t("nav.how"), href: "#" },
    { name: t("nav.products"), href: "#" },
    { name: t("nav.integrations"), href: "#" },
    { name: t("nav.usecases"), href: "#" },
    { name: t("nav.blogs"), href: "#" },
    { name: t("nav.casestudy"), href: "#" },
    { name: t("nav.examples"), href: "#" },
  ];

  const languages = ["en", "fr", "de"];
  const isRTL = ["ar", "ur"].includes(lang);

  const handleLogin = () => router.push("/login");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#E2E2FF] backdrop-blur-md border-b border-gray-200">
      <div
        className={`max-w-7xl lg:max-w-[95%] mx-auto flex flex-wrap lg:flex-nowrap items-center px-4 md:px-6 py-4 ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        {/* Logo */}
        <div className="font-semibold text-gray-900 text-lg cursor-pointer">
          {t("Logohere") || "Logohere"}
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden lg:flex flex-1 flex-wrap items-center gap-4 md:gap-6 ${
            isRTL ? "justify-start" : "justify-end"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-black transition-colors cursor-pointer whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 hover:text-black transition-colors cursor-pointer"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm">{t("nav.language")}</span>
            </button>

            {langOpen && (
              <div
                className={`absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[120px] ${
                  isRTL ? "right-0 text-right" : "left-0 text-left"
                }`}
              >
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className="w-full px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="bg-gray-900 text-white px-4 md:px-5 py-2 rounded-lg hover:bg-black transition-colors cursor-pointer whitespace-nowrap"
          >
            {t("nav.login")}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="cursor-pointer"
            >
              <Globe className="w-5 h-5" />
            </button>
            {langOpen && (
              <div
                className={`absolute top-10 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[120px] ${
                  isRTL ? "right-0 text-right" : "left-0 text-left"
                }`}
              >
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className="w-full px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div
          className={`lg:hidden bg-white border-t border-gray-200 px-4 md:px-6 py-4 space-y-3 flex flex-col ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-black cursor-pointer whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={handleLogin}
            className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-black transition-colors cursor-pointer whitespace-nowrap"
          >
            {t("nav.login")}
          </button>
        </div>
      )}
    </nav>
  );
}
