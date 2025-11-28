"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Users,
  Image,
  Briefcase,
  Plus,
  Filter,
  Pencil,
  Trash2,
} from "lucide-react";

const statsData = [
  {
    title: "Total Workspaces",
    value: "1,257",
    change: "+12%",
    changeColor: "text-green-600",
    subtitle: "from last month",
    icon: <Briefcase size={22} className="text-indigo-600" />,
  },
  {
    title: "Active Events",
    value: "3,480",
    change: "+8.5%",
    changeColor: "text-green-600",
    subtitle: "from last month",
    icon: <Calendar size={22} className="text-blue-600" />,
  },
  {
    title: "Total Users",
    value: "25,6k",
    change: "-2.1%",
    changeColor: "text-red-600",
    subtitle: "from last month",
    icon: <Users size={22} className="text-orange-500" />,
  },
  {
    title: "Images Uploaded",
    value: "1.2M",
    change: "+20%",
    changeColor: "text-green-600",
    subtitle: "from last month",
    icon: <Image size={22} className="text-emerald-600" />,
  },
];

const initialWorkspaces = [
  {
    id: 1,
    name: "Acme Corp Wedding Photos",
    owner: { name: "Jacob Jones", avatar: "/images/avatars/jacob.jpg" },
    date: "2025-10-22",
    events: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "InnovateTech Conference",
    owner: { name: "Kristin Watson", avatar: "/images/avatars/kristin.jpg" },
    date: "2025-10-18",
    events: 5,
    status: "Active",
  },
  {
    id: 3,
    name: "Annual Family Reunion",
    owner: { name: "Cody Fisher", avatar: "/images/avatars/cody.jpg" },
    date: "2025-09-30",
    events: 8,
    status: "Pending",
  },
  {
    id: 4,
    name: "Marketing Campaign Q4",
    owner: { name: "Jenny Wilson", avatar: "/images/avatars/jenny.jpg" },
    date: "2025-09-15",
    events: 25,
    status: "Inactive",
  },
];

function StatusBadge({ status }) {
  const base = "px-3 py-1 rounded-full text-sm font-medium inline-block";
  switch (status) {
    case "Active":
      return (
        <span className={`${base} bg-green-100 text-green-700`}>{status}</span>
      );
    case "Pending":
      return (
        <span className={`${base} bg-yellow-100 text-yellow-700`}>
          {status}
        </span>
      );
    case "Inactive":
      return (
        <span className={`${base} bg-red-100 text-red-700`}>{status}</span>
      );
    default:
      return (
        <span className={`${base} bg-gray-100 text-gray-700`}>{status}</span>
      );
  }
}

export default function DashboardPage() {
  const [workspaces] = useState(initialWorkspaces);
  const [query, setQuery] = useState("");

  const filtered = workspaces.filter((w) =>
    w.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-8 bg-[#f9fafb] p-4 md:p-6">
      {/* === Top Stats Cards === */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statsData.map((s) => (
          <div
            key={s.title}
            className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 sm:p-5 flex items-center justify-between hover:shadow-md transition"
          >
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                {s.icon}
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  {s.title}
                </p>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mt-1">
                  {s.value}
                </h3>
                <p className={`text-xs mt-1 ${s.changeColor}`}>
                  {s.change} <span className="text-gray-400">{s.subtitle}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* === Table Section === */}
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100 overflow-x-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 md:mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Workspaces
            </h2>
            <p className="text-sm text-gray-500">
              Showing {filtered.length} of {workspaces.length}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 sm:gap-2 bg-gray-50 hover:bg-gray-100 border-gray-200"
            >
              <Filter size={16} />
              Filter
            </Button>

            <Button
              size="sm"
              className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1 sm:gap-2"
            >
              <Plus size={14} />
              Create Workspace
            </Button>
          </div>
        </div>

        <Separator className="mb-4" />

        {/* Table */}
        <div className="overflow-x-auto">
          <Table className="min-w-[600px] sm:min-w-full">
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold text-gray-700 text-left">
                  WORKSPACE NAME
                </TableHead>
                <TableHead className="font-semibold text-gray-700 text-left">
                  OWNER
                </TableHead>
                <TableHead className="font-semibold text-gray-700 text-left">
                  CREATION DATE
                </TableHead>
                <TableHead className="font-semibold text-gray-700 text-left">
                  EVENTS
                </TableHead>
                <TableHead className="font-semibold text-gray-700 text-left">
                  STATUS
                </TableHead>
                <TableHead className="font-semibold text-gray-700 text-right">
                  ACTIONS
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((ws) => (
                <TableRow key={ws.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-900">
                    {ws.name}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                        <AvatarImage
                          src={ws.owner.avatar}
                          alt={ws.owner.name}
                        />
                        <AvatarFallback>{ws.owner.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-gray-800 text-xs sm:text-sm">
                        {ws.owner.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-700 text-xs sm:text-sm">
                    {ws.date}
                  </TableCell>
                  <TableCell className="text-gray-700 text-xs sm:text-sm">
                    {ws.events}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={ws.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end items-center gap-2 sm:gap-3">
                      <button
                        className="text-indigo-600 hover:text-indigo-800 transition"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800 transition"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 md:mt-6 gap-3 sm:gap-0">
          <p className="text-sm text-gray-500">
            Showing 1-{filtered.length} of {workspaces.length}
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-2">
            <Button variant="outline" size="sm" className="border-gray-200">
              Previous
            </Button>
            <Button size="sm" className="bg-indigo-600 text-white">
              1
            </Button>
            <Button size="sm" variant="outline" className="border-gray-200">
              2
            </Button>
            <Button variant="outline" size="sm" className="border-gray-200">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
