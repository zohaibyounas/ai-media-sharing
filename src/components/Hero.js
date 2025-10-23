"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const scrollRef = useRef(null);

  // JS scroll function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // pixels to scroll
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const heroImages = [
    { src: "/hero6.jpg", label: "Sports" },
    { src: "/hero1.png", label: "Corporate Events" },
    { src: "/hero2.jpg", label: "Music Festivals" },
    { src: "/hero3.png", label: "Weddings" },
    { src: "/hero4.png", label: "Music Festivals" },
    { src: "/hero5.png", label: "Schools" },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-28 text-center bg-[linear-gradient(180deg,_#FFDCE3_0%,_#FFFFFF_40%,_#E2E2FF_80%,_#FFFFFF_100%)]">
      {/* Image row — stacked, rounded, overlapping exactly like design */}

      {/* Background vector glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[2000px] h-[900px] bg-[radial-gradient(ellipse_at_top_left,_#FFDCE3_0%,_transparent_70%)] opacity-40 top-[-200px] left-[-400px] blur-3xl"></div>
        <div className="absolute w-[2000px] h-[800px] bg-[radial-gradient(ellipse_at_bottom_right,_#E2E2FF_0%,_transparent_70%)] opacity-40 bottom-[-200px] right-[-400px] blur-3xl"></div>
      </div>

      <div className="lg:max-w-[87%] max-w-6xl mx-auto px-6">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
          <span className="text-indigo-600">✨</span>
          <span>Next-Level Media with AI</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
          Organize. <span className="text-indigo-600">Share.</span> Collaborate.
        </h1>
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
                style={{
                  transform: `rotate(${img.rotate})`,
                }}
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
          Use Face Recognition to deliver photos faster, build custom galleries,
          and make photo selection easy for your clients.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          <Button className="group bg-gray-900 hover:bg-black text-white px-6 py-6 text-lg rounded-xl shadow-lg flex items-center gap-2 transition-all duration-300">
            <ArrowRight className="w-7 h-7 transform rotate-[315deg] group-hover:-rotate-[45deg] transition-transform duration-300" />
            Start Free Trial
          </Button>
          <Button
            variant="outline"
            className="border-gray-400 text-gray-800 px-6 py-6 text-lg rounded-xl hover:bg-gray-100"
          >
            Learn More
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-10 bg-gradient-to-r from-[#F8F3FF] to-[#F4F8FF] rounded-3xl py-10 px-8 flex flex-col md:flex-row justify-center items-center gap-12 shadow-md border border-gray-100">
          <div className="flex items-center gap-4">
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
                100k+
              </p>
              <p className="text-gray-500 text-sm">Happy Users</p>
            </div>
          </div>

          <div className="text-left">
            <p className="text-2xl font-bold text-gray-900 leading-tight">
              120k+
            </p>
            <p className="text-gray-500 text-sm">Events</p>
          </div>

          <div className="text-left">
            <p className="text-2xl font-bold text-gray-900 leading-tight">
              300M+
            </p>
            <p className="text-gray-500 text-sm">Photos Shared</p>
          </div>

          <div className="max-w-xs text-sm text-gray-600 text-center md:text-left">
            Trusted by millions of creators and organizers worldwide to share
            memories beautifully.
          </div>
        </div>

        {/* ✅ Hero1–6 Section (scrollable with buttons inside each image) */}

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
                {/* Overlay button inside image */}
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[220px] h-[31px] bg-black/50 text-white rounded-[15px] text-sm flex items-center justify-center hover:bg-black/70 transition-all duration-300">
                  {img.label}
                </button>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Unlock the full power of your media library
          </h2>
          <p className="mt-4 text-gray-600 text-md md:text-md">
            Capture, organize, and share your most valuable moments with ease.
          </p>
        </div>
      </div>
    </section>
  );
}
