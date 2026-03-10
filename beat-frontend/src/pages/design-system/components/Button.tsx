import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center font-display font-bold transition-all duration-200 rounded-sm uppercase tracking-wider active:scale-95 disabled:opacity-50";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-crimson-gradient text-white shadow-glow hover:shadow-glow-hover",
    secondary:
      "bg-charcoal-light text-surface-200 border border-surface-700 hover:border-surface-400 hover:text-white",
    ghost:
      "bg-transparent text-surface-400 hover:text-crimson-light border border-transparent hover:border-surface-700",
    outline:
      "border border-crimson text-crimson hover:bg-crimson hover:text-white",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "h-7 px-3 text-2xs",
    md: "h-10 px-6 text-sm",
    lg: "h-12 px-9 text-base",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
