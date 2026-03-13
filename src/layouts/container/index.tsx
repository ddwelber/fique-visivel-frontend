import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`mx-auto h-full max-h-full w-full max-w-280 p-4 md:p-0 ${className}`}
    >
      {children}
    </div>
  );
};
