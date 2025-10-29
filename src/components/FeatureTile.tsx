import { Card, CardContent } from "./ui/card";

interface FeatureTileProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  className?: string;
}

export const FeatureTile = ({ icon: Icon, title, description, className = "" }: FeatureTileProps) => {
  return (
    <Card className={`hover-lift border-bronze/30 bg-card/90 shadow-[var(--shadow-paper)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 ${className}`}>
      <CardContent className="p-6 space-y-3 text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-bronze/10 flex items-center justify-center border-2 border-bronze/20">
          <Icon className="w-7 h-7 text-bronze" />
        </div>
        <h4 className="font-serif text-lg text-primary">{title}</h4>
        <p className="text-sm text-foreground/85 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
