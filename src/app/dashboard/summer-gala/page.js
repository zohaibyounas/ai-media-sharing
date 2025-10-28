"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ImageIcon,
  Upload,
  Download,
  Plus,
  Folder,
  Video,
  Images,
  Pencil,
  Users,
  Target,
  Megaphone,
  Hash,
  Calendar,
  BarChart3,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function EventDetails() {
  const collections = [
    { id: 1, name: "Enterance", image: "/walima.png" },
    { id: 2, name: "Reception", image: "/walima.png" },
    { id: 3, name: "Main Event", image: "/walima.png" },
    { id: 4, name: "Dinner", image: "/walima.png" },
    { id: 5, name: "Walima Ceremony", image: "/walima.png" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      {/* Sidebar */}
      <aside className="w-20 bg-white border-r flex flex-col items-center py-6 justify-between">
        <div className="flex flex-col items-center gap-5 flex-1">
          {/* Top Active Icon */}
          <div className="p-2 rounded-lg bg-[#101828] text-white">
            <ImageIcon size={20} />
          </div>

          {/* Middle Icons */}
          <div className="flex flex-col items-center gap-6 text-gray-500">
            <Users size={18} className="hover:text-[#101828] cursor-pointer" />
            <Image
              src="/eye.png"
              width={18}
              height={18}
              alt="views icon"
              className="hover:text-[#101828] cursor-pointer"
            />
            <Plus size={18} className="hover:text-[#101828] cursor-pointer" />
            <Megaphone
              size={18}
              className="hover:text-[#101828] cursor-pointer"
            />
            <Hash size={18} className="hover:text-[#101828] cursor-pointer" />
            <Calendar
              size={18}
              className="hover:text-[#101828] cursor-pointer"
            />
            <BarChart3
              size={18}
              className="hover:text-[#101828] cursor-pointer"
            />
          </div>

          {/* Divider and Settings */}
          <div className="w-8 border-t border-gray-200 my-4"></div>
          <p className="text-[10px] tracking-wide text-gray-400 mb-2">
            SETTINGS
          </p>
          <Settings
            size={18}
            className="text-gray-500 hover:text-[#101828] cursor-pointer"
          />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center justify-between border-b bg-white px-6 py-3">
          <div className="flex items-center gap-2">
            <Link href="/dashboard/my-events">
              <Button
                variant="ghost"
                size="sm"
                className="text-[#101828] font-medium"
              >
                ←
              </Button>
            </Link>
            <h1 className="text-lg font-semibold text-[#101828]">
              Summer Gala{" "}
            </h1>
            <p className="text-sm text-gray-500 ml-2">
              Friday, August 22, 2025
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="relative">
              <Input
                placeholder="Search"
                className="w-72 bg-[#F9FAFB] border-gray-300 pr-10 text-sm"
              />
              <div className="absolute right-3 top-2.5">
                <Image
                  src="/serach.png"
                  width={16}
                  height={16}
                  alt="search icon"
                />
              </div>
            </div>

            <Button
              variant="outline"
              className="text-sm font-medium border-gray-300 flex items-center gap-2"
            >
              <Upload size={15} /> Upload
            </Button>
            <Button className="bg-[#101828] text-white text-sm flex items-center gap-2 hover:bg-[#0d1622]">
              <Download size={15} /> Download
            </Button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex">
          {/* Left Info Panel */}
          <div className="w-64 bg-white border-r p-6">
            <div className="mb-6 relative">
              <div className="w-full h-28 bg-[#CED4DA] rounded-lg flex items-center justify-center text-gray-500 text-sm border">
                Edit Thumbnail
              </div>
              <button className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#919EAB8F] rounded-full p-1 shadow-sm hover:bg-gray-50">
                <Pencil size={18} className="text-[#101828]" />
              </button>
            </div>

            <div className="flex justify-between text-sm mb-6">
              <div className="text-center">
                <p className="text-lg font-semibold text-[#101828]">450</p>
                <p className="text-gray-500">Photos</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-[#101828]">32</p>
                <p className="text-gray-500">Videos</p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-between border border-gray-200 px-3 py-2 rounded-md text-sm text-[#101828] hover:bg-gray-50">
                Add Collection <Plus size={15} />
              </button>
              <button className="w-full flex items-center justify-between border border-gray-200 px-3 py-2 rounded-md text-sm text-[#101828] hover:bg-gray-50">
                My Collection <Folder size={15} />
              </button>
            </div>
          </div>

          {/* Collections Grid */}
          <div className="flex-1 p-6">
            <h2 className="text-lg font-semibold mb-4 text-[#101828]">
              Collections
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {collections.map((col) => (
                <div
                  key={col.id}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {/* Image inside with inner padding + rounded corners */}
                  <div className="p-3">
                    <div className="relative w-full h-36 rounded-lg overflow-hidden">
                      <Image
                        src={col.image}
                        alt={col.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Text and Info */}
                  <div className="px-3 pb-3">
                    <p className="text-sm font-medium text-[#101828]">
                      {col.name}
                    </p>

                    <div className="flex items-center gap-3 text-gray-500 text-xs mt-1">
                      <div className="flex items-center gap-1">
                        <ImageIcon size={13} /> 200
                      </div>
                      <div className="flex items-center gap-1">
                        <Video size={13} /> 35
                      </div>
                      <span>250 MB</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
