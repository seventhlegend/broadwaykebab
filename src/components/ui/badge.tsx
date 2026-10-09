import { cn } from "@/lib/utils";

export const Badge = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      "inline-flex min-h-7 items-center rounded-full border border-transparent bg-grill/10 px-3 py-1 text-xs font-semibold text-grill-deep",
      className,
    )}
    {...props}
  >
    {children}
  </span>
);
