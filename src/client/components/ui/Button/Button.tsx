import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
};

const BASE = "inline-flex items-center justify-center gap-2 rounded-full font-bold leading-none transition select-none";

const colorMap = {
  primary: "bg-sky-400 text-white hover:bg-sky-500 active:bg-sky-600",
  secondary: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 active:bg-slate-100",
} as const;

const sizeMap = {
  small: "h-8 px-4 text-xs",
  medium: "h-10 px-6 text-sm",
  large: "h-12 px-6 text-base",
} as const;

export function Button({
  color = "primary",
  size = "medium",
  type = "button",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${BASE} ${colorMap[color]} ${sizeMap[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
