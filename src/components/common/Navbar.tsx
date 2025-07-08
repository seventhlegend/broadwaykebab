"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { STATIC_CONTENT } from "@/lib/static-data";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 bg-white backdrop-blur-sm z-50 border-b border-amber-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 bg-clip-text text-transparent hover:from-amber-800 hover:via-orange-700 hover:to-red-700 transition-all duration-300 drop-shadow-sm">
              Broadway Kebab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {STATIC_CONTENT.navbar.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href
                    ? "text-amber-700 font-medium"
                    : "text-gray-700 hover:text-amber-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={STATIC_CONTENT.navbar.callButton.href}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-amber-700 text-white hover:bg-amber-800 h-10 px-4 py-2"
            >
              <Phone className="w-4 h-4 mr-2" />
              {STATIC_CONTENT.navbar.callButton.text}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-700 hover:text-amber-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 bg-clip-text text-transparent drop-shadow-sm">
                Broadway Kebab
              </span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 text-gray-700 hover:text-amber-700 transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            {STATIC_CONTENT.navbar.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`block text-lg transition-colors ${
                  pathname === link.href
                    ? "text-amber-700 font-medium"
                    : "text-gray-700 hover:text-amber-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-200">
              <a
                href={STATIC_CONTENT.navbar.callButton.href}
                onClick={closeMobileMenu}
                className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-amber-700 text-white hover:bg-amber-800 h-10 px-4 py-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                {STATIC_CONTENT.navbar.callButton.text}
              </a>
              <p className="text-sm text-gray-500 text-center mt-2">
                {STATIC_CONTENT.navbar.callButton.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
