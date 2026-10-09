import { Clock, MapPin, Phone } from "lucide-react";
import { buttonClass } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { STATIC_CONTENT } from "@/lib/static-data";

export default function ContactSection() {
  const contact = STATIC_CONTENT.contact;
  const encodedMessage = encodeURIComponent(contact.whatsappMessage);

  return (
    <section id="contact" className="bg-paper-muted py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mb-12 max-w-2xl sm:mb-14">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-grill">
            Come say hello
          </p>
          <h2 className="mb-4 font-display text-4xl font-bold text-ink sm:text-5xl">
            {contact.title}
          </h2>
          <p className="text-lg leading-7 text-muted sm:text-xl">
            Experience authentic Turkish hospitality
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Card className="space-y-7 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <MapPin aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-grill" />
              <div>
                <h3 className="mb-1 font-semibold text-ink">Address</h3>
                <p className="leading-6 text-muted">
                  {contact.address.street}
                  <br />
                  {contact.address.city}, {contact.address.state} {contact.address.zip}
                </p>
                <a
                  href={contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex min-h-11 items-center font-semibold text-grill hover:underline hover:underline-offset-4"
                >
                  Get directions <span aria-hidden="true" className="ml-1">→</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-grill" />
              <div>
                <h3 className="mb-1 font-semibold text-ink">Phone & WhatsApp</h3>
                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex min-h-11 items-center text-muted hover:text-grill"
                >
                  {contact.phone}
                </a>
                <br />
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${encodedMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center font-semibold text-grill hover:underline hover:underline-offset-4"
                >
                  Message on WhatsApp <span aria-hidden="true" className="ml-1">→</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-grill" />
              <div className="w-full">
                <h3 className="mb-2 font-semibold text-ink">Hours</h3>
                <dl className="space-y-2 text-muted">
                  {Object.entries(contact.hours).map(([day, hours]) => (
                    <div
                      key={day}
                      className="flex justify-between gap-4 border-b border-paper-muted pb-2 last:border-0"
                    >
                      <dt className="capitalize">{day}</dt>
                      <dd className="text-right tabular-nums">{hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl shadow-[0_4px_18px_rgb(33_29_25_/_8%)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20181.251849438693!2d-0.19420854581599908!3d51.422785083284225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487607aeeef44e01%3A0x5ff17af581ce345!2sBroadway%20BBQ!5e0!3m2!1sen!2suk!4v1750571615233!5m2!1sen!2suk"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Broadway Kebab Location Map"
              />
            </div>
            <Card className="p-6 sm:p-8">
              <h3 className="mb-3 font-display text-2xl font-bold text-ink">
                Reserve Your Table
              </h3>
              <p className="mb-5 leading-7 text-muted">
                Book your table online in seconds, or call us directly if you prefer.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/booking/" className={buttonClass({ size: "lg" })}>
                  Book a Table
                </a>
                <a
                  href="/menu/"
                  className={buttonClass({ variant: "outline", size: "lg" })}
                >
                  View Menu
                </a>
                <a
                  href={`tel:${contact.phone}`}
                  className={buttonClass({ variant: "outline", size: "lg" })}
                >
                  <Phone aria-hidden="true" className="mr-2 h-4 w-4" />
                  Call
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
