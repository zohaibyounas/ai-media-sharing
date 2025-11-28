"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useI18n } from "../context/I18nContext";

export default function Hero() {
  const scrollRef = useRef(null);
  const { t, lang } = useI18n();
  const isRTL = ["ar", "ur"].includes(lang);

  // JS scroll function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const heroImages = [
    { src: "/hero6.jpg", label: t("hero.labels.sports") },
    { src: "/hero1.png", label: t("hero.labels.corporate") },
    { src: "/hero2.jpg", label: t("hero.labels.music") },
    { src: "/hero3.png", label: t("hero.labels.weddings") },
    { src: "/hero4.png", label: t("hero.labels.music") },
    { src: "/hero5.png", label: t("hero.labels.schools") },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-28 text-center">
      {/* Background glow layers */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Rectangle.png"
          alt="Background glow"
          fill
          className="object-cover object-center"
        />
        <div className="absolute w-[1800px] h-[900px] bg-[radial-gradient(ellipse_at_top_left,_#FFDCE3_0%,_transparent_70%)] opacity-60 top-[-250px] left-[-400px] blur-3xl"></div>
        <div className="absolute w-[1600px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,_#E2E2FF_0%,_transparent_70%)] opacity-50 top-[-200px] right-[-300px] blur-3xl"></div>
        <div className="absolute w-[2000px] h-[900px] bg-[radial-gradient(ellipse_at_bottom,_#FFFFFF_0%,_transparent_80%)] opacity-70 bottom-[-300px] left-1/2 -translate-x-1/2 blur-2xl"></div>
      </div>

      <div className="lg:max-w-[87%] max-w-6xl mx-auto px-6">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
          <span className="text-indigo-600">✨</span>
          <span>{t("hero.badge")}</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
          {t("hero.heading.organize")}
          <span className="text-indigo-600">{t("hero.heading.share")}</span>
          {t("hero.heading.collaborate")}
        </h1>

        {/* Image Stack */}
        <div className="relative flex justify-center items-center mt-10 mb-10">
          <div className="flex justify-center items-center -space-x-16 md:-space-x-12">
            {[
              { src: "/Rectangle 34624108.png", rotate: "-8deg", z: "z-[1]" },
              { src: "/Rectangle 34624107.png", rotate: "-4deg", z: "z-[2]" },
              { src: "/Rectangle 34624106.png", rotate: "0deg", z: "z-[3]" },
              { src: "/Rectangle 34624105.png", rotate: "3deg", z: "z-[3]" },
              { src: "/Rectangle 34624102.png", rotate: "6deg", z: "z-[2]" },
              { src: "/Rectangle 34624103.png", rotate: "9deg", z: "z-[1]" },
              { src: "/Rectangle 34624104.png", rotate: "9deg", z: "z-[1]" },
            ].map((img, idx) => (
              <div
                key={idx}
                className={`relative w-36 h-52 md:w-48 md:h-56 overflow-hidden rounded-3xl gap-12 transform ${img.z} transition-all duration-300 hover:scale-105 hover:z-[5]`}
                style={{ transform: `rotate(${img.rotate})` }}
              >
                <Image
                  src={img.src}
                  alt={`photo-${idx}`}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          {t("hero.subtitle")}
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          <Button className="group bg-gray-900 hover:bg-black text-white px-6 py-6 text-lg rounded-xl shadow-lg flex items-center gap-2 transition-all duration-300">
            <ArrowRight className="w-7 h-7 transform rotate-[315deg] group-hover:-rotate-[45deg] transition-transform duration-300" />
            {t("hero.cta.start")}
          </Button>
          <Button
            variant="outline"
            className="border-gray-400 text-gray-800 px-6 py-6 text-lg rounded-xl hover:bg-gray-100"
          >
            {t("hero.cta.learn")}
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-[#FFFFFF4D] to-[#FFFFFF4D] rounded-e-full py-10 px-8 flex flex-col md:flex-row justify-center items-center gap-8 shadow-md border border-gray-100">
            <div className="flex items-center gap-4 w-72 pl-4 bg-[#FFDCE3] rounded-full">
              <div className="flex -space-x-4">
                {["/img1.jpg", "/img-2.jpg", "/img3.jpg"].map((src, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200 hover:scale-105 transition-transform duration-300"
                  >
                    <Image
                      src={src}
                      alt={`user-${i}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-900 leading-tight">
                  {t("hero.stats.happy")}
                </p>
                <p className="text-gray-500 text-sm">
                  {t("hero.stats.happyLabel")}
                </p>
              </div>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900 leading-tight">
                {t("hero.stats.events")}
              </p>
              <p className="text-gray-500 text-sm">
                {t("hero.stats.eventsLabel")}
              </p>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900 leading-tight">
                {t("hero.stats.photos")}
              </p>
              <p className="text-gray-500 text-sm">
                {t("hero.stats.photosLabel")}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF4D] to-[#FFFFFF4D] rounded-l-full py-10 px-8 flex items-center justify-center shadow-md border border-gray-100">
            <div className="text-center max-w-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("hero.trust.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("hero.trust.text")}
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Image Gallery */}
        <div className="mt-20 relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden scrollbar-hide px-4 py-2"
          >
            {heroImages.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl overflow-hidden shadow-lg flex-shrink-0 w-52 h-56 md:w-60 md:h-64 bg-gray-100 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={img.src}
                  alt={`hero-${idx}`}
                  fill
                  className="object-cover object-center"
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[220px] h-[31px] bg-black/50 text-white rounded-[15px] text-sm flex items-center justify-center hover:bg-black/70 transition-all duration-300">
                  {img.label}
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("hero.final.heading")}
          </h2>
          <p className="mt-4 text-gray-600 text-md md:text-md">
            {t("hero.final.text")}
          </p>
        </div>
      </div>
    </section>
  );
}
