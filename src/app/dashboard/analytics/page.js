"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import {
  LineChart,
  Line,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// ===== Mock Data =====
const lineData = [
  { name: "Jan", current: 300, last: 260 },
  { name: "Feb", current: 520, last: 310 },
  { name: "Mar", current: 200, last: 480 },
  { name: "Apr", current: 600, last: 350 },
  { name: "May", current: 250, last: 520 },
  { name: "Jun", current: 700, last: 400 },
  { name: "Jul", current: 280, last: 610 },
  { name: "Aug", current: 660, last: 320 },
  { name: "Sep", current: 340, last: 540 },
  { name: "Oct", current: 720, last: 430 },
];

const barData = [
  {
    week: "Sept 1–6",
    line1: 120,
    line2: 100,
    line3: 140,
  },
  {
    week: "Sept 13–18",
    line1: 150,
    line2: 130,
    line3: 180,
  },
  {
    week: "Sept 25–30",
    line1: 100,
    line2: 160,
    line3: 120,
  },
];

const COLORS = ["#4592FF", "#AC8EE3", "#FFA3AB"];

const pieData = [
  { name: "Shares", value: 40 },
  { name: "Downloads", value: 35 },
  { name: "Selfie Searches", value: 25 },
];
const geoData = [
  { country: "USA", percent: 19 },
  { country: "Spain", percent: 16.2 },
  { country: "China", percent: 8.9 },
  { country: "Norway", percent: 3.5 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] px-6 py-8">
      <h1 className="text-[22px] font-semibold text-gray-800 mb-6">
        Analytics
      </h1>

      {/* ==== TOP METRIC CARDS ==== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-7">
        {[
          {
            title: "TOTAL EVENTS",
            value: "1,059",
            desc: "+15% compared to last year",
            img: "/Chart.png",
          },
          {
            title: "USER INTERACTIONS",
            value: "3,245",
            desc: "Avg. 405 interactions per month",
            img: "/INTERACTIONS.png",
          },
          {
            title: "TOTAL DOWNLOADS",
            value: "8,720",
            desc: "Top Event: Summer Gala 2025",
            img: "/total.png",
          },
          {
            title: "NEW REGISTRATIONS",
            value: "562",
            desc: "Peak month: September",
            img: "/registration.png",
          },
        ].map((item, i) => (
          <Card
            key={i}
            className="shadow-sm rounded-2xl border border-gray-100 bg-white"
          >
            <CardHeader className="pb-0 flex items-center justify-between">
              {/* Left side title */}
              <CardTitle className="text-xs tracking-wide text-gray-500">
                {item.title}
              </CardTitle>

              {/* Right side image only for TOTAL EVENTS */}
              {item.img && (
                <img
                  src={item.img}
                  alt=""
                  className="h-5 w-auto object-contain translate-x-1"
                />
              )}
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-semibold text-gray-800 mt-2">
                {item.value}
              </p>
              <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ==== MIDDLE SECTION ==== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-7">
        {/* Line Chart */}
        <Card className="lg:col-span-2 rounded-2xl border border-gray-100 shadow-sm">
          <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Left title */}
            <div className="flex items-center gap-2">
              <CardTitle className="text-sm font-semibold text-gray-700">
                TOTAL EVENTS
              </CardTitle>
            </div>

            {/* Right side with buttons + decorative image */}

            <div className="flex items-center gap-2 text-xs text-gray-500">
              {["Today", "Yesterday", "Week", "Month", "Quarter", "Year"].map(
                (label, i) => (
                  <button
                    key={i}
                    className={`px-2 py-1 rounded-md transition ${
                      label === "Year"
                        ? "bg-gray-100 font-medium text-gray-700"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {label}
                  </button>
                )
              )}
            </div>
          </CardHeader>

          {/* Chart content */}
          <CardContent className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={lineData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4592FF" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#4592FF" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#E5E7EB"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E5E7EB",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.04)",
                  }}
                  labelStyle={{ fontWeight: "600", color: "#111827" }}
                  itemStyle={{ fontSize: "13px", color: "#2563EB" }}
                />

                {/* Zig-zag double line chart */}
                <Area
                  type="monotone"
                  dataKey="last"
                  stroke="#4592FF"
                  strokeWidth={2.5}
                  fill="url(#blueGradient)"
                  activeDot={{ r: 4 }}
                />
                <Area
                  type="monotone"
                  dataKey="current"
                  stroke="#4592FF"
                  strokeWidth={2.5}
                  fill="url(#blueGradient)"
                  activeDot={{ r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Average Reach Card */}
        <Card className="bg-[#26395F] text-white flex flex-col justify-center items-center rounded-2xl shadow-sm">
          <p className="text-sm mt-3 mb-2 text-gray-300 uppercase tracking-wide">
            Average Reach of Brand
          </p>
          <div className="relative w-36 h-36 flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-32 h-32">
              <path
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#4E4FD4"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#02C2D9"
                strokeWidth="3"
                strokeDasharray="78,100"
              />
            </svg>
            <span className="absolute text-2xl font-semibold">78%</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">78% Increased this Year</p>
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
            View Details
          </Button>
        </Card>
      </div>

      {/* ==== BOTTOM SECTION ==== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* User Growth */}
        <Card className="rounded-2xl border border-gray-100 shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm text-gray-700">USER GROWTH</CardTitle>
            <p className="text-xs text-gray-400">Last 30 days by week</p>
          </CardHeader>

          <CardContent className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                barGap={6}
              >
                {/* subtle grid */}
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#E5E7EB"
                  vertical={false}
                />
                <XAxis
                  dataKey="week"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ fill: "rgba(0,0,0,0.05)" }}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E5E7EB",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.04)",
                  }}
                />

                {/* three colored bars per week */}
                <Bar
                  dataKey="line1"
                  fill="#89B4C1"
                  radius={[4, 4, 0, 0]}
                  barSize={10}
                />
                <Bar
                  dataKey="line2"
                  fill="#FFD980"
                  radius={[4, 4, 0, 0]}
                  barSize={10}
                />
                <Bar
                  dataKey="line3"
                  fill="#6AABE3"
                  radius={[4, 4, 0, 0]}
                  barSize={10}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* User Engagement */}
        <Card className="rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="text-sm text-gray-700">
              USER ENGAGEMENT
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col items-center justify-center">
            {/* Donut chart with 3 segments */}
            <div className="relative w-[220px] h-[220px] flex items-center justify-center">
              <PieChart width={220} height={220}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>

              {/* Center text */}
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-xl font-semibold text-gray-800">893</span>
                <span className="text-xs text-gray-400 -mt-1">users</span>
              </div>
            </div>

            {/* Legend below chart */}
            <div className="mt-4 w-full flex flex-col gap-2">
              {pieData.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-sm text-gray-600"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[i] }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium text-gray-800">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* User Geographic */}
        <Card className="rounded-2xl border border-gray-100 shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm text-gray-700">
              USER GEOGRAPHIC
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col items-center">
            {/* Map */}
            <div className="w-64 h-auto mb-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                alt="World map"
                className="w-full h-auto opacity-90"
                style={{
                  filter: "drop-shadow(0 0 1px rgba(0,0,0,0.1))",
                  fill: "#A5D2F2",
                }}
              />
            </div>

            {/* Country list with bar indicators */}
            <ul className="w-full max-w-[240px] text-xs text-gray-600 space-y-3">
              {geoData.map((item, i) => (
                <li key={i}>
                  <div className="flex justify-between mb-1">
                    <span>{item.country}</span>
                    <span className="font-medium text-gray-800">
                      {item.percent}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${item.percent}%`,
                        backgroundColor: "#4592FF",
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
