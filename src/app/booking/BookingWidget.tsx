"use client";

import { useEffect, useRef, useState } from "react";

const THE_FORK_URL =
  "https://widget.thefork.com/en-GB/b18ec634-03bb-42e9-8012-46c678597004?step=date";

export default function BookingWidget() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const redirected = useRef(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (!iframeLoaded && !redirected.current) {
        redirected.current = true;
        window.location.assign(THE_FORK_URL);
      }
    }, 5000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [iframeLoaded]);

  const redirectToBooking = () => {
    if (!redirected.current) {
      redirected.current = true;
      window.location.assign(THE_FORK_URL);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Book Your Table
            </h1>
            <p className="text-lg text-gray-600">
              Reserve in seconds with our official TheFork booking widget.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-amber-200 shadow-sm overflow-hidden">
            <iframe
              src={THE_FORK_URL}
              title="Book a table at Broadway Kebab"
              className="w-full"
              style={{ minHeight: "780px", border: 0 }}
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setIframeLoaded(true)}
              onError={redirectToBooking}
            />
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            If the widget does not appear, you will be redirected automatically.
          </p>
        </div>
      </div>
    </main>
  );
}
