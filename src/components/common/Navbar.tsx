import { CalendarDays, Menu, X } from "lucide-react";
import { STATIC_CONTENT } from "@/lib/static-data";
import { buttonClass } from "@/components/ui/button";

export default function Navbar() {
  const { links, callButton } = STATIC_CONTENT.navbar;
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b border-amber-200 bg-white shadow-sm"
    >
      <div className="container relative mx-auto flex items-center justify-between px-4 py-4">
        <a
          href="/"
          className="text-3xl font-extrabold tracking-tight text-amber-700"
        >
          Broadway Kebab
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-amber-700"
            >
              {link.name}
            </a>
          ))}
          <a href={callButton.href} className={buttonClass()}>
            <CalendarDays className="mr-2 h-4 w-4" />
            {callButton.text}
          </a>
        </div>
        <details className="group md:hidden">
          <summary
            aria-label="Mobile navigation"
            className="rounded p-2 text-gray-700"
          >
            <Menu className="h-6 w-6 group-open:hidden" />
            <X className="hidden h-6 w-6 group-open:block" />
          </summary>
          <div className="absolute left-0 right-0 top-full space-y-4 border-b border-amber-200 bg-white p-6 shadow-lg">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-lg text-gray-700 hover:text-amber-700"
              >
                {link.name}
              </a>
            ))}
            <a href={callButton.href} className={buttonClass()}>
              <CalendarDays className="mr-2 h-4 w-4" />
              {callButton.text}
            </a>
            <p className="text-sm text-gray-500">{callButton.phone}</p>
          </div>
        </details>
      </div>
    </nav>
  );
}
