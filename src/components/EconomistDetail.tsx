import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  AcademicCapIcon,
  BookOpenIcon,
  LightBulbIcon,
  SparklesIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export interface EconomistDetailData {
  name: string;
  years: string;
  title: string;
  imageSrc: string;
  biography: string;
  majorWorks: Array<{
    title: string;
    vietnameseName?: string;
    year: string;
    description: string;
  }>;
  keyIdeas: string[];
  philosophicalInfluence: string[];
  legacy: string;
  quotes: string[];
}

interface EconomistDetailProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: EconomistDetailData | null;
}

export const EconomistDetail = ({ open, onOpenChange, data }: EconomistDetailProps) => {
  if (!data) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6 space-y-6">
            {/* Header with Image */}
            <DialogHeader>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-bronze/40 flex-shrink-0">
                  <img
                    src={data.imageSrc}
                    alt={data.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <DialogTitle className="text-3xl font-serif text-primary mb-2">
                    {data.name}
                  </DialogTitle>
                  <p className="text-muted-foreground mb-2">{data.years}</p>
                  <p className="text-accent font-medium italic">{data.title}</p>
                </div>
              </div>
            </DialogHeader>

            {/* Biography */}
            <div className="space-y-3">
              <h3 className="text-xl font-serif text-primary flex items-center gap-2">
                <AcademicCapIcon className="w-5 h-5 text-bronze" />
                Tiểu sử
              </h3>
              <DialogDescription className="text-foreground/90 leading-relaxed">
                {data.biography}
              </DialogDescription>
            </div>

            <Separator className="bg-border" />

            {/* Major Works */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-primary flex items-center gap-2">
                <BookOpenIcon className="w-5 h-5 text-bronze" />
                Tác phẩm chính
              </h3>
              <div className="space-y-3">
                {data.majorWorks.map((work, index) => (
                  <div key={index} className="bg-secondary/50 rounded-lg p-4 border border-bronze/20">
                    <h4 className="font-medium text-primary mb-1">
                      {work.vietnameseName && (
                        <span className="text-foreground block mb-1">
                          {work.vietnameseName}
                        </span>
                      )}
                      <em className="text-sm text-bronze">{work.title}</em> <span className="text-sm text-bronze">({work.year})</span>
                    </h4>
                    <p className="text-sm text-foreground/80">{work.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="bg-border" />

            {/* Key Ideas */}
            <div className="space-y-3">
              <h3 className="text-xl font-serif text-primary flex items-center gap-2">
                <LightBulbIcon className="w-5 h-5 text-bronze" />
                Tư tưởng cốt lõi
              </h3>
              <ul className="space-y-2">
                {data.keyIdeas.map((idea, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground/90">
                    <span className="text-bronze mt-1">◆</span>
                    <span>{idea}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="bg-border" />

            {/* Philosophical Influence */}
            <div className="space-y-3">
              <h3 className="text-xl font-serif text-primary flex items-center gap-2">
                <SparklesIcon className="w-5 h-5 text-bronze" />
                Ảnh hưởng triết học
              </h3>
              <ul className="space-y-2">
                {data.philosophicalInfluence.map((influence, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground/90">
                    <span className="text-accent mt-1">•</span>
                    <span>{influence}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="bg-border" />

            {/* Legacy */}
            <div className="space-y-3">
              <h3 className="text-xl font-serif text-primary flex items-center gap-2">
                <GlobeAltIcon className="w-5 h-5 text-bronze" />
                Di sản và ảnh hưởng
              </h3>
              <p className="text-foreground/90 leading-relaxed">{data.legacy}</p>
            </div>

            {/* Quotes */}
            {data.quotes.length > 0 && (
              <>
                <Separator className="bg-border" />
                <div className="space-y-3">
                  <h3 className="text-xl font-serif text-primary">Trích dẫn nổi tiếng</h3>
                  <div className="space-y-3">
                    {data.quotes.map((quote, index) => (
                      <blockquote
                        key={index}
                        className="border-l-4 border-bronze pl-4 italic text-foreground/80"
                      >
                        "{quote}"
                      </blockquote>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
