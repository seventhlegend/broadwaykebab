import type { Metadata } from "next";
import BookingWidget from "./BookingWidget";

export const metadata: Metadata = {
  title: "Book a Table - Broadway Kebab",
  description:
    "Reserve your table at Broadway Kebab through our official booking partner.",
  keywords: "book table, reservation, broadway kebab, thefork",
  openGraph: {
    title: "Book a Table - Broadway Kebab",
    description:
      "Reserve your table at Broadway Kebab through our official booking partner.",
  },
};

export default function BookingPage() {
  return <BookingWidget />;
}
