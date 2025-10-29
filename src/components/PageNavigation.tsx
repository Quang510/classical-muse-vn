import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

interface PageNavigationProps {
  previousPage?: {
    path: string;
    label: string;
  };
  nextPage?: {
    path: string;
    label: string;
  };
}

export const PageNavigation = ({ previousPage, nextPage }: PageNavigationProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center pt-12 mt-12 border-t border-border/50">
      <div className="flex-1">
        {previousPage && (
          <Button
            variant="ghost"
            onClick={() => navigate(previousPage.path)}
            className="hover:bg-gold/10 group"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <div className="text-xs text-muted-foreground">Trang trước</div>
              <div className="font-medium">{previousPage.label}</div>
            </div>
          </Button>
        )}
      </div>

      <div className="flex-1 flex justify-end">
        {nextPage && (
          <Button
            variant="ghost"
            onClick={() => navigate(nextPage.path)}
            className="hover:bg-gold/10 group"
          >
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Trang tiếp</div>
              <div className="font-medium">{nextPage.label}</div>
            </div>
            <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        )}
      </div>
    </div>
  );
};
