import type { ReactNode } from "react";

interface LayoutCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const LayoutCard = ({
  title,
  children,
  className = "",
}: LayoutCardProps) => {
  return (
    <section className={`rounded-2xl bg-white p-6 dark:bg-gray-900 ${className}`}>
      <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      {children}
    </section>
  );
};
