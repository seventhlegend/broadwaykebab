import { Instagram } from "lucide-react";
import { STATIC_CONTENT } from "@/lib/static-data";
import BrandLogo from "@/components/common/BrandLogo";

export default function Footer() {
  const { footer, contact } = STATIC_CONTENT;

  return (
    <footer className="bg-grill-deep text-white">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_0.8fr] md:py-16">
        <div>
          <a href="/" aria-label="Broadway Kebab home" className="inline-flex">
            <BrandLogo className="h-12 w-[216px]" inverted />
          </a>
          <p className="mt-4 max-w-sm leading-7 text-white/75">
            {footer.description}
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-xl font-bold">Find Us</h2>
          <address className="not-italic leading-7 text-white/75">
            {contact.address.street}
            <br />
            {contact.address.city}, {contact.address.state} {contact.address.zip}
            <br />
            {contact.address.country}
          </address>
          <a
            href={contact.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-11 items-center font-semibold text-white underline decoration-white/50 underline-offset-4 hover:decoration-white"
          >
            Get directions
          </a>
        </div>

        <div>
          <h2 className="mb-4 font-display text-xl font-bold">Say Hello</h2>
          <div className="flex flex-col items-start gap-2 text-white/75">
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex min-h-11 items-center hover:text-white"
            >
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex min-h-11 items-center hover:text-white"
            >
              {contact.email}
            </a>
            <a
              href="https://www.instagram.com/broadway.bbq"
              aria-label="Broadway Kebab on Instagram"
              className="mt-2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/35 hover:bg-white/10"
            >
              <Instagram aria-hidden="true" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 px-5 py-5 text-center text-sm text-white/70">
        © {new Date().getFullYear()} {footer.title}. All rights reserved.
      </div>
    </footer>
  );
}
