import "@/app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import LayoutWrapper from "./layout-wrapper";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Media Sharing",
  description: "Share and discover AI-powered media content easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Disable FedCM to fix Google Sign-In error */}
        <meta name="fedcm:enable" content="false" />
      </head>

      <body className={`${inter.className} bg-white text-gray-900`}>
        <LayoutWrapper>{children}</LayoutWrapper>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
