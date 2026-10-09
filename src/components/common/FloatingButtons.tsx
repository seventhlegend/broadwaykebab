import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import { STATIC_CONTENT } from "@/lib/static-data";

const actionClass =
  "flex h-14 w-14 items-center justify-center rounded-full shadow-[0_8px_24px_rgb(33_29_25_/_22%)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-grill";

export default function FloatingButtons() {
  const { phone, whatsapp, whatsappMessage } = STATIC_CONTENT.contact;
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href="/booking/"
        className={`${actionClass} bg-grill text-white hover:bg-grill-deep`}
        aria-label="Book a table"
      >
        <CalendarDays aria-hidden="true" className="h-6 w-6" />
      </a>
      <a
        href={`tel:${phone}`}
        className={`${actionClass} bg-spice text-ink hover:bg-[#b27a32]`}
        aria-label="Call us"
      >
        <Phone aria-hidden="true" className="h-6 w-6" />
      </a>
      <a
        href={`https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${actionClass} bg-[#075E54] text-white hover:bg-[#064b44]`}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle aria-hidden="true" className="h-6 w-6" />
      </a>
    </div>
  );
}
