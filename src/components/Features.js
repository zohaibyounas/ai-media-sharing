// app/components/Features.js
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Download } from "lucide-react";
import { useI18n } from "../context/I18nContext";

export default function Features() {
  const { t, lang } = useI18n();
  const isRTL = ["ar", "ur"].includes(lang);

  return (
    <section className="w-full bg-white text-gray-800">
      {/* HERO SECTION */}
      <div
        className={`max-w-6xl lg:max-w-[87%] mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 lg:gap-96 items-center ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {/* LEFT SIDE */}
        <div>
          <p className="text-sm font-medium tracking-wide text-gray-500 mb-2">
            {t("features.pretitle")}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {t("features.title")}
          </h1>
          <p className="text-gray-600 max-w-lg mb-8">
            {t("features.paragraph")}
          </p>
          <Button size="lg" className="px-6 py-3 text-base">
            {t("features.ctaTry")}
          </Button>
        </div>

        {/* RIGHT SIDE - Find Your Photos */}
        <div className="relative flex flex-col items-center justify-center">
          <p className="text-sm font-semibold text-gray-700 mb-6">
            {t("features.rightPretitle")}
          </p>

          {/* Frame + Face Overlay */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            <Image
              src="/Frame.png"
              alt="Frame overlay"
              fill
              className="object-contain z-10"
            />

            <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden z-0">
              <Image
                src="/fimg1.jpg"
                alt="Person face"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            {t("features.rightCaption")}
          </p>
        </div>
      </div>

      {/* FEATURES GRID */}
      <div className="max-w-6xl lg:max-w-[87%] mx-auto grid md:grid-cols-3 gap-8 px-6 pb-20">
        <Card className="border-none shadow-none">
          <CardContent className="p-0">
            <Image
              src="/f2.jpg"
              alt={t("features.card1.title")}
              width={400}
              height={250}
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              {t("features.card1.title")}
            </h3>
            <p className="text-gray-600 text-sm">{t("features.card1.desc")}</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-none">
          <CardContent className="p-0">
            <Image
              src="/f3.jpg"
              alt={t("features.card2.title")}
              width={400}
              height={250}
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              {t("features.card2.title")}
            </h3>
            <p className="text-gray-600 text-sm">{t("features.card2.desc")}</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-none">
          <CardContent className="p-0">
            <Image
              src="/f4.jpg"
              alt={t("features.card3.title")}
              width={400}
              height={250}
              className="rounded-xl mb-4 h-54 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">
              {t("features.card3.title")}
            </h3>
            <p className="text-gray-600 text-sm">{t("features.card3.desc")}</p>
          </CardContent>
        </Card>
      </div>

      {/* COLLABORATIVE SECTION */}
      <div
        className={`relative max-w-6xl lg:max-w-[87%] mx-auto px-6 pb-24 grid md:grid-cols-2 gap-12 items-center ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {/* LEFT SIDE - IMAGE + BACKGROUND */}
        <div className="relative flex justify-center md:justify-start">
          <div className="absolute -z-10 top-6 left-[-40px] w-[420px] h-[360px] opacity-90">
            <svg
              viewBox="0 0 600 400"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full blur-[50px]"
            >
              <defs>
                <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#eef2ff" />
                  <stop offset="100%" stopColor="#e0e7ff" />
                </linearGradient>
              </defs>
              <path
                fill="url(#blobGradient)"
                d="M415,310Q375,380,290,375Q205,370,145,310Q85,250,110,170Q135,90,220,85Q305,80,375,120Q445,160,435,235Q425,310,415,310Z"
              />
            </svg>
          </div>

          <div className="relative">
            <div className="relative rounded-[22px] overflow-hidden shadow-md">
              <Image
                src="/slection.jpg"
                alt={t("features.collab.title")}
                width={500}
                height={350}
                className="rounded-[22px] object-cover"
              />
            </div>

            <div className="absolute -top-5 right-5 flex gap-3 z-20">
              <div className="bg-gray-900 text-white p-2.5 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform">
                <Heart className="w-5 h-5" />
              </div>
              <div className="bg-gray-900 text-white p-2.5 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform">
                <Download className="w-5 h-5" />
              </div>
            </div>

            <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-[60%] h-[18px] bg-gray-400/30 rounded-full blur-md opacity-50"></div>
          </div>
        </div>

        {/* RIGHT SIDE - TEXT CONTENT */}
        <div>
          <p className="text-sm font-medium tracking-wide text-gray-500 mb-2 uppercase">
            {t("features.collab.pretitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("features.collab.title")}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {t("features.collab.paragraph")}
          </p>

          <Button
            size="lg"
            className="bg-gray-900 text-white hover:bg-gray-800 mb-8"
          >
            {t("features.collab.cta")}
          </Button>

          <div className="w-full h-[1px] bg-gray-200 mb-8"></div>

          {/* FEATURE GRID */}
          <div className="grid sm:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <Heart className="mx-auto md:mx-0 mb-3 w-5 h-5 text-gray-800" />
              <p className="font-medium mb-1">
                {t("features.grid.item1.title")}
              </p>
              <p className="text-sm text-gray-500">
                {t("features.grid.item1.desc")}
              </p>
            </div>
            <div>
              <div className="mx-auto md:mx-0 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 10h8M8 14h5m5-7V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14l4-4h8a2 2 0 002-2z"
                  />
                </svg>
              </div>
              <p className="font-medium mb-1">
                {t("features.grid.item2.title")}
              </p>
              <p className="text-sm text-gray-500">
                {t("features.grid.item2.desc")}
              </p>
            </div>
            <div>
              <Download className="mx-auto md:mx-0 mb-3 w-5 h-5 text-gray-800" />
              <p className="font-medium mb-1">
                {t("features.grid.item3.title")}
              </p>
              <p className="text-sm text-gray-500">
                {t("features.grid.item3.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
