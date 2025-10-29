import { Card, CardContent } from "./ui/card";

interface EconomistCardProps {
  name: string;
  years: string;
  title: string;
  work: string;
  ideas: string;
  influence: string;
  imageSrc: string;
  className?: string;
}

export const EconomistCard = ({
  name,
  years,
  title,
  work,
  ideas,
  influence,
  imageSrc,
  className = "",
}: EconomistCardProps) => {
  return (
    <Card className={`hover-lift overflow-hidden border-accent/20 ${className}`}>
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 space-y-3">
        <div>
          <h3 className="text-2xl font-serif text-primary mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground">{years}</p>
          <p className="text-accent font-medium mt-2 italic">{title}</p>
        </div>

        <div className="space-y-2 text-sm">
          <div>
            <strong className="text-primary">Tác phẩm:</strong>
            <p className="text-foreground/90">{work}</p>
          </div>

          <div>
            <strong className="text-primary">Tư tưởng:</strong>
            <p className="text-foreground/90">{ideas}</p>
          </div>

          <div>
            <strong className="text-primary">Ảnh hưởng triết học:</strong>
            <p className="text-foreground/90">{influence}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
