import { Card, CardContent } from "./ui/card";

interface FeatureTileProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  className?: string;
}

export const FeatureTile = ({ icon: Icon, title, description, className = "" }: FeatureTileProps) => {
  return (
    <Card className={`hover-lift border-gold/30 bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-large)] transition-all duration-500 ${className}`}>
      <CardContent className="p-6 space-y-3 text-center">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-bronze/10 to-gold/10 flex items-center justify-center border-2 border-gold/30">
          <Icon className="w-7 h-7 text-bronze" />
        </div>
        <h4 className="font-serif text-lg text-primary">{title}</h4>
        <p className="text-sm text-foreground/85 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
