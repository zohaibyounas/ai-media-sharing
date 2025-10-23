"use client";

import Image from "next/image";

export default function Ourusers() {
  return (
    <section className="bg-[#F8F8FF] py-24 px-6 sm:px-10 lg:px-24 ">
      <div className="max-w-6xl lg:max-w-[95%] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#101828] leading-tight">
            What Our <br className="hidden sm:block" /> Users Say
          </h2>
          <p className="text-gray-600 mt-4 md:mt-0 md:max-w-md text-sm sm:text-base leading-relaxed">
            Join a growing community of photographers and event organizers who
            trust us to manage, share, and protect their most valuable memories.
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
                Photomo has completely transformed the way I deliver photos to
                my clients. The face recognition saves me hours of sorting, and
                my clients love how easy it is to find their pictures.
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
                    alt="Maya Lennox"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-white text-sm">Maya Lennox</p>
                  <p className="text-gray-300 text-xs">Wedding Photographer</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Card 2 --- */}
          <div className="flex flex-col justify-between p-8 rounded-2xl bg-white border h-2/4 border-gray-200 shadow-sm w-full lg:w-1/3 relative">
            <div>
              <p className="text-4xl mb-3 text-gray-900 leading-none">“</p>
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                As an event organizer, I need to share thousands of images
                quickly and securely. Photomo makes the entire process smooth,
                professional, and stress-free.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative rounded-full overflow-hidden">
                  <Image
                    src="/user2.jpg"
                    alt="Eniola Kabubi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    Eniola Kabubi
                  </p>
                  <p className="text-gray-500 text-xs">Event Manager</p>
                </div>
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="absolute -bottom-16 left-1/2 w-full -translate-x-1/2 mt-5">
              <div className="bg-white border border-gray-200 rounded-xl py-4 px-20 text-xs text-gray-600 font-medium shadow-md">
                NO FLUFF JUST RESULTS
              </div>
            </div>
          </div>

          {/* --- Card 3 --- */}
          <div className="flex flex-col justify-between  p-8 rounded-2xl mt-14 bg-white border border-gray-200 shadow-md w-full lg:w-1/3 relative">
            {/* Top Label */}
            <div className="absolute w-full -top-15 left-1/2 -translate-x-1/2 ">
              <div
                className="text-white text-xs font-semibold px-12 py-4 rounded-full shadow-lg text-center"
                style={{
                  background:
                    "linear-gradient(180deg, #1C2434 0%, #101828 100%)",
                  boxShadow: "0px 4px 12px rgba(16, 24, 40, 0.2)",
                }}
              >
                Hear from our clients
              </div>
            </div>

            {/* Quote */}
            <div className="">
              <p className="text-4xl mb-3 text-gray-900 leading-none">“</p>
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                I love the branded galleries! It feels like I’m giving my
                clients a premium experience, and the AI tagging means
                everything is ready in minutes.
              </p>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image
                  src="/user3.jpg"
                  alt="Aliyah Hassan"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900 text-sm">
                  Aliyah Hassan
                </p>
                <p className="text-gray-500 text-xs">Portrait Photographer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
