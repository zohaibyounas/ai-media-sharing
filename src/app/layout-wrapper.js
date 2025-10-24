"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Hide Navbar & Footer on these routes
  const hideLayout =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/forgot-password";

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
