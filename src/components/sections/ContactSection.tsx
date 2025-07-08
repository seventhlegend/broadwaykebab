"use client";

import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LoadingSkeleton } from "@/components/common/LoadingSkeleton";

interface ContactInfo {
  title: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone: string;
  whatsapp: string;
  whatsappMessage?: string;
  email: string;
  hours: {
    [key: string]: string;
  };
  mapUrl: string;
}

interface ContactSectionProps {
  contact: ContactInfo | null;
}

export default function ContactSection({ contact }: ContactSectionProps) {
  if (!contact) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <LoadingSkeleton height="h-[700px]" className="bg-white" />
        </div>
      </section>
    );
  }

  // WhatsApp mesajını hazırla
  const whatsappMessage =
    contact.whatsappMessage ||
    "Hello! I would like to make a booking at Broadway Kebab Restaurant. Could you please help me with availability and table reservation? Thank you! 🍽️";
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {contact.title}
            </h2>
            <p className="text-xl text-gray-600">
              Experience authentic Turkish hospitality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-amber-700 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Address
                      </h3>
                      <p className="text-gray-600">
                        {contact.address.street}
                        <br />
                        {contact.address.city}, {contact.address.state}{" "}
                        {contact.address.zip}
                      </p>
                      <a
                        href={contact.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-700 hover:text-amber-800 font-medium mt-2 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-amber-700 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Phone & WhatsApp
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href={`tel:${contact.phone}`}
                          className="hover:text-amber-700"
                        >
                          {contact.phone}
                        </a>
                      </p>
                      <a
                        href={`https://wa.me/${contact.whatsapp}?text=${encodedMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-700 hover:text-amber-800 font-medium mt-1 inline-block"
                      >
                        Message on WhatsApp →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-amber-700 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Hours
                      </h3>
                      <div className="text-gray-600 space-y-1">
                        {Object.entries(contact.hours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between">
                            <span className="capitalize">{day}:</span>
                            <span>{hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20181.251849438693!2d-0.19420854581599908!3d51.422785083284225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487607aeeef44e01%3A0x5ff17af581ce345!2sBroadway%20BBQ!5e0!3m2!1sen!2suk!4v1750571615233!5m2!1sen!2suk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Broadway Kebab Location Map"
                />
              </div>
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Reserve Your Table
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Call us or send a WhatsApp message to reserve your table for
                    an authentic Anatolian dining experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${contact.phone}`} className="flex-1">
                      <Button className="bg-amber-700 hover:bg-amber-800 w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call to Reserve
                      </Button>
                    </a>
                    <Link href="/menu" className="flex-1">
                      <Button
                        variant="outline"
                        className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white w-full"
                      >
                        View Menu
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
