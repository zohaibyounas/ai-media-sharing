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

export default function Footer() {
  return (
    <footer className="bg-[#081225] text-gray-300 pt-16 pb-8 rounded-bl-3xl rounded-br-3xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:max-w-[87%]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 - Logo & badges */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Logo here</h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Photomo is dedicated to protecting user data with the highest
              standards of privacy and security compliance.
            </p>

            <div className="flex items-center gap-3 mt-2">
              {/* Put actual badge images inside /public and update names if different */}
              <div className="w-12 h-12 bg-white/5 rounded-md flex items-center justify-center">
                <Image
                  src="/footer2.png"
                  alt="GDPR badge"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white/5 rounded-md flex items-center justify-center">
                <Image
                  src="/footer1.png"
                  alt="ISO badge"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-4">
              © Photomo - All rights reserved.
            </p>
          </div>

          {/* Column 2 - Pages */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Pages
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  AI Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Photo Selection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Beam
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Spotlight
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Creator Pass
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  How it works?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Examples
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - General */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              General
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Connect with us
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
                <span>hello@Photomol.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gray-300" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gray-300" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-gray-300" />
                <span>
                  5th Floor, Ideas to Impacts, Town Hall market, 007, New York
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom divider & small copyright line */}
        <div className="border-t border-white/6 mt-10 pt-6 text-sm text-gray-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Photomo - All rights reserved.</div>
          <div className="hidden md:block text-gray-400">
            Designed & built with care
          </div>
        </div>
      </div>
    </footer>
  );
}
