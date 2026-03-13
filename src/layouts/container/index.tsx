import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="h-full max-h-full w-full max-w-241 p-4 xl:p-0">
      {children}
    </div>
  );
};
