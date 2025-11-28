// app/layout.js
import "../app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import LayoutWrapper from "./layout-wrapper";
import { Toaster } from "sonner";
import Providers from "./i18n-provider"; // ✅ import your i18n provider

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Media Sharing",
  description: "Share and discover AI-powered media content easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="fedcm:enable" content="false" />
      </head>

      <body className={`${inter.className} bg-white text-gray-900`}>
        <Providers>
          {" "}
          {/* ✅ wrap your app */}
          <LayoutWrapper>
            {/* <Navbar /> */}
            {children}
            {/* <Footer /> */}
          </LayoutWrapper>
          <Toaster richColors position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
