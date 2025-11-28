"use client";

import Image from "next/image";
import {
  Youtube,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useI18n } from "../context/I18nContext";

export default function Footer() {
  const { t, lang } = useI18n();
  const isRTL = ["ar", "ur"].includes(lang);

  return (
    <footer className="bg-[#081225] text-gray-300 pt-16 pb-8 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:max-w-[87%]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 - Logo & badges */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              {t("footer.logo")}
            </h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              {t("footer.description")}
            </p>

            <div className="flex items-center gap-3 mt-2">
              {/* Put actual badge images inside /public and update names if different */}
              <div className="w-12 h-12 bg-white/5 rounded-md flex items-center justify-center">
                <Image
                  src="/footer2.png"
                  alt={t("footer.badges.gdpr")}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white/5 rounded-md flex items-center justify-center">
                <Image
                  src="/footer1.png"
                  alt={t("footer.badges.iso")}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-4">
              {t("footer.copyright")}
            </p>
          </div>

          {/* Column 2 - Pages */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              {t("footer.pages.title")}
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  {t("footer.pages.home")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  {t("footer.pages.aiGallery")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  {t("footer.pages.photoSelection")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  {t("footer.pages.beam")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  {t("footer.pages.spotlight")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  {t("footer.pages.creatorPass")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  {t("footer.pages.howItWorks")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  {t("footer.pages.examples")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  {t("footer.pages.blogs")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - General */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              {t("footer.general.title")}
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  {t("footer.general.privacyPolicy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  {t("footer.general.refundPolicy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  {t("footer.general.terms")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  {t("footer.general.faqs")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              {t("footer.connect.title")}
            </h3>

            <div className="flex items-center gap-3 mb-4">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-indigo-600 transition-colors"
              >
                <Youtube size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-indigo-600 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-indigo-600 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-indigo-600 transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>

            <div className="text-sm text-gray-400 space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gray-300" />
                <span>{t("footer.connect.email")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gray-300" />
                <span>{t("footer.connect.phone1")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gray-300" />
                <span>{t("footer.connect.phone2")}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-gray-300" />
                <span>{t("footer.connect.address")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom divider & small copyright line */}
        <div className="border-t border-white/6 mt-10 pt-6 text-sm text-gray-500 flex items-center justify-between">
          <div>
            {t("footer.bottomCopyright", { year: new Date().getFullYear() })}
          </div>
          <div className="hidden md:block text-gray-400">
            {t("footer.designedBy")}
          </div>
        </div>
      </div>
    </footer>
  );
}
