import { ReactNode } from "react";
import { Card } from "./ui/card";

interface BentoCardProps {
  category: string;
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  backgroundImage?: string;
}

export const BentoCard = ({
  category,
  title,
  description,
  icon,
  className = "",
  onClick,
  backgroundImage,
}: BentoCardProps) => {
  return (
    <Card
      onClick={onClick}
      className={`group relative overflow-hidden border-2 border-gold/20 bg-gradient-to-br from-primary/5 to-bronze/5 backdrop-blur-sm hover:border-gold/60 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:shadow-[var(--shadow-large)] ${className}`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-bronze/0 to-gold/0 group-hover:from-bronze/10 group-hover:to-gold/20 transition-all duration-500" />
      
      {/* Content */}
      <div className="relative p-6 h-full flex flex-col justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
            {category}
          </p>
          
          {icon && (
            <div className="mb-4 text-bronze">
              {icon}
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-serif font-semibold text-primary group-hover:text-bronze transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-foreground/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </Card>
  );
};
