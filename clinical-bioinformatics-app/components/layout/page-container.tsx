import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export function PageContainer({
  children,
  className = ""
}: PageContainerProps) {
  return (
    <div className={`mx-auto max-w-5xl px-6 py-16 ${className}`}>
      {children}
    </div>
  );
}