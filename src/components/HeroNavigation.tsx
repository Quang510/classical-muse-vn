import { BentoCard } from "./BentoCard";
import {
  AcademicCapIcon,
  UserGroupIcon,
  PuzzlePieceIcon,
  LightBulbIcon,
  TrophyIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

interface HeroNavigationProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroNavigation = ({ onNavigate }: HeroNavigationProps) => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bronze/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-6xl md:text-7xl animate-bounce">🏛️</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-primary via-bronze to-gold bg-clip-text text-transparent mb-4">
            Kinh tế học Cổ điển
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Khám phá nền tảng triết học và lý thuyết kinh tế từ thời kỳ cách mạng công nghiệp
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Classical Economics Philosophy</span>
            <span>•</span>
            <span>18th-19th Century</span>
          </div>
        </div>

        {/* Bento Grid Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Large card - Intro */}
          <BentoCard
            category="Overview"
            title="Giới thiệu chung"
            description="Bối cảnh lịch sử và tư tưởng cốt lõi"
            icon={<AcademicCapIcon className="w-8 h-8" />}
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[280px]"
            onClick={() => onNavigate('intro')}
          />

          {/* William Petty */}
          <BentoCard
            category="Pioneers"
            title="William Petty"
            description="Người mở đường kinh tế chính trị"
            icon={<SparklesIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => onNavigate('petty')}
          />

          {/* Economists */}
          <BentoCard
            category="Scholars"
            title="Nhà kinh tế"
            description="Smith, Ricardo, Mill"
            icon={<UserGroupIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => onNavigate('economists')}
          />

          {/* Characteristics */}
          <BentoCard
            category="Features"
            title="Đặc điểm"
            description="Các đặc trưng cơ bản"
            icon={<PuzzlePieceIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => onNavigate('characteristics')}
          />

          {/* Theories */}
          <BentoCard
            category="Core Concepts"
            title="Lý thuyết"
            description="Bàn tay vô hình, giá trị lao động..."
            icon={<LightBulbIcon className="w-7 h-7" />}
            className="md:col-span-2 lg:col-span-1 min-h-[200px]"
            onClick={() => onNavigate('theories')}
          />

          {/* Contributions & Limitations - Large horizontal */}
          <BentoCard
            category="Analysis"
            title="Đóng góp & Hạn chế"
            description="Đánh giá toàn diện trường phái"
            icon={<TrophyIcon className="w-7 h-7" />}
            className="md:col-span-3 lg:col-span-2 min-h-[200px]"
            onClick={() => onNavigate('contributions')}
          />

          {/* Philosophy */}
          <BentoCard
            category="Philosophy"
            title="Triết học"
            description="Ảnh hưởng tư tưởng Khai sáng"
            icon={<ExclamationTriangleIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => onNavigate('philosophy')}
          />

          {/* Impact */}
          <BentoCard
            category="Legacy"
            title="Ảnh hưởng"
            description="Di sản lịch sử và so sánh"
            icon={<GlobeAltIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => onNavigate('impact')}
          />

          {/* Quiz */}
          <BentoCard
            category="Practice"
            title="Kiểm tra"
            description="Trắc nghiệm kiến thức"
            icon={<ClipboardDocumentCheckIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => onNavigate('quiz')}
          />

          {/* References */}
          <BentoCard
            category="Resources"
            title="Tài liệu"
            description="Nguồn tham khảo và trích dẫn"
            icon={<BookOpenIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => onNavigate('references')}
          />
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-12 animate-bounce">
          <p className="text-sm text-muted-foreground mb-2">Cuộn xuống để khám phá</p>
          <svg
            className="w-6 h-6 mx-auto text-bronze"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};
