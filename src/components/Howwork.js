"use client";

import Image from "next/image";
import { useI18n } from "../context/I18nContext";

export default function Howwork() {
  const { t, lang } = useI18n();
  const isRTL = ["ar", "ur"].includes(lang);

  return (
    <section
      className={`bg-white py-24 px-6 sm:px-10 lg:px-24 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center lg:max-w-[95%]">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#101828] mb-3">
          {t("howwork.title")}
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-12">
          {t("howwork.subtitle")}
        </p>

        {/* Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 rounded overflow-hidden border border-gray-200">
          {t("howwork.steps").map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-8 px-4"
              style={
                index === 0
                  ? {
                      background:
                        "linear-gradient(90deg, rgba(2, 83, 149, 0.3) 0%, #FFFFFF 100%)",
                    }
                  : {}
              }
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#101828] text-white text-sm font-semibold mb-3">
                {index + 1}
              </div>
              <p className="text-sm font-medium text-[#101828] max-w-[180px]">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Mockup / Image */}
        <div className="relative rounded overflow-hidden shadow-xl border border-gray-100 bg-[#F9FAFB] flex items-center justify-center mt-12">
          <div className="text-center w-3/5">
            <Image
              src="/dashbored.png"
              alt="Dashboard Mockup"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
