"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import { Bell, Copy, Mail, Eye, Lock, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function CreateEventForm() {
  const router = useRouter();

  const [eventType, setEventType] = useState("Conference");
  const [brandings, setBrandings] = useState([]);
  const [selectedBrandingId, setSelectedBrandingId] = useState("");
  const [previewImage, setPreviewImage] = useState(null); // ✅ Modal Image
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    type: "Conference",
    details: "",
    brandingId: "",
    visibility: {
      public: true,
      enablePin: false,
      guestPin: "",
      fullAccessPin: "",
    },
  });

  // Fetch Brandings
  useEffect(() => {
    const fetchBrandings = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) return;

        const res = await fetch("https://api.fotoshareai.com/brandings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) return;

        const data = await res.json();
        setBrandings(data.items || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBrandings();
  }, []);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleVisibilityChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      visibility: { ...prev.visibility, [key]: value },
    }));
  };

  const handleBrandingSelect = (id) => {
    setSelectedBrandingId(id);
    handleChange("brandingId", id);
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        alert("You are not logged in. Please login first.");
        router.push("/login");
        return;
      }

      const response = await fetch("https://api.fotoshareai.com/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("✅ Event created successfully!");
        router.push("/dashboard/my-events");
      } else {
        const error = await response.json();
        console.error("Error creating event:", error);
        alert("❌ Failed to create event. Check console for details.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("❌ Something went wrong while creating event.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-7xl w-full mx-auto bg-white rounded-xl p-4 sm:p-8 space-y-8"
    >
      <h1 className="text-xl font-semibold text-gray-900 text-center sm:text-left">
        Create Event
      </h1>

      {/* Name, Date, Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Event Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="mt-1 border-gray-300 focus:border-black focus:ring-black w-full"
            required
          />
        </div>

        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => handleChange("date", e.target.value)}
            className="mt-1 border-gray-300 focus:border-black focus:ring-black w-full"
            required
          />
        </div>

        <div>
          <Label htmlFor="type">Type of Event</Label>
          <Select
            onValueChange={(val) => {
              setEventType(val);
              handleChange("type", val);
            }}
            defaultValue={eventType}
          >
            <SelectTrigger className="mt-1 border-gray-300 focus:border-black focus:ring-black w-full">
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
          value={formData.details}
          onChange={(e) => handleChange("details", e.target.value)}
          className="mt-1 border-gray-300 focus:border-black focus:ring-black w-full"
        />
      </div>

      <Separator />

      {/* Branding Section */}
      <div>
        <div className="flex items-center gap-2 mb-2 flex-wrap">
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

        {brandings.length > 0 ? (
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border text-sm text-left text-gray-700">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-4 py-2 font-semibold">Use</th>
                  <th className="px-4 py-2 font-semibold">Name</th>
                  <th className="px-4 py-2 font-semibold">Preview</th>
                </tr>
              </thead>
              <tbody>
                {brandings.map((b) => (
                  <tr key={b.id}>
                    <td className="px-4 py-2">
                      <Checkbox
                        checked={selectedBrandingId === b.id}
                        onCheckedChange={() => handleBrandingSelect(b.id)}
                      />
                    </td>
                    <td className="px-4 py-2">{b.name}</td>
                    <td className="px-4 py-2">
                      {b.imageUrl && (
                        <Image
                          src={b.imageUrl}
                          width={50}
                          height={50}
                          className="cursor-pointer rounded"
                          alt={b.name}
                          onClick={() => setPreviewImage(b.imageUrl)}
                        />
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-2"
                        onClick={() =>
                          b.imageUrl && setPreviewImage(b.imageUrl)
                        }
                      >
                        Preview
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="border rounded-md py-10 text-center text-gray-500 text-sm">
            You don’t have any brandings
            <div className="mt-4 flex justify-center">
              <Button
                variant="outline"
                size="sm"
                className="border-black text-black hover:bg-black hover:text-white flex items-center justify-center gap-2"
              >
                <Image
                  src="/Container.png"
                  width={18}
                  height={18}
                  alt="Container Icon"
                />
                Add Brand
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg">
            <X
              className="absolute top-2 right-2 w-6 h-6 cursor-pointer text-gray-700"
              onClick={() => setPreviewImage(null)}
            />
            <Image
              src={previewImage}
              alt="Branding Preview"
              width={400}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>
      )}

      <Separator />

      {/* Accordion Sections */}
      <Accordion
        type="multiple"
        defaultValue={["notifications", "visibility", "privacy"]}
        className="w-full space-y-3"
      >
        {/* Notifications */}
        <AccordionItem value="notifications">
          <AccordionTrigger className="font-medium flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-black" />
              <span>Notification Settings</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 flex items-start gap-3 rounded-md p-3 border">
                <FaWhatsapp className="w-6 h-6 text-black mt-1" />
                <div className="flex flex-col">
                  <Label className="font-medium">WhatsApp</Label>
                  <p className="text-xs text-gray-500 mt-1">
                    Guests will receive WhatsApp alerts when event is published.
                  </p>
                  <div className="mt-3">
                    <Switch />
                  </div>
                </div>
              </div>

              <div className="flex-1 flex items-start gap-3 rounded-md p-3 border">
                <Mail className="w-6 h-6 text-black mt-1" />
                <div className="flex flex-col">
                  <Label className="font-medium">Email</Label>
                  <p className="text-xs text-gray-500 mt-1">
                    Guests will receive email alerts when event is published.
                  </p>
                  <div className="mt-3">
                    <Switch />
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Visibility & Privacy */}
        <AccordionItem value="visibility">
          <AccordionTrigger className="font-medium flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-black" />
              <span>Event Visibility</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col sm:flex-row gap-6 mt-2">
              <div className="flex-1 flex items-start justify-between rounded-md p-3 border">
                <div className="flex items-start gap-3">
                  <Eye className="w-4 h-4 text-black mt-1" />
                  <div>
                    <Label className="font-medium">Public</Label>
                  </div>
                </div>
                <Switch
                  checked={formData.visibility.public}
                  onCheckedChange={(val) =>
                    handleVisibilityChange("public", val)
                  }
                />
              </div>

              <div className="flex-1 flex items-start justify-between rounded-md p-3 border">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-black mt-1" />
                  <div>
                    <Label className="font-medium">Enable PIN</Label>
                  </div>
                </div>
                <Switch
                  checked={formData.visibility.enablePin}
                  onCheckedChange={(val) =>
                    handleVisibilityChange("enablePin", val)
                  }
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="privacy">
          <AccordionTrigger className="font-medium flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-black" />
              <span>Privacy</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label>Guest access PIN</Label>
                <input
                  type="text"
                  placeholder="4593"
                  value={formData.visibility.guestPin}
                  onChange={(e) =>
                    handleVisibilityChange("guestPin", e.target.value)
                  }
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <Label>Full access PIN</Label>
                <input
                  type="text"
                  placeholder="3553"
                  value={formData.visibility.fullAccessPin}
                  onChange={(e) =>
                    handleVisibilityChange("fullAccessPin", e.target.value)
                  }
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Submit */}
      <div className="flex justify-center sm:justify-end pt-6">
        <Button
          type="submit"
          className="bg-[#101828] hover:bg-[#0c1420] text-white px-8 py-2 rounded-lg w-full sm:w-auto"
        >
          Create Event
        </Button>
      </div>
    </form>
  );
}
