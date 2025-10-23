"use client";

import Image from "next/image";

export default function Howwork() {
  return (
    <section className="bg-white py-24 px-6 sm:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto text-center lg:max-w-[95%]">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#101828] mb-3">
          How it Works
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-12">
          From upload to delivery, Photomo makes photo management effortless and
          secure in just a few simple steps.
        </p>

        {/* Steps Section */}
        {/* Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 rounded overflow-hidden border border-gray-200 ">
          {/* Step 1 */}
          <div
            className="flex flex-col items-center justify-center py-8 px-4"
            style={{
              background:
                "linear-gradient(90deg, rgba(2, 83, 149, 0.3) 0%, #FFFFFF 100%)",
            }}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#101828] text-white text-sm font-semibold mb-3">
              1
            </div>
            <p className="text-sm font-medium text-[#101828] max-w-[180px]">
              Create Event and Get QR Code
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center justify-center py-8 px-4 bg-white">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#101828] text-white text-sm font-semibold mb-3">
              2
            </div>
            <p className="text-sm font-medium text-[#101828] max-w-[180px]">
              Guests Scan QR Code and Register
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center justify-center py-8 px-4 bg-white">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#101828] text-white text-sm font-semibold mb-3">
              3
            </div>
            <p className="text-sm font-medium text-[#101828] max-w-[180px]">
              Upload Photos and Publish Event
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center justify-center py-8 px-4 bg-white">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#101828] text-white text-sm font-semibold mb-3">
              4
            </div>
            <p className="text-sm font-medium text-[#101828] max-w-[180px]">
              Guest get notified about their photos
            </p>
          </div>
        </div>

        {/* Mockup Placeholder / Image */}
        <div className="relative rounded overflow-hidden shadow-xl border border-gray-100 bg-[#F9FAFB] flex items-center justify-center ">
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
