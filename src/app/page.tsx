import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import OffersSection from "@/components/sections/OffersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingButtons from "@/components/common/FloatingButtons";

export const metadata: Metadata = {
  title: "Broadway Kebab - Authentic Anatolian Cuisine",
  description:
    "Authentic Anatolian kebabs and Mediterranean cuisine in Tooting, London.",
};

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <OffersSection />
      <TestimonialsSection />
      <ContactSection />
      <FloatingButtons />
    </main>
  );
}
