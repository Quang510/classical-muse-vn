import { BentoCard } from "./BentoCard";
import classicalBg from "@/assets/classical-economics-bg.jpg";
import {
  AcademicCapIcon,
  UserGroupIcon,
  PuzzlePieceIcon,
  LightBulbIcon,
  TrophyIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  GlobeAltIcon,
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
            backgroundImage={classicalBg}
          />

          {/* William Petty */}
          <BentoCard
            category="Pioneers"
            title="William Petty"
            description="Người mở đường kinh tế chính trị"
            icon={<SparklesIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => onNavigate('petty')}
            backgroundImage={classicalBg}
          />

          {/* Economists */}
          <BentoCard
            category="Scholars"
            title="Nhà kinh tế"
            description="Smith, Ricardo, Mill"
            icon={<UserGroupIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => onNavigate('economists')}
            backgroundImage={classicalBg}
          />

          {/* Characteristics */}
          <BentoCard
            category="Features"
            title="Đặc điểm"
            description="Các đặc trưng cơ bản"
            icon={<PuzzlePieceIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => onNavigate('characteristics')}
            backgroundImage={classicalBg}
          />

          {/* Theories */}
          <BentoCard
            category="Core Concepts"
            title="Lý thuyết"
            description="Bàn tay vô hình, giá trị lao động..."
            icon={<LightBulbIcon className="w-7 h-7" />}
            className="md:col-span-2 lg:col-span-1 min-h-[200px]"
            onClick={() => onNavigate('theories')}
            backgroundImage={classicalBg}
          />

          {/* Contributions & Limitations - Large horizontal */}
          <BentoCard
            category="Analysis"
            title="Đóng góp & Hạn chế"
            description="Đánh giá toàn diện trường phái"
            icon={<TrophyIcon className="w-7 h-7" />}
            className="md:col-span-3 lg:col-span-2 min-h-[200px]"
            onClick={() => onNavigate('contributions')}
            backgroundImage={classicalBg}
          />

          {/* Philosophy */}
          <BentoCard
            category="Philosophy"
            title="Triết học"
            description="Ảnh hưởng tư tưởng Khai sáng"
            icon={<ExclamationTriangleIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => onNavigate('philosophy')}
            backgroundImage={classicalBg}
          />

          {/* Impact */}
          <BentoCard
            category="Legacy"
            title="Ảnh hưởng"
            description="Di sản lịch sử và so sánh"
            icon={<GlobeAltIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => onNavigate('impact')}
            backgroundImage={classicalBg}
          />

          {/* References */}
          <BentoCard
            category="Resources"
            title="Tài liệu"
            description="Nguồn tham khảo và trích dẫn"
            icon={<BookOpenIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => onNavigate('references')}
            backgroundImage={classicalBg}
          />
        </div>
      </div>
    </section>
  );
};
