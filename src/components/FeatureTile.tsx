import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface FeatureTileProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const FeatureTile = ({ icon: Icon, title, description, className = "" }: FeatureTileProps) => {
  return (
    <Card className={`hover-lift border-accent/20 bg-card/80 ${className}`}>
      <CardContent className="p-6 space-y-3 text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <h4 className="font-serif text-lg text-primary">{title}</h4>
        <p className="text-sm text-foreground/80 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
