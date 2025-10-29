import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface EconomistCardProps {
  name: string;
  years: string;
  title: string;
  work: string;
  ideas: string;
  influence: string;
  imageSrc: string;
  className?: string;
  onViewDetail?: () => void;
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
  onViewDetail,
}: EconomistCardProps) => {
  return (
    <Card className={`hover-lift overflow-hidden border-bronze/30 bg-card shadow-[var(--shadow-paper)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 ${className}`}>
      <div className="aspect-[4/3] overflow-hidden bg-muted relative">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-serif text-primary mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground">{years}</p>
          <p className="text-bronze font-medium mt-2 italic">{title}</p>
        </div>

        <div className="space-y-3 text-sm">
          <div>
            <strong className="text-primary">Tác phẩm:</strong>
            <p className="text-foreground/90 leading-relaxed">{work}</p>
          </div>

          <div>
            <strong className="text-primary">Tư tưởng:</strong>
            <p className="text-foreground/90 leading-relaxed">{ideas}</p>
          </div>

          <div>
            <strong className="text-primary">Ảnh hưởng triết học:</strong>
            <p className="text-foreground/90 leading-relaxed">{influence}</p>
          </div>
        </div>

        {onViewDetail && (
          <Button
            onClick={onViewDetail}
            variant="outline"
            className="w-full mt-2 border-bronze/40 hover:bg-bronze hover:text-bronze-foreground transition-all group"
          >
            Xem chi tiết
            <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
