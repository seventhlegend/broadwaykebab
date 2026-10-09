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
    <main id="main-content" className="min-h-[80svh] bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-grill">
            Join us at Broadway
          </p>
          <h1 className="mb-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            Book Your Table
          </h1>
          <p className="text-lg text-muted">
            Reserve with our official TheFork booking widget.
          </p>
        </div>
        <iframe
          src={bookingUrl}
          title="Book a table at Broadway Kebab"
          className="min-h-[780px] w-full rounded-xl border border-paper-muted bg-surface shadow-[0_8px_28px_rgb(33_29_25_/_8%)]"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <p className="mt-4 text-sm text-muted">
          If the widget does not appear,{" "}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-grill underline underline-offset-4"
          >
            open the booking page
          </a>
          .
        </p>
      </div>
    </main>
  );
}
