import "@/app/globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Critical image preloading for LCP optimization */}
        <link
          rel="preload"
          as="image"
          href="/images/background-1.avif"
          type="image/avif"
          fetchPriority="high"
        />
        {/* DNS prefetch for external domains (if any) */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Bfcache optimization meta tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=0, must-revalidate"
        />
      </head>
      <body className="bg-white text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
