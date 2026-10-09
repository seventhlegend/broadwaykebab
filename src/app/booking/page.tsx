import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Table - Broadway Kebab",
  description:
    "Reserve your table at Broadway Kebab through our official booking partner.",
};

const bookingUrl =
  "https://widget.thefork.com/en-GB/b18ec634-03bb-42e9-8012-46c678597004?step=date";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Book Your Table
          </h1>
          <p className="text-lg text-gray-600">
            Reserve with our official TheFork booking widget.
          </p>
        </div>
        <iframe
          src={bookingUrl}
          title="Book a table at Broadway Kebab"
          className="min-h-[780px] w-full rounded-xl border border-amber-200 bg-white"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <p className="mt-4 text-center text-sm text-gray-600">
          If the widget does not appear,{" "}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 underline"
          >
            open the booking page
          </a>
          .
        </p>
      </div>
    </main>
  );
}
