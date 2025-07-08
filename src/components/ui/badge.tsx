import { cn } from "@/lib/utils";

export const Badge = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full border border-transparent bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800",
      className
    )}
    {...props}
  >
    {children}
  </span>
);
