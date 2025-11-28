"use client";

import Image from "next/image";
import { useI18n } from "../context/I18nContext";

export default function Ourusers() {
  const { t, lang } = useI18n();
  const isRTL = ["ar", "ur"].includes(lang);

  // header may contain a newline \n for responsive break — split for rendering
  const headerLines = (t("ourusers.header.title") || "").split("\n");

  return (
    <section
      className={`bg-[#F8F8FF] py-24 px-6 sm:px-10 lg:px-24 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <div className="max-w-6xl lg:max-w-[95%] mx-auto">
        {/* Header Section */}
        <div
          className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-16 ${
            isRTL ? "md:flex-row-reverse" : ""
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#101828] leading-tight">
            {headerLines.map((line, i) => (
              <span key={i} className="block">
                {line}
                {/* keep the same responsive break behaviour */}
                {i < headerLines.length - 1 && (
                  <br className="hidden sm:block" />
                )}
              </span>
            ))}
          </h2>

          <p className="text-gray-600 mt-4 md:mt-0 md:max-w-md text-sm sm:text-base leading-relaxed">
            {t("ourusers.header.subtitle")}
          </p>
        </div>

        {/* Testimonials Row */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch relative">
          {/* --- Card 1 --- */}
          <div
            className="flex flex-col justify-between p-8 rounded-2xl shadow-xl text-white w-full lg:w-1/3"
            style={{
              background: "linear-gradient(136deg, #26395F 0%, #101828 100%)",
            }}
          >
            <div>
              <p className="text-4xl mb-3 leading-none">“</p>
              <p className="text-base leading-relaxed mb-8">
                {t("ourusers.testimonials.t1.quote")}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative rounded-full overflow-hidden">
                  <Image
                    src="/user1.png"
                    alt={t("ourusers.testimonials.t1.name")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-white text-sm">
                    {t("ourusers.testimonials.t1.name")}
                  </p>
                  <p className="text-gray-300 text-xs">
                    {t("ourusers.testimonials.t1.role")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Card 2 --- */}
          <div className="flex flex-col justify-between p-8 rounded-2xl bg-white border h-2/4 border-gray-200 shadow-sm w-full lg:w-1/3 relative">
            <div>
              <p className="text-4xl mb-3 text-gray-900 leading-none">“</p>
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                {t("ourusers.testimonials.t2.quote")}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative rounded-full overflow-hidden">
                  <Image
                    src="/user2.jpg"
                    alt={t("ourusers.testimonials.t2.name")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    {t("ourusers.testimonials.t2.name")}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {t("ourusers.testimonials.t2.role")}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="absolute -bottom-16 left-1/2 w-full -translate-x-1/2 mt-5">
              <div className="bg-white border border-gray-200 rounded-xl py-4 px-20 text-xs text-gray-600 font-medium shadow-md">
                {t("ourusers.tagline")}
              </div>
            </div>
          </div>

          {/* --- Card 3 --- */}
          <div className="flex flex-col justify-between p-8 rounded-2xl mt-14 bg-white border border-gray-200 shadow-md w-full lg:w-1/3 relative">
            {/* Top Label */}
            <div className="absolute w-full -top-15 left-1/2 -translate-x-1/2">
              <div
                className="text-white text-xs font-semibold px-12 py-4 rounded-full shadow-lg text-center"
                style={{
                  background:
                    "linear-gradient(180deg, #1C2434 0%, #101828 100%)",
                  boxShadow: "0px 4px 12px rgba(16, 24, 40, 0.2)",
                }}
              >
                {t("ourusers.topLabel")}
              </div>
            </div>

            {/* Quote */}
            <div>
              <p className="text-4xl mb-3 text-gray-900 leading-none">“</p>
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                {t("ourusers.testimonials.t3.quote")}
              </p>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image
                  src="/user3.jpg"
                  alt={t("ourusers.testimonials.t3.name")}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900 text-sm">
                  {t("ourusers.testimonials.t3.name")}
                </p>
                <p className="text-gray-500 text-xs">
                  {t("ourusers.testimonials.t3.role")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
