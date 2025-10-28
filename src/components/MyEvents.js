"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ Import router
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, Play, Trash2, Share2, MoreHorizontal, Users } from "lucide-react";
import Link from "next/link";

export default function MyEvents() {
  const [activeTab, setActiveTab] = useState("All");
  const [apiEvents, setApiEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter(); // ✅ Initialize router

  const tabs = ["All", "Published", "Unpublished"];

  const staticEvents = [
    {
      name: "Walima Ceremony",
      date: "Friday, August 22, 2025",
      image: "/walima.png",
      views: 200,
      photos: 35,
      guests: 4,
      link: "/dashboard/walima-ceremony",
    },
    {
      name: "Summer Gala 2025",
      date: "Friday, August 22, 2025",
      image: "/summergala.png",
      views: 200,
      photos: 35,
      guests: 4,
      link: "/dashboard/summer-gala",
    },
    {
      name: "Tech Conference",
      date: "Friday, August 22, 2025",
      image: "/walima.png",
      views: 200,
      photos: 35,
      guests: 4,
    },
    {
      name: "Global Music Festival",
      date: "Friday, August 22, 2025",
      image: "/walima.png",
      views: 200,
      photos: 35,
      guests: 4,
    },
    {
      name: "Charity Run for Hope",
      date: "Friday, August 22, 2025",
      image: "/walima.png",
      views: 200,
      photos: 35,
      guests: 4,
    },
    {
      name: "Emma & Liam’s Wedding",
      date: "Friday, August 22, 2025",
      image: "/walima.png",
      views: 200,
      photos: 35,
      guests: 4,
    },
  ];

  // ✅ Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError("");

      try {
        const token = localStorage.getItem("access_token");
        if (!token) throw new Error("User not logged in. Please login again.");

        const res = await fetch(
          `https://api.fotoshareai.com/events?q=&status=all&sort=date_desc&page=1&pageSize=20`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          if (res.status === 401)
            throw new Error("Unauthorized. Please login again.");
          const errData = await res.json();
          throw new Error(errData.detail?.[0]?.msg || "Failed to fetch events");
        }

        const data = await res.json();
        setApiEvents(data.items || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // ✅ Get Event Details
  const getEventDetails = async (eventId) => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) throw new Error("User not logged in");

      const res = await fetch(`https://api.fotoshareai.com/events/${eventId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail?.[0]?.msg || "Failed to fetch event");
      }

      const data = await res.json();
      alert(`Event: ${data.name}\nDate: ${data.date}\nType: ${data.type}`);
    } catch (err) {
      alert(err.message);
    }
  };

  // ✅ Delete Event
  const deleteEvent = async (eventId) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    try {
      const token = localStorage.getItem("access_token");
      if (!token) throw new Error("User not logged in");

      const res = await fetch(`https://api.fotoshareai.com/events/${eventId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail?.[0]?.msg || "Failed to delete event");
      }

      setApiEvents((prev) => prev.filter((event) => event.id !== eventId));
      alert("Event deleted successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  const allEvents = [...staticEvents, ...apiEvents];

  return (
    <div className="min-h-screen">
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
          <h1 className="text-xl font-semibold text-[#101828]">My Events</h1>
          <div className="flex items-center gap-3 w-full sm:w-auto">
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

        {/* Loading / Error */}
        {loading && (
          <p className="text-center text-gray-500">Loading events...</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {allEvents.map((event, index) => {
            const CardContent = (
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="relative w-full h-44">
                  <Image
                    src={event.image || "/walima.png"}
                    alt={event.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-3 flex items-center gap-4 text-white text-xs">
                    <div className="flex items-center gap-1">
                      <Eye size={14} /> {event.views || 0}
                    </div>
                    <div className="flex items-center gap-1">
                      <Play size={14} /> {event.photos || 0}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} /> {event.guests || 0}
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {event.name}
                  </h3>
                  <p className="text-xs text-gray-500">{event.date}</p>

                  <div className="flex items-center justify-between mt-3 text-gray-500">
                    <div className="flex items-center gap-3">
                      <Eye
                        size={15}
                        className="hover:text-gray-700 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          event.id && getEventDetails(event.id);
                        }}
                      />
                      <Play
                        size={15}
                        className="hover:text-gray-700 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          alert("View photos clicked!");
                        }}
                      />
                      <Trash2
                        size={15}
                        className="hover:text-red-600 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          event.id && deleteEvent(event.id);
                        }}
                      />
                      {/* ✅ Share Icon Navigates to /share-links */}
                      <Share2
                        size={15}
                        className="hover:text-gray-700 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push("/dashboard/share-links");
                        }}
                      />
                    </div>
                    <MoreHorizontal size={16} className="hover:text-gray-700" />
                  </div>
                </div>
              </div>
            );

            return (
              <div
                key={index}
                onClick={() => {
                  if (event.link) router.push(event.link);
                }}
              >
                {CardContent}
              </div>
            );
          })}
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
