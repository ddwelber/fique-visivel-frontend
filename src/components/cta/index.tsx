import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CtaProps {
  to: string;
  children: ReactNode;
  variant?: "default" | "secondary";
  size?: "default" | "small";
}

const ctaVariants = {
  default: "bg-black text-white hover:bg-black/85",
  secondary: "bg-white text-gray-500 border border-gray-100",
};

const ctaSizes = {
  default: "text-base",
  small: "text-sm",
};

export const Cta = ({
  to,
  children,
  variant = "default",
  size = "default",
}: CtaProps) => {
  return (
    <Link
      to={to}
      className={`rounded-md px-4 py-3 font-medium transition-colors duration-150 ${ctaVariants[variant]} ${ctaSizes[size]}`}
    >
      {children}
    </Link>
  );
};
