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
    default: "bg-amber-700 text-white hover:bg-amber-800",
    outline:
      "border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white",
    ghost: "text-amber-700 hover:bg-amber-100",
  };
  const sizes = {
    default: "min-h-10 px-4 py-2",
    sm: "min-h-8 px-3 py-1",
    lg: "min-h-12 px-6 py-3",
  };
  return `inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 ${variants[variant]} ${sizes[size]} ${className}`;
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
