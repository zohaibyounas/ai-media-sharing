"use client";

import { Button } from "@/components/ui/button";
import { Check, Circle } from "lucide-react";

export default function PerfectPlan() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center lg:max-w-[87%]">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900">
          Choose Perfect Plan for You
        </h2>
        <p className="text-gray-500 mt-2">
          From upload to delivery, Photomo makes photo management effortless and
          secure in just a few simple steps.
        </p>

        {/* Toggle */}
        <div className="mt-6 inline-flex bg-gray-100 p-1 rounded-full">
          <button className="px-5 py-2 rounded-full bg-white shadow text-gray-800 font-medium">
            Month Plan
          </button>
          <button className="px-5 py-2 rounded-full text-gray-600 font-medium">
            Annual Plan
          </button>
        </div>

        {/* Pricing Table */}
        <div className="mt-12 bg-white rounded-3xl shadow-sm border overflow-hidden">
          <div className="flex text-center text-gray-800">
            {/* ✅ Features Column */}
            <div className="py-8 w-1/8 border-r">
              <h4 className="font-semibold text-gray-900 pt-[3.27rem]">
                FEATURES
              </h4>
              <p className="text-xl font-bold mt-2 opacity-0">FREE</p>
              <p className="text-gray-500 text-sm opacity-0">for Lifetime</p>
              <div className="mt-8 space-y-[38px] text-gray-700 text-sm">
                <p className="border-t pt-3">Storage</p>
                <p className="border-t pt-3">Branding</p>
                <p className="border-t pt-3">Uncompressed Images</p>
                <p className="border-t pt-3">Memories</p>
                <p className="border-t pt-3">Whatsapp Credits</p>
                <p className="border-t pt-3">Domain</p>
              </div>
            </div>

            {/* ✅ Rider */}
            <div className="py-8 w-1/6 border-r">
              <h4 className="font-semibold text-gray-900">RIDER</h4>
              <p className="text-xl font-bold mt-2">FREE</p>
              <p className="text-gray-500 text-sm">for Lifetime</p>
              <Button variant="outline" className="mt-4 rounded-full px-6">
                Start Now
              </Button>
              <div className="mt-8 space-y-[38px] text-gray-700 text-sm">
                <p className="border-t pt-3">50GB</p>
                <p className="border-t pt-3">None</p>
                <p className="border-t pt-3 flex justify-center">
                  <Circle className="w-5 h-5 text-yellow-400" />
                </p>
                <p className="border-t pt-3">None</p>
                <p className="border-t pt-3">5</p>
                <p className="border-t pt-3">Foto Owl Domain</p>
              </div>
            </div>

            {/* ✅ Skater Small */}
            <div className="py-8 w-1/6 border-r">
              <h4 className="font-semibold text-gray-900">SKATER SMALL</h4>
              <p className="text-xl font-bold mt-2">$16 Per Month</p>
              <p className="text-gray-500 text-sm">Billed: Every Year</p>
              <Button className="mt-4 rounded-full px-6 bg-gray-900 text-white">
                Select
              </Button>
              <div className="mt-8 space-y-[38px] text-gray-700 text-sm">
                <p className="border-t pt-3">50GB</p>
                <p className="border-t pt-3">Limited</p>
                <p className="border-t pt-3 flex justify-center">
                  <Check className="w-5 h-5 text-green-500" />
                </p>
                <p className="border-t pt-3">None</p>
                <p className="border-t pt-3">50</p>
                <p className="border-t pt-3">fotoowl</p>
              </div>
            </div>

            {/* ✅ Skater */}
            <div className="py-8 w-1/6 border-r">
              <h4 className="font-semibold text-gray-900">SKATER</h4>
              <p className="text-xl font-bold mt-2">$16 Per Month</p>
              <p className="text-gray-500 text-sm">Billed: Every Year</p>
              <Button className="mt-4 rounded-full px-6 bg-gray-900 text-white">
                Select
              </Button>
              <div className="mt-8 space-y-[38px] text-gray-700 text-sm">
                <p className="border-t pt-3">100GB</p>
                <p className="border-t pt-3">Limited</p>
                <p className="border-t pt-3 flex justify-center">
                  <Check className="w-5 h-5 text-green-500" />
                </p>
                <p className="border-t pt-3">None</p>
                <p className="border-t pt-3">100</p>
                <p className="border-t pt-3">fotoowl</p>
              </div>
            </div>

            {/* ✅ Biker (Highlighted) */}
            <div className="py-8 w-1/6 border-r bg-[#26395F] text-white relative rounded-3xl">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-[#0d1b2a] w-32 text-xs font-semibold px-2 py-2 rounded-full shadow">
                Best Value Plan
              </div>
              <div className="mt-8">
                <h4 className="font-semibold">BIKER</h4>
                <p className="text-xl font-bold mt-2">$24 Per Month</p>
                <p className="text-gray-300 text-sm">Billed: Every Year</p>
                <Button className="mt-4 rounded-full px-6 bg-white text-[#0d1b2a] hover:bg-gray-100">
                  Select
                </Button>
              </div>
              <div className="mt-8 space-y-[38px] text-gray-200 text-sm">
                <p className="border-t border-gray-700 pt-3">500GB</p>
                <p className="border-t border-gray-700 pt-3">Limited</p>
                <p className="border-t border-gray-700 pt-3 flex justify-center">
                  <Check className="w-5 h-5 text-green-400" />
                </p>
                <p className="border-t border-gray-700 pt-3">
                  10 Memories: Save 200GB
                </p>
                <p className="border-t border-gray-700 pt-3">500</p>
                <p className="border-t border-gray-700 pt-3">
                  Custom Subdomain
                </p>
              </div>
            </div>

            {/* ✅ Pilot */}
            <div className="py-8 w-1/6 border-r">
              <h4 className="font-semibold text-gray-900">PILOT</h4>
              <p className="text-xl font-bold mt-2">$31 Per Month</p>
              <p className="text-gray-500 text-sm">Billed: Every Year</p>
              <Button className="mt-4 rounded-full px-6 bg-gray-900 text-white">
                Select
              </Button>
              <div className="mt-8 space-y-[38px] text-gray-700 text-sm">
                <p className="border-t pt-3">1000GB</p>
                <p className="border-t pt-3">Limited</p>
                <p className="border-t pt-3 flex justify-center">
                  <Check className="w-5 h-5 text-green-500" />
                </p>
                <p className="border-t pt-3">15 Memories: Save 300GB</p>
                <p className="border-t pt-3">1000</p>
                <p className="border-t pt-3">Customisable</p>
              </div>
            </div>

            {/* ✅ Astronaut */}
            <div className="py-8 w-1/6">
              <h4 className="font-semibold text-gray-900">ASTRONAUT</h4>
              <p className="text-xl font-bold mt-2">Contact Us</p>
              <p className="text-gray-500 text-sm">Billed: Every Year</p>
              <Button variant="outline" className="mt-4 rounded-full px-6">
                Contact Us
              </Button>
              <div className="mt-8 space-y-[38px] text-gray-700 text-sm">
                <p className="border-t pt-3">Customisable</p>
                <p className="border-t pt-3">Limited</p>
                <p className="border-t pt-3 flex justify-center">
                  <Check className="w-5 h-5 text-green-500" />
                </p>
                <p className="border-t pt-3">Customisable</p>
                <p className="border-t pt-3">Customisable</p>
                <p className="border-t pt-3">Customisable</p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Photomo Enterprise Plan Section */}
        <div className="mt-16 bg-gradient-to-b from-[#26395F] to-[#101828] rounded-3xl text-white p-10 text-left relative">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            {/* Left Section */}
            <div>
              <h3 className="text-2xl font-semibold">
                Photomo Enterprise Plan
              </h3>
              <p className="text-sm text-gray-300 mt-2 max-w-xl">
                With the Photomo Enterprise Plan, get event-specific
                customization and dedicated support anytime you need it.
              </p>
            </div>

            {/* Button */}
            <button className="mt-6 lg:mt-0 border border-white text-white rounded-full px-6 py-2 flex items-center gap-2 transition hover:bg-white/10">
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 rotate-[-50deg] bg-gray-500 rounded-2xl"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 mt-10">
            {[
              [
                "Full White Label Solution",
                "Custom WhatsApp and Email Notification",
              ],
              ["Marquee Frames", "10× Sponsor visibility by Custom Frames"],
              ["Unlimited Photos", "Don't think about the storage"],
              [
                "Photomo Canvas",
                "Create custom landing page for all the events",
              ],
              ["In Gallery Video", "Video placement with dedicated CTA Button"],
              [
                "Hashtrack",
                "10× Organic digital presence by promoting hashtags",
              ],
            ].map(([title, desc], idx) => (
              <div key={idx}>
                <p className="flex items-center gap-3 font-semibold">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#26395F"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {title}
                </p>
                <p className="text-sm text-gray-300 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
