import { CalendarDays, Menu, X } from "lucide-react";
import { STATIC_CONTENT } from "@/lib/static-data";
import { buttonClass } from "@/components/ui/button";
import BrandLogo from "@/components/common/BrandLogo";

export default function Navbar() {
  const { links, callButton } = STATIC_CONTENT.navbar;
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b border-paper-muted bg-surface shadow-[0_3px_18px_rgb(33_29_25_/_6%)]"
    >
      <div className="relative mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 sm:px-6">
        <a href="/" aria-label="Broadway Kebab home" className="inline-flex items-center">
          <BrandLogo className="h-11 w-[198px] sm:h-[54px] sm:w-[244px]" />
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded py-2 text-sm font-semibold text-ink transition-colors hover:text-grill"
            >
              {link.name}
            </a>
          ))}
          <a href={callButton.href} className={buttonClass()}>
            <CalendarDays className="mr-2 h-4 w-4" />
            {callButton.text}
          </a>
        </div>
        <details className="group relative md:hidden">
          <summary
            aria-label="Toggle navigation menu"
            className="flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg border border-paper-muted px-3 text-ink hover:bg-paper-muted"
          >
            <Menu aria-hidden="true" className="h-5 w-5 group-open:hidden" />
            <X aria-hidden="true" className="hidden h-5 w-5 group-open:block" />
            <span className="text-sm font-semibold">Menu</span>
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 min-w-64 space-y-2 rounded-xl border border-paper-muted bg-surface p-4 shadow-xl">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-ink hover:bg-paper-muted hover:text-grill"
              >
                {link.name}
              </a>
            ))}
            <a href={callButton.href} className={buttonClass()}>
              <CalendarDays className="mr-2 h-4 w-4" />
              {callButton.text}
            </a>
            <p className="px-3 pt-2 text-sm text-muted">{callButton.phone}</p>
          </div>
        </details>
      </div>
    </nav>
  );
}
