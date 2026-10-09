import type { ButtonHTMLAttributes } from "react";

interface ButtonStyle {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export function buttonClass({
  variant = "default",
  size = "default",
  className = "",
}: ButtonStyle = {}) {
  const variants = {
    default: "bg-grill text-white hover:bg-grill-deep",
    outline:
      "border border-grill text-grill hover:bg-grill hover:text-white",
    ghost: "text-grill hover:bg-grill/10",
  };
  const sizes = {
    default: "min-h-11 px-4 py-2",
    sm: "min-h-11 px-3 py-1 sm:min-h-9",
    lg: "min-h-12 px-6 py-3",
  };
  return `inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grill ${variants[variant]} ${sizes[size]}` + ` ${className}`;
}

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyle) {
  return (
    <button
      type={type}
      className={buttonClass({ variant, size, className })}
      {...props}
    />
  );
}
