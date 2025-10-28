"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Copy, QrCode } from "lucide-react";

export default function ShareLinksPage() {
  const [guestPin, setGuestPin] = useState("9522");
  const [photoPin, setPhotoPin] = useState("9522");
  const [fullPin, setFullPin] = useState("9522");

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-800">
            Walima Ceremony / Share Links
          </h1>
          <Button
            variant="outline"
            className="text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Resend Notification
          </Button>
        </div>

        {/* Guest Access */}
        <AccessCard
          title="Guest Access"
          description="People with this link can Only View Client Photos"
          link="https://shotform.studio/gallery/154208"
          pin={guestPin}
          onPinChange={setGuestPin}
        />

        {/* Photo Selection Full Access */}
        <AccessCard
          title="Photo Selection Full Access"
          description="People with this link can View & Select Photos and Photos Selection mode is on."
          link="https://shotform.studio/gallery/154208"
          pin={photoPin}
          onPinChange={setPhotoPin}
          hasManageCollections
          showMaxPhotos
        />

        {/* Full Access */}
        <AccessCard
          title="Full Access"
          description="People with this link can View and Allow Events Photos"
          link="https://shotform.studio/gallery/154208"
          pin={fullPin}
          onPinChange={setFullPin}
        />
      </div>
    </div>
  );
}

function AccessCard({
  title,
  description,
  link,
  pin,
  onPinChange,
  hasManageCollections = false,
  showMaxPhotos = false,
}) {
  const [noPin, setNoPin] = useState(false);

  return (
    <Card className="border border-gray-200 shadow-sm rounded-xl">
      <CardContent className="p-5 space-y-5">
        {/* Title + Description */}
        <div>
          <h2 className="font-medium text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>

        {/* Link Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <Input
            placeholder={link}
            className="flex-1 bg-gray-50 text-gray-700 placeholder:text-gray-400"
          />
        </div>

        {/* ✅ Buttons After Input */}
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            className="bg-[#33D478] hover:bg-[#2fb668] text-white font-medium"
          >
            <Copy className="w-4 h-4 mr-1" /> Copy Link
          </Button>
          <Button
            size="sm"
            className="bg-[#FDBF36] hover:bg-[#e3a92f] text-white font-medium"
          >
            <QrCode className="w-4 h-4 mr-1" /> View QR Code
          </Button>

          {hasManageCollections && (
            <Button
              size="sm"
              variant="secondary"
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium"
            >
              Manage Collections
            </Button>
          )}
        </div>

        {/* Optional Maximum Photos */}
        {showMaxPhotos && (
          <div>
            <Label className="text-sm text-gray-600">
              Maximum Photos per Album
            </Label>
            <Input
              type="number"
              placeholder="50"
              className="mt-1 bg-gray-50 text-gray-700 w-40"
            />
          </div>
        )}

        {/* PIN Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-3">
            <Label className="text-sm text-gray-600">PIN</Label>
            <Input
              type="text"
              value={pin}
              onChange={(e) => onPinChange(e.target.value)}
              className="w-24 bg-gray-50 text-gray-700"
            />
          </div>

          <div className="flex items-center gap-2">
            <Switch checked={noPin} onCheckedChange={setNoPin} />
            <span className="text-sm text-gray-600">Do not Ask PIN</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
