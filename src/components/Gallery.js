"use client";

import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, TabletSmartphone } from "lucide-react";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-12 py-16 md:py-24 overflow-hidden bg-white lg:max-w-[87%] max-w-6xl mx-auto px-6">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left md:mr-12">
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Beautiful
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
            Online Photo Galleries
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed text-base sm:text-lg">
            Photo Selection inbuilt into photo gallery. Hassle Free selection
            for Album Creation, Photo Proofing, Photo Editing etc. Save your own
            and your client’s precious time.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
          <Button className="px-6 py-2 text-white bg-black hover:bg-gray-800 rounded-md text-sm sm:text-base">
            Create Gallery
          </Button>
          <Button
            variant="outline"
            className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-md text-sm sm:text-base"
          >
            Learn more
          </Button>
        </div>

        {/* Bottom Icons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t pt-8 mt-8">
          <div className="flex flex-col items-center text-center space-y-2">
            <Heart className="h-6 w-6 text-gray-800" />
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
              Simply Like to Select
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm">
              Easy photo selection with a simple like action.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <MessageSquare className="h-6 w-6 text-gray-800" />
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
              Comment Specific Needs
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm">
              Add comments for specific requirements or feedback.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <TabletSmartphone className="h-6 w-6 text-gray-800" />
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
              Select on Any Device
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm">
              Select photos from any device, anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section – Images */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center">
          {/* Image 1 with white fade overlay */}
          <div className="relative w-44 h-32 sm:w-40 sm:h-48 md:w-52 md:h-40 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/g1.jpg"
              alt="Gallery Image 1"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>
          </div>

          {/* Image 2 */}
          <div className="relative w-44 h-32 sm:w-40 sm:h-48 md:w-52 md:h-40 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/g2.jpg"
              alt="Gallery Image 2"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Image 3 */}
          <div className="relative w-44 h-32 sm:w-40 sm:h-48 md:w-52 md:h-40 rounded-2xl overflow-hidden shadow-lg opacity-80">
            <Image
              src="/g3.jpg"
              alt="Gallery Image 3"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Soft background glow */}
        <div className="absolute -z-10 w-[400px] sm:w-[500px] h-[250px] sm:h-[300px] bg-purple-100 rounded-full blur-3xl opacity-40 top-10 right-10"></div>
      </div>
    </section>
  );
}
