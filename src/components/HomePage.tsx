import { HeroSection } from "@/components/sections/HeroSection";
// import ChefPicksSection from "@/components/sections/ChefPicksSection";
import AboutSection from "@/components/sections/AboutSection";
import OffersSection from "@/components/sections/OffersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingButtons from "@/components/common/FloatingButtons";
import {
  STATIC_CONTENT,
  STATIC_MENU,
  STATIC_TESTIMONIALS,
} from "@/lib/static-data";

export default function HomePage() {
  // Extract featured items from static menu data
  const featuredItems = (STATIC_MENU.categories as unknown as any[]).flatMap(
    (category: any) => category.items.filter((item: any) => item.featured),
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection hero={STATIC_CONTENT.hero} />

      {/* Chef's Picks */}
      {/* <ChefPicksSection featuredItems={featuredItems} /> */}

      {/* About Section */}
      <AboutSection about={STATIC_CONTENT.about} />

      {/* Weekly Offers Section */}
      <OffersSection />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={STATIC_TESTIMONIALS} />

      {/* Contact Section */}
      <ContactSection contact={STATIC_CONTENT.contact} />

      {/* Sticky Call & WhatsApp buttons */}
      <FloatingButtons
        phone={STATIC_CONTENT.contact.phone}
        whatsapp={STATIC_CONTENT.contact.whatsapp}
        whatsappMessage={STATIC_CONTENT.contact.whatsappMessage}
      />
    </div>
  );
}
