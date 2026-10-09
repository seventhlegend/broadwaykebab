import { cn } from "@/lib/utils";

export const Card = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export const CardContent = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-4", className)} {...props}>
    {children}
  </div>
);
