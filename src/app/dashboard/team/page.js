"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Download, MoreVertical, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState("registered");
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const members = [
    {
      name: "Scarlett Johansson",
      email: "scarlettjohansson@gmail.com",
      phone: "+1245890376",
      events: 158,
      access: "Guest Access",
      permissions: "CONSUMIDORA",
    },
    {
      name: "Leonardo DiCaprio",
      email: "leonardodicaprio@gmail.com",
      phone: "+1245890376",
      events: 457,
      access: "Full Access",
      permissions: "Usuário Redtie",
    },
    {
      name: "Patrick Bateman",
      email: "patrickbateman@gmail.com",
      phone: "+1245890376",
      events: 89,
      access: "Full Access",
      permissions: "CONSUMIDOR",
    },
    {
      name: "Tobey Maguire",
      email: "tobeymaguire@gmail.com",
      phone: "+1245890376",
      events: 34,
      access: "Guest Access",
      permissions: "Restaurante",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-6 relative">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 space-y-6 border border-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Team Members</h1>
          <Button
            className="bg-[#101828] hover:bg-[#0c121c] text-white rounded-lg flex items-center gap-2"
            onClick={() => setShowModal(true)}
          >
            <Plus className="w-4 h-4" />
            Invite New Member
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-200">
          <button
            className={`pb-2 text-sm font-medium ${
              activeTab === "registered"
                ? "text-[#101828] border-b-2 border-[#101828]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("registered")}
          >
            Registered Team Members
          </button>
          <button
            className={`pb-2 text-sm font-medium ${
              activeTab === "invited"
                ? "text-[#101828] border-b-2 border-[#101828]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("invited")}
          >
            Invited Team Members
          </button>
        </div>

        {/* Search + Download */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-1/3">
            <Input
              placeholder="Search"
              className="pl-10 bg-gray-50 text-sm border-gray-300"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 absolute left-3 top-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>

          <Button
            variant="outline"
            className="flex items-center gap-2 text-sm border-gray-300"
          >
            <Download className="w-4 h-4" /> Download Sheet
          </Button>
        </div>

        {/* Table Section */}
        {activeTab === "registered" ? (
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow className="h-14">
                  <TableHead className="w-12 text-gray-600 text-center">
                    <input type="checkbox" className="accent-[#101828]" />
                  </TableHead>
                  <TableHead className="text-gray-600 text-center">
                    NAME
                  </TableHead>
                  <TableHead className="text-gray-600 text-center">
                    E-MAIL
                  </TableHead>
                  <TableHead className="text-gray-600 text-center">
                    PHONE NO.
                  </TableHead>
                  <TableHead className="text-gray-600 text-center">
                    NO. OF EVENTS
                  </TableHead>
                  <TableHead className="text-gray-600 text-center">
                    ACCESS RIGHTS
                  </TableHead>
                  <TableHead className="text-gray-600 text-center">
                    PERMISSIONS
                  </TableHead>
                  <TableHead className="text-gray-600 text-center">
                    ACTIONS
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member, idx) => (
                  <TableRow key={idx} className="h-16 hover:bg-gray-50">
                    <TableCell className="text-center">
                      <input type="checkbox" className="accent-[#101828]" />
                    </TableCell>
                    <TableCell className="text-gray-800 font-medium text-center">
                      {member.name}
                    </TableCell>
                    <TableCell className="text-blue-600 underline text-center">
                      {member.email}
                    </TableCell>
                    <TableCell className="text-gray-700 text-center">
                      {member.phone}
                    </TableCell>
                    <TableCell className="text-gray-700 text-center">
                      {member.events}
                    </TableCell>
                    <TableCell className="text-gray-700 text-center">
                      {member.access}
                    </TableCell>
                    <TableCell className="text-gray-700 text-center">
                      {member.permissions}
                    </TableCell>
                    <TableCell className="text-center">
                      <MoreVertical className="text-gray-500 cursor-pointer inline-block" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Pagination */}
            <div className="flex justify-end items-center p-4 gap-3 text-sm text-gray-600">
              <Button
                variant="outline"
                className="px-3 py-1 text-sm border-gray-300"
              >
                Previous
              </Button>
              <span className="px-2 py-1 bg-gray-200 rounded">1</span>
              <Button
                variant="outline"
                className="px-3 py-1 text-sm border-gray-300"
              >
                Next
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 py-16 border border-dashed border-gray-300 rounded-lg">
            No invited team members yet.
          </div>
        )}
      </div>

      {/* === Invite Member Modal === */}
      {showModal && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => setShowModal(false)}
          ></div>

          {/* Modal Box */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white w-[460px] rounded-xl shadow-xl p-6 relative border border-gray-200">
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-900 mb-5">
                Invite Member
              </h2>

              {/* Email Field and Invite Button */}
              <div className="flex items-center gap-2 mb-6">
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <button className="bg-[#101828] hover:bg-[#0c121c] text-white rounded-md px-5 py-2 text-sm font-medium">
                  Invite
                </button>
              </div>

              {/* Access Right */}
              <div className="flex justify-between items-center text-sm text-gray-700">
                <span>Access Right</span>
                <div className="flex items-center gap-1 font-medium cursor-pointer">
                  <span>Full Access</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
