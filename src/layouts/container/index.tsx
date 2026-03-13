import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto h-full max-h-full w-full max-w-280 p-4 xl:p-0">
      {children}
    </div>
  );
};
