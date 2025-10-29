import { ReactNode } from "react";

interface SectionProps {
  id: string;
  emoji: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, emoji, title, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-12 md:py-20 scroll-mt-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-3">
              <span className="mr-3">{emoji}</span>
              {title}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="fade-in">{children}</div>
        </div>
      </div>
    </section>
  );
};
