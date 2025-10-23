import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Workflow() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8"
      style={{
        background: "linear-gradient(180deg, #E2E2FF 188.98%, #FFFFFF 213.29%)",
      }}
    >
      <Card className="w-full max-w-6xl lg:max-w-[87%] mx-auto shadow-2xl border-0">
        <CardContent className="p-8 md:p-12">
          <div className="text-center space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-sm md:text-sm font-bold text-gray-900 tracking-tight">
                SMARTER PHOTO MANAGEMENT
              </h1>
              <p className="text-xl md:text-4xl text-[#101828] font-medium">
                Ready to Transform Your Photo Workflow?
              </p>
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Join photographers and event organizers worldwide who save time,
                stay organized, and
                <span className="block font-semibold text-gray-800">
                  deliver a premium client experience with Photomo
                </span>
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-4 pt-4">
              <Button
                className="px-6 py-6 text-md  rounded-lg"
                style={{ backgroundColor: "#101828" }}
              >
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-6 h-6 rotate-[315deg] text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
                Start Free Trial
              </Button>
              <p className="text-gray-500 text-sm">No credit card required</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
