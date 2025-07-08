import { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Broadway Kebab - Authentic Anatolian Cuisine",
  description:
    "Experience the finest Anatolian kebabs and authentic Mediterranean cuisine in the heart of the city.",
  keywords: "Anatolian cuisine, kebab, Mediterranean food, restaurant",
  openGraph: {
    title: "Broadway Kebab - Authentic Anatolian Cuisine",
    description:
      "Experience the finest Anatolian kebabs and authentic Mediterranean cuisine in the heart of the city.",
  },
};

export default function Page() {
  return <HomePage />;
}
