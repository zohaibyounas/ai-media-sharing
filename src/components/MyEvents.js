"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, Play, Trash2, Share2, MoreHorizontal, Users } from "lucide-react";
import Topbar from "@/components/Topbar";
import Link from "next/link";

export default function MyEvents() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Published", "Unpublished"];

  const events = [
    {
      id: 1,
      name: "Walima Ceremony",
      date: "Friday, August 22, 2025",
      image: "/walima.png",
      views: 200,
      photos: 35,
      guests: 4,
    },
    {
      id: 2,
      name: "Summer Gala 2025",
      date: "Friday, August 22, 2025",
      image: "/summergala.png",
      views: 200,
      photos: 35,
      guests: 4,
    },
    {
      id: 3,
      name: "Tech Conference",
      date: "Friday, August 22, 2025",
      image: "/walima.png",
      views: 200,
      photos: 35,
      guests: 4,
    },
    {
      id: 4,
      name: "Global Music Festival",
      date: "Friday, August 22, 2025",
      image: "/walima.png",
      views: 200,
      photos: 35,
      guests: 4,
    },
    {
      id: 5,
      name: "Charity Run for Hope",
      date: "Friday, August 22, 2025",
      image: "/walima.png",
      views: 200,
      photos: 35,
      guests: 4,
    },
    {
      id: 6,
      name: "Emma & Liam’s Wedding",
      date: "Friday, August 22, 2025",
      image: "/walima.png",
      views: 200,
      photos: 35,
      guests: 4,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
          <h1 className="text-xl font-semibold text-[#101828]">My Events</h1>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Search Bar (Search Icon on Right) */}
            <div className="relative flex-1 sm:flex-none">
              <Input
                type="text"
                placeholder="Search"
                className="pr-10 w-full sm:w-72 bg-white border-gray-300 text-sm"
              />
              <div className="absolute right-3 top-2.5">
                <Image
                  src="/serach.png"
                  alt="search icon"
                  width={16}
                  height={16}
                />
              </div>
            </div>

            {/* Sort & Create Buttons */}
            <Button
              variant="outline"
              className="text-sm font-medium border-gray-300 text-[#101828]"
            >
              Sort By
            </Button>
            <Link href="/dashboard/create-event">
              <Button className="bg-[#101828] hover:bg-[#0d1622] text-white text-sm font-medium cursor-pointer">
                Create Event
              </Button>
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium transition ${
                activeTab === tab
                  ? "text-[#101828] border-b-2 border-[#101828]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative w-full h-44">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-3 flex items-center gap-4 text-white text-xs">
                  <div className="flex items-center gap-1">
                    <Eye size={14} /> {event.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <Play size={14} /> {event.photos}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} /> {event.guests}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {event.name}
                </h3>
                <p className="text-xs text-gray-500">{event.date}</p>

                <div className="flex items-center justify-between mt-3 text-gray-500">
                  <div className="flex items-center gap-3">
                    <Eye
                      size={15}
                      className="cursor-pointer hover:text-gray-700"
                    />
                    <Play
                      size={15}
                      className="cursor-pointer hover:text-gray-700"
                    />
                    <Trash2
                      size={15}
                      className="cursor-pointer hover:text-red-600"
                    />
                    <Share2
                      size={15}
                      className="cursor-pointer hover:text-gray-700"
                    />
                  </div>
                  <MoreHorizontal
                    size={16}
                    className="cursor-pointer hover:text-gray-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center mt-6 gap-2 text-sm">
          <Button variant="outline" size="sm" className="text-gray-700">
            Previous
          </Button>
          <span className="text-gray-700 font-medium">1</span>
          <Button variant="outline" size="sm" className="text-gray-700">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
