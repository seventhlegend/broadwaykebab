"use client";

import FloatingButtons from "./FloatingButtons";

interface ClientFloatingButtonsProps {
  phone: string;
  whatsapp: string;
  whatsappMessage?: string;
}

export default function ClientFloatingButtons({
  phone,
  whatsapp,
  whatsappMessage,
}: ClientFloatingButtonsProps) {
  return (
    <FloatingButtons
      phone={phone}
      whatsapp={whatsapp}
      whatsappMessage={whatsappMessage}
    />
  );
}
