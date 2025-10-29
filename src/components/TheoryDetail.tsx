import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

export interface TheoryDetailData {
  category: string;
  title: string;
  description: string;
  fullDescription: string;
  keyPoints: string[];
  examples?: string[];
  relatedConcepts?: string[];
  icon?: ReactNode;
}

interface TheoryDetailProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: TheoryDetailData | null;
}

export const TheoryDetail = ({ open, onOpenChange, data }: TheoryDetailProps) => {
  if (!data) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] p-0 bg-gradient-to-br from-card to-secondary/20">
        <ScrollArea className="max-h-[85vh]">
          <div className="p-6 space-y-6">
            {/* Header */}
            <DialogHeader>
              <div className="flex items-start gap-4">
                {data.icon && (
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bronze/20 to-gold/20 flex items-center justify-center flex-shrink-0 border-2 border-gold/30">
                    {data.icon}
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    {data.category}
                  </p>
                  <DialogTitle className="text-2xl md:text-3xl font-serif text-primary mb-2">
                    {data.title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-foreground/80">
                    {data.description}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <Separator />

            {/* Full Description */}
            <div className="space-y-3">
              <h3 className="text-lg font-serif text-primary">Giải thích chi tiết</h3>
              <p className="text-foreground/90 leading-relaxed">
                {data.fullDescription}
              </p>
            </div>

            <Separator />

            {/* Key Points */}
            <div className="space-y-3">
              <h3 className="text-lg font-serif text-primary">Điểm chính</h3>
              <ul className="space-y-2">
                {data.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-bronze/20 flex items-center justify-center text-xs font-medium text-bronze flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-foreground/90 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Examples */}
            {data.examples && data.examples.length > 0 && (
              <>
                <Separator />
                <div className="space-y-3">
                  <h3 className="text-lg font-serif text-primary">Ví dụ minh họa</h3>
                  <div className="space-y-3">
                    {data.examples.map((example, index) => (
                      <div
                        key={index}
                        className="bg-gold/5 rounded-lg p-4 border-l-4 border-bronze"
                      >
                        <p className="text-sm text-foreground/80 italic">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Related Concepts */}
            {data.relatedConcepts && data.relatedConcepts.length > 0 && (
              <>
                <Separator />
                <div className="space-y-3">
                  <h3 className="text-lg font-serif text-primary">Khái niệm liên quan</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.relatedConcepts.map((concept, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gradient-to-r from-bronze/10 to-gold/10 border border-gold/30 rounded-full text-xs font-medium text-primary"
                      >
                        {concept}
                      </span>
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
