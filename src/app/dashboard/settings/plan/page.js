// src/app/dashboard/plan/page.js
"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PlanPage() {
  const [duration, setDuration] = useState("annual");
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const plans = [
    {
      id: "basic",
      title: "Basic",
      logo: "plan1.png",
      price: { monthly: "$1.38", halfyear: "$9.00", annual: "$16.58" },
      storage: "100GB",
      gallery: [
        "Face Searches: Unlimited",
        "Registrations: Unlimited",
        "Photomo Domain",
        "1 Branding",
        "Limited Photomo branding",
      ],
      notifications: [
        "Email Unlimited (From Photomo Domain)",
        "WhatsApp AddOn (From Photo Number)",
        "WhatsApp Credits: 100 Included",
      ],
      description: "Ideal Photographers with small team just establishing.",
    },
    {
      id: "silver",
      title: "Silver",
      logo: "plan2.png",
      popular: true,
      price: { monthly: "$2.07", halfyear: "$18.00", annual: "$24.91" },
      storage: "500GB",
      gallery: [
        "Face Searches: Unlimited",
        "10 Memories: Save 200GB",
        "Registrations: Unlimited",
        "Custom Sub-Domain",
        "1 Branding",
        "Limited Photomo branding",
      ],
      notifications: [
        "Email Unlimited (From Photomo Domain)",
        "WhatsApp AddOn (From Photo Number)",
        "WhatsApp Credits: 500 Included",
      ],
      description:
        "Ideal for Photographers with medium team focusing on growing business.",
    },
    {
      id: "gold",
      title: "Gold",
      logo: "plan3.png",
      price: { monthly: "$3.45", halfyear: "$25.00", annual: "$31.58" },
      storage: "1TB",
      gallery: [
        "Face Searches: Unlimited",
        "15 Memories: Save 300GB",
        "Registrations: Unlimited",
        "Your Own Domain",
        "Limited Photomo branding",
      ],
      notifications: [
        "Email Unlimited (From Photomo Domain)",
        "WhatsApp AddOn (From Photo Number)",
        "WhatsApp Credits: 100 Included",
      ],
      description:
        "Ideal for Photographers with big team who want to focus on quality and brand.",
    },
  ];

  const handleSelect = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-12">
      {/* ─── YOUR PLAN CARD (FIXED TO MATCH IMAGE) ───────────────────────────── */}
      <section>
        <h2 className="text-xl font-semibold">Your Plan</h2>
        <p className="text-sm text-gray-500 -mt-1 mb-4">
          Manage your subscription
        </p>

        <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
          {/* Active Plan Badge EXACT Like Screenshot */}
          <div className="flex items-center">
            <span className="text-sm text-gray-600">Your Active Plan is</span>

            <div className="flex items-center gap-2 text-red-700 px-4 py-1.5 rounded-full">
              <span className="w-7 h-7 bg-[#FF4726] text-white rounded-md flex items-center justify-center text-lg">
                ∞
              </span>
              <span className="text-sm font-medium">Rider</span>
            </div>
          </div>

          {/* Usage Block EXACT Like Screenshot */}
          <div className="space-y-4">
            {/* Image Usage */}
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Images</span>
                <span>1000 / 1000</span>
              </div>

              <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>

            {/* WhatsApp Messages */}
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Whatsapp Messages</span>
                <span>100 / 200</span>
              </div>

              <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PLAN TOGGLE ───────────────────────────── */}
      <div className="p-8 max-w-6xl mx-auto space-y-12">
        {/* ─── PLAN CARDS ───────────────────────────── */}
        <section className="">
          <h3 className="text-center text-2xl font-semibold mb-6">
            Upgrade Your Plan
          </h3>

          <div className="flex justify-center mb-10">
            <div className="bg-gray-100 p-1 rounded-full flex shadow-sm">
              {["monthly", "halfyear", "annual"].map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`px-4 py-2 text-sm rounded-full transition font-medium ${
                    duration === d
                      ? d === "annual"
                        ? "bg-slate-900 text-white shadow"
                        : "bg-white shadow text-black"
                      : "text-gray-600"
                  }`}
                >
                  {d === "monthly"
                    ? "Month Plan"
                    : d === "halfyear"
                    ? "Half Year Plan"
                    : "Annual Plan"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div
                key={p.id}
                className="group rounded-3xl p-8 border shadow-lg bg-white text-black hover:bg-[#101828] transition-all duration-300 flex flex-col justify-between"
              >
                {/* ICON + TITLE */}
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-transparent transition-all group-hover:bg-[#FF4726] pointer-events-none"></div>

                    <div
                      className={`relative flex items-center justify-center ${
                        p.id === "silver" ? "w-16 h-16" : "w-14 h-14"
                      }`}
                    >
                      <img
                        src={`/${p.logo}`}
                        className={`${
                          p.id === "silver" ? "w-48 h-48 mt-12" : "w-10 h-10"
                        } object-contain`}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-xl font-semibold transition group-hover:text-white">
                      {p.title}
                    </p>
                    <p className="text-xs text-gray-500 transition group-hover:text-gray-300">
                      Billed Every Year
                    </p>
                    <p className="text-xs text-gray-400 mt-1 transition group-hover:text-gray-300">
                      {p.description}
                    </p>
                  </div>
                </div>

                {/* PRICE */}
                <div className="mt-8 text-right">
                  <p className="text-4xl font-bold transition group-hover:text-white">
                    {p.price[duration]}
                  </p>
                  <p className="text-xs text-gray-500 transition group-hover:text-gray-300">
                    / per month
                  </p>
                </div>

                {/* STORAGE */}
                <div className="mt-8">
                  <p className="text-sm font-medium transition group-hover:text-white">
                    Storage
                  </p>
                  <p className="text-sm text-gray-600 transition group-hover:text-gray-300">
                    {p.storage}
                  </p>
                </div>

                {/* GALLERY */}
                <div className="mt-6">
                  <p className="text-sm font-medium mb-2 transition group-hover:text-white">
                    Gallery
                  </p>

                  <ul className="space-y-2">
                    {p.gallery.map((g, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-gray-600 transition group-hover:text-gray-300"
                      >
                        <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 transition group-hover:bg-white group-hover:text-black">
                          +
                        </span>
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* NOTIFICATIONS */}
                <div className="mt-6">
                  <p className="text-sm font-medium mb-2 transition group-hover:text-white">
                    Notifications
                  </p>

                  <ul className="space-y-2">
                    {p.notifications.map((n, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <span className="w-5 h-5 rounded-full bg-[#101828] flex items-center justify-center transition group-hover:bg-white">
                          <Check className="w-3 h-3 text-white group-hover:text-black" />
                        </span>
                        <span className="text-gray-600 transition group-hover:text-gray-300">
                          {n}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SELECT BUTTON */}
                <button
                  className="w-full mt-8 py-4 rounded-2xl bg-black text-white font-semibold text-sm transition-all group-hover:bg-white group-hover:text-black shadow-md"
                  onClick={() => {
                    setSelectedPlan(p);
                    setShowModal(true);
                  }}
                >
                  Select
                </button>

                <div className="mt-5 flex justify-center">
                  <div className="w-40 h-5 bg-black/10 blur-md rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PAYMENT MODAL ───────────────────────────── */}
        {showModal && selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl p-8 relative">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>

              <h2 className="text-xl font-semibold mb-6">Checkout</h2>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Plan Summary */}
                <div className="flex-1 border rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={`/${selectedPlan.logo}`}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <p className="font-semibold text-lg">
                        {selectedPlan.title}
                      </p>
                      <p className="text-sm text-gray-500">Billed Every Year</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-gray-600 text-sm">
                      <span>{selectedPlan.title}</span>
                      <span>{selectedPlan.price[duration]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <span></span> Storage: {selectedPlan.storage}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <span></span> WhatsApp:{" "}
                      {
                        selectedPlan.notifications
                          .find((n) => n.includes("Credits"))
                          ?.split(":")[1]
                      }
                    </div>
                  </div>

                  <div className="border-t pt-2 flex justify-between font-semibold text-gray-800">
                    <span>Total Amount</span>
                    <span>{selectedPlan.price[duration]}</span>
                  </div>
                </div>

                {/* Offers & Payment */}
                <div className="flex-1 space-y-4">
                  <div className="rounded-lg border p-4 flex gap-3 items-center">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="flex-1 bg-gray-100 rounded px-3 py-2 text-sm outline-none"
                    />
                    <button className="px-4 py-2 bg-slate-800 text-white rounded text-sm">
                      Apply
                    </button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <p className="mb-2">Do you have any Referral Code?</p>
                    <div className="flex gap-3 items-center">
                      <input
                        type="text"
                        placeholder="Referral Code"
                        className="flex-1 bg-gray-100 rounded px-3 py-2 text-sm outline-none"
                      />
                      <button className="px-4 py-2 bg-slate-800 text-white rounded text-sm">
                        Apply
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Enter a referral code for additional benefits
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Payment Options</p>
                    <div className="rounded-lg border p-3 bg-gray-50">
                      <select className="w-full bg-transparent outline-none text-sm">
                        <option>Stripe</option>
                      </select>
                    </div>
                  </div>

                  <button className="mt-4 w-full bg-gray-900 text-white py-3 rounded flex justify-center items-center gap-2">
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ─── ENTERPRISE SECTION ───────────────────────────── */}
      <section className="bg-[#26395F] text-white rounded-3xl p-12 mt-20 shadow-xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div>
            <h3 className="text-xl font-semibold">Photomo Enterprise Plan</h3>
            <p className="text-gray-300 text-sm max-w-xl mt-2">
              With the Photomo Enterprise Plan, get event-specific customization
              and dedicated support anytime you need it.
            </p>
          </div>

          <button className="mt-6 lg:mt-0 border border-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-white/10 transition">
            Contact Us
            <span className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center rotate-[-45deg]">
              →
            </span>
          </button>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 mt-12">
          {[
            [
              "Full White Label Solution",
              "Custom WhatsApp and Email Notification",
            ],
            ["Marquee Frames", "10× Sponsor visibility by Custom Frames"],
            ["Unlimited Photos", "Don’t think about the storage"],
            ["Photomo Canvas", "Create custom landing page for all the events"],
            ["In Gallery Video", "Video placement with CTA Button"],
            ["Hashtrack", "10× Organic presence using hashtags"],
          ].map(([title, desc], i) => (
            <div key={i}>
              <p className="flex items-center gap-3 font-semibold">
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#26395F] font-bold">
                  ✓
                </span>
                {title}
              </p>
              <p className="text-sm text-gray-300 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
