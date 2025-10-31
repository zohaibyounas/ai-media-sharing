"use client";

import { useState } from "react";
import { Upload, Image } from "lucide-react";

export default function BrandingDetails() {
  const [step, setStep] = useState(1);
  const [logo, setLogo] = useState(null);
  const [watermark, setWatermark] = useState(null);
  const [enableWatermark, setEnableWatermark] = useState(false);
  const [size, setSize] = useState(50);
  const [opacity, setOpacity] = useState(100);
  const [name, setName] = useState("");
  const [brandId, setBrandId] = useState(null);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://api.fotoshareai.com";

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setLogo(URL.createObjectURL(file));
  };

  const handleWatermarkUpload = (e) => {
    const file = e.target.files[0];
    if (file) setWatermark(URL.createObjectURL(file));
  };

  // ✅ Save (Create or Update)
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) return alert("No access token found");

      // If you don't have an upload API, use a placeholder image for now
      const logoUrlToSend = logo?.startsWith("blob:")
        ? "https://placehold.co/200x200?text=Logo"
        : logo;

      const body = {
        name,
        logoUrl: logoUrlToSend,
        watermark: {
          enabled: enableWatermark,
          sizePercent: Number(size),
          opacityPercent: Number(opacity),
        },
      };

      const res = await fetch("https://api.fotoshareai.com/brandings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("API Error:", err);
        alert("Failed to create branding");
        return;
      }

      const data = await res.json();
      console.log("Branding created:", data);
      alert("Branding created successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex justify-center items-start p-8">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-sm border border-gray-200 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Branding Details
          </h2>

          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-[#101828] hover:bg-[#0c121c] text-white px-5 py-2 rounded-md text-sm font-medium shadow-sm disabled:opacity-70"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <button className="bg-[#F2F4F7] text-gray-800 font-medium px-4 py-2 rounded-md text-sm">
            Profile Details
          </button>
        </div>

        {step === 1 ? (
          <>
            {/* Step 1 - Branding Details */}
            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <label
                htmlFor="logo-upload"
                className="border-2 border-dashed border-gray-300 rounded-lg w-64 h-36 flex flex-col items-center justify-center text-center cursor-pointer hover:border-gray-400 transition"
              >
                {logo ? (
                  <img
                    src={logo}
                    alt="Logo Preview"
                    className="h-20 object-contain"
                  />
                ) : (
                  <>
                    <Upload className="w-6 h-6 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 leading-tight">
                      <span className="font-medium">Upload a logo</span>
                      <br />
                      <span className="text-gray-400 text-xs">
                        or just drag and drop
                      </span>
                    </p>
                  </>
                )}
                <input
                  id="logo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Form Section */}
            <form className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Name of Brand<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter brand name"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Website
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Official Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Instagram Link
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Youtube Link
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Facebook Link
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
                />
              </div>

              <div className="md:col-span-1">
                <label className="text-sm text-gray-700 font-medium">
                  About Us
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Domain
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
                />
              </div>
            </form>

            {/* Next Button */}
            <div className="flex justify-end mt-10">
              <button
                onClick={() => setStep(2)}
                type="button"
                className="bg-[#101828] hover:bg-[#0c121c] text-white font-medium px-8 py-2 rounded-md text-sm shadow-sm"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Step 2 - Watermark Settings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Side */}
              <div className="space-y-6">
                <label
                  htmlFor="watermark-upload"
                  className="border-2 border-dashed border-gray-300 rounded-lg w-full h-36 flex flex-col items-center justify-center text-center cursor-pointer hover:border-gray-400 transition"
                >
                  {watermark ? (
                    <img
                      src={watermark}
                      alt="Watermark"
                      className="h-20 object-contain"
                    />
                  ) : (
                    <>
                      <Upload className="w-6 h-6 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Upload Watermark</span>
                        <br />
                        <span className="text-gray-400 text-xs">
                          (File should be less than 5 MB)
                        </span>
                      </p>
                    </>
                  )}
                  <input
                    id="watermark-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleWatermarkUpload}
                    className="hidden"
                  />
                </label>

                <div>
                  <label className="text-sm text-gray-700 font-medium">
                    Image Position
                  </label>
                  <select className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:ring-1 focus:ring-gray-400 focus:outline-none">
                    <option value="">Select</option>
                    <option>Top Left</option>
                    <option>Top Right</option>
                    <option>Bottom Left</option>
                    <option>Bottom Right</option>
                    <option>Center</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700 font-medium">
                    Enable Watermark
                  </label>
                  <button
                    onClick={() => setEnableWatermark(!enableWatermark)}
                    type="button"
                    className={`relative inline-flex h-5 w-10 items-center rounded-full transition ${
                      enableWatermark ? "bg-[#101828]" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        enableWatermark ? "translate-x-5" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div>
                  <label className="text-sm text-gray-700 font-medium">
                    Size (Relation to image)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full accent-[#101828] mt-2"
                  />
                  <p className="text-right text-xs text-gray-600">{size}%</p>
                </div>

                <div>
                  <label className="text-sm text-gray-700 font-medium">
                    Opacity
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={opacity}
                    onChange={(e) => setOpacity(e.target.value)}
                    className="w-full accent-[#101828] mt-2"
                  />
                  <p className="text-right text-xs text-gray-600">{opacity}%</p>
                </div>

                {/* Upload Logo */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Logo
                  </label>

                  <div className="flex items-center gap-6">
                    {/* Logo Preview */}
                    {logo && (
                      <div className="w-24 h-24 border border-gray-200 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
                        <img
                          src={logo}
                          alt="Logo Preview"
                          className="object-contain w-full h-full"
                        />
                      </div>
                    )}

                    {/* Upload Area */}
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        id="logo-upload"
                        className="hidden"
                      />
                      <label
                        htmlFor="logo-upload"
                        className="border-2 border-dashed border-gray-300 rounded-lg w-64 h-36 flex flex-col items-center justify-center text-center cursor-pointer hover:border-gray-400 transition"
                      >
                        <Upload className="w-6 h-6 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600 leading-tight">
                          <span className="font-medium">Upload a logo</span>
                          <br />
                          <span className="text-gray-400 text-xs">
                            or just drag and drop
                          </span>
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 bg-gray-100 flex flex-col items-center justify-center rounded-lg h-[350px]">
                <Image className="w-10 h-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">
                  Preview How Your Watermark Looks
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
