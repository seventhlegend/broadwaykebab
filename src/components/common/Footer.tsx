"use client";

import { STATIC_CONTENT } from "@/lib/static-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">
              {STATIC_CONTENT.footer.title}
            </h2>
            <p className="text-gray-400 mb-4">
              {STATIC_CONTENT.footer.description}
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="text-sm leading-relaxed">
                  {STATIC_CONTENT.contact.address.street}
                  <br />
                  {STATIC_CONTENT.contact.address.city},{" "}
                  {STATIC_CONTENT.contact.address.state}{" "}
                  {STATIC_CONTENT.contact.address.zip}
                  <br />
                  {STATIC_CONTENT.contact.address.country}
                </p>
              </div>
              <div>
                <a
                  href={`tel:${STATIC_CONTENT.contact.phone}`}
                  className="hover:text-white transition-colors text-sm"
                >
                  {STATIC_CONTENT.contact.phone}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${STATIC_CONTENT.contact.email}`}
                  className="hover:text-white transition-colors text-sm"
                >
                  {STATIC_CONTENT.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a
                href="https://www.instagram.com/broadway.bbq"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-6">
              {STATIC_CONTENT.footer.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="text-sm">
            © {currentYear} {STATIC_CONTENT.footer.title}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
