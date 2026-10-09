import "./globals.css";
import type { Viewport } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f7f4ec",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-surface px-4 py-3 text-ink shadow-lg focus:not-sr-only"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
