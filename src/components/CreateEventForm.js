"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Bell, Copy, Mail, Eye, Lock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function CreateEventForm() {
  const [eventType, setEventType] = useState("Conference");

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-xl p-8 space-y-8">
      {/* Heading */}
      <h1 className="text-xl font-semibold text-gray-900">Create Event</h1>

      {/* Name, Date, Type */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Event Name"
            className="mt-1 border-gray-300 focus:border-black focus:ring-black"
          />
        </div>

        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            type="date"
            id="date"
            className="mt-1 border-gray-300 focus:border-black focus:ring-black"
          />
        </div>

        <div>
          <Label htmlFor="type">Type of Event</Label>
          <Select onValueChange={setEventType} defaultValue={eventType}>
            <SelectTrigger className="mt-1 border-gray-300 focus:border-black focus:ring-black">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Conference">Conference</SelectItem>
              <SelectItem value="Seminar">Seminar</SelectItem>
              <SelectItem value="Workshop">Workshop</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Details */}
      <div>
        <Label htmlFor="details">Details</Label>
        <Textarea
          id="details"
          placeholder="Event Details (Optional)"
          className="mt-1 border-gray-300 focus:border-black focus:ring-black"
        />
      </div>

      {/* Auto Delete After */}
      <div>
        <Label htmlFor="autodelete">Auto Delete After</Label>
        <Input
          id="autodelete"
          type="date"
          className="mt-1 border-gray-300 focus:border-black w-1/5 focus:ring-black"
        />
      </div>

      <Separator />

      {/* Branding Section */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Checkbox
            id="branding"
            className="data-[state=checked]:bg-black data-[state=checked]:border-black"
          />
          <Label htmlFor="branding" className="font-medium">
            Add Branding to the Event
          </Label>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Your brand will be visible on client gallery
        </p>

        {/* ✅ Table Section (added after text) */}
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm text-left text-gray-700">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-4 py-2 font-semibold">Use</th>
                <th className="px-4 py-2 font-semibold">Name</th>
                <th className="px-4 py-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Example empty row (you can replace later with dynamic content) */}
              <tr>
                <td className="px-4 py-2 text-gray-500 text-sm">—</td>
                <td className="px-4 py-2 text-gray-500 text-sm">—</td>
                <td className="px-4 py-2 text-gray-500 text-sm">—</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Branding placeholder box */}
        <div className="border rounded-md py-10 text-center text-gray-500 text-sm">
          You don’t have any brandings
          <div className="mt-4 flex justify-center">
            {/* ✅ Centered Button */}
            <Button
              variant="outline"
              size="sm"
              className="border-black text-black hover:bg-black hover:text-white flex items-center py-5 justify-center gap-2"
            >
              <Image
                src="/Container.png"
                width={16}
                height={16}
                alt="Container Icon"
                className="w-4 h-4 object-cover "
              />
              Add Brand
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      {/* Accordion Sections */}
      <Accordion
        type="multiple"
        defaultValue={["sponsor", "notifications", "visibility", "privacy"]}
        className="w-full space-y-3"
      >
        {/* Accordion Item Template */}
        {[
          {
            value: "sponsor",
            icon: (
              <Checkbox
                id="sponsoredFrame"
                className="data-[state=checked]:bg-black data-[state=checked]:border-black"
              />
            ),
            label: (
              <Label
                htmlFor="sponsoredFrame"
                className="font-medium lg:mr-[918px]"
              >
                Add Sponsored Frame to the Event
              </Label>
            ),
            content: (
              <p className="text-sm text-gray-500">
                Mark this special event with custom frames on the images,
                increasing sponsors’ visibility and reach.
              </p>
            ),
          },
          {
            value: "notifications",
            icon: <Bell className="w-5 h-5 text-black" />,
            label: (
              <span className="lg:mr-[1010px]">Notification Settings</span>
            ),
            content: (
              <>
                <div className="flex items-center gap-2 mb-5 mt-2">
                  <p className="text-sm text-gray-700">
                    How your clients should get notified about their photos
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* WhatsApp */}
                  <div className="flex-1 flex items-center justify-between rounded-md p-3">
                    <div className="flex items-start gap-3">
                      <FaWhatsapp className="w-6 h-6 text-black mt-1" />
                      <div>
                        <Label className="font-medium">WhatsApp</Label>
                        <p className="text-xs text-gray-500 mb-1 mt-1">
                          Make sure you have enough credits to send WhatsApp
                          notifications.
                        </p>
                        <p className="text-xs text-gray-500">
                          Guests will receive WhatsApp alerts when event is
                          published.
                        </p>
                        <div className="mt-5">
                          <Switch />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex-1 flex items-center justify-between rounded-md p-3 mb-10">
                    <div className="flex items-start gap-3">
                      <Mail className="w-6 h-6 text-black mt-1" />
                      <div>
                        <Label className="font-medium">Email</Label>
                        <p className="text-xs text-gray-500">
                          Guests will receive email alerts when event is
                          published.
                        </p>
                        <div className="self-start mt-3">
                          <Switch />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ),
          },
          {
            value: "visibility",
            icon: <Eye className="w-5 h-5 text-black" />,
            label: <span className="lg:mr-[1050px]">Event Visibility</span>,
            content: (
              <div className="flex flex-col sm:flex-row gap-6 mt-2">
                {/* Public */}
                <div className="flex-1 flex items-start justify-between rounded-md p-3">
                  <div className="flex items-start gap-3">
                    <Eye className="w-4 h-4 text-black mt-1" />
                    <div>
                      <Label className="font-medium">Public</Label>
                      <p className="text-xs text-gray-500">
                        Public Events will be visible under your public page.
                      </p>
                    </div>
                  </div>
                  <div className="self-start mt-1">
                    <Switch />
                  </div>
                </div>

                {/* Enable PIN */}
                <div className="flex-1 flex items-start justify-between rounded-md p-3">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-black mt-1" />
                    <div>
                      <Label className="font-medium">Enable PIN</Label>
                      <p className="text-xs text-gray-500">
                        Secure access using a PIN. Access level will be decided
                        by the PIN.
                      </p>
                    </div>
                  </div>
                  <div className="self-start mt-1">
                    <Switch />
                  </div>
                </div>
              </div>
            ),
          },
          {
            value: "privacy",
            icon: <Lock className="w-5 h-5 text-black" />,
            label: <span className="lg:mr-[1100px]">Privacy</span>,
            content: (
              <>
                <div className="flex items-center gap-2 mb-5 mt-2">
                  <p className="text-sm text-gray-700">
                    How your clients should get notified about their photos
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Guest access PIN */}
                  <div>
                    <Label className="font-semibold">Guest access PIN</Label>
                    <div className="flex mt-1 rounded-md overflow-hidden border ">
                      <input
                        type="text"
                        placeholder="4593"
                        className="flex-1 px-3 py-2 text-gray-800 outline-none"
                      />
                      <div className="flex items-center justify-center w-10 border-l border-[#139B65] bg-white rounded-r-md">
                        <Copy className="w-4 h-4 text-[#139B65] cursor-pointer" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      * Please provide 4 digit PIN
                    </p>
                  </div>

                  {/* Full access PIN */}
                  <div>
                    <Label className="font-semibold">Full access PIN</Label>
                    <div className="flex mt-1 rounded-md overflow-hidden border ">
                      <input
                        type="text"
                        placeholder="3553"
                        className="flex-1 px-3 py-2 text-gray-800 outline-none"
                      />
                      <div className="flex items-center justify-center w-10 border-l border-[#139B65] bg-white rounded-r-md">
                        <Copy className="w-4 h-4 text-[#139B65] cursor-pointer" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      * All images can be accessed.
                    </p>
                  </div>
                </div>
              </>
            ),
          },
        ].map(({ value, icon, label, content }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="font-medium flex items-center justify-between">
              <div className="flex items-center gap-2">
                {icon}
                {label}
              </div>
            </AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Submit Button */}
      <div className="flex justify-end pt-6">
        <Button className="bg-[#101828] hover:bg-[#0c1420] text-white px-6">
          Create Event
        </Button>
      </div>
    </div>
  );
}
