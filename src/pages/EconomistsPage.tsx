import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { EconomistCard } from "@/components/EconomistCard";
import { EconomistDetail, EconomistDetailData } from "@/components/EconomistDetail";
import { useState } from "react";
import { PageNavigation } from "@/components/PageNavigation";
import adamSmithImg from "@/assets/adam-smith.jpg";
import davidRicardoImg from "@/assets/david-ricardo.jpg";
import johnStuartMillImg from "@/assets/john-stuart-mill.jpg";
import { economistsData } from "@/data/economistsData";

const EconomistsPage = () => {
  const navigate = useNavigate();
  const [selectedEconomist, setSelectedEconomist] = useState<EconomistDetailData | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const handleBackToHome = () => {
    navigate("/");
    setTimeout(() => {
      const navigationSection = document.getElementById('navigation-section');
      if (navigationSection) {
        navigationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const economists = [
    {
      id: "adam-smith",
      name: "Adam Smith",
      years: "1723-1790",
      title: "Cha đẻ của Kinh tế học Cổ điển",
      imageSrc: adamSmithImg,
      work: "Tác giả của 'The Wealth of Nations' (1776), tác phẩm nền tảng của kinh tế học hiện đại.",
      ideas: "Khái niệm 'bàn tay vô hình' của thị trường, phân công lao động, và lợi ích của thương mại tự do.",
      influence: "Chịu ảnh hưởng từ chủ nghĩa tự nhiên của các triết gia Pháp và chủ nghĩa kinh nghiệm của David Hume."
    },
    {
      id: "david-ricardo",
      name: "David Ricardo",
      years: "1772-1823",
      title: "Nhà lý thuyết Thương mại Quốc tế",
      imageSrc: davidRicardoImg,
      work: "Tác phẩm 'Principles of Political Economy and Taxation' (1817) về thuế và thương mại.",
      ideas: "Thuyết lợi thế so sánh, lý thuyết địa tô, và lý thuyết giá trị lao động.",
      influence: "Phát triển từ tư tưởng của Adam Smith và ảnh hưởng đến Karl Marx."
    },
    {
      id: "john-stuart-mill",
      name: "John Stuart Mill",
      years: "1806-1873",
      title: "Nhà kinh tế học và Triết học",
      imageSrc: johnStuartMillImg,
      work: "Tác phẩm 'Principles of Political Economy' (1848), tổng hợp kinh tế học cổ điển.",
      ideas: "Kết hợp kinh tế thị trường với trách nhiệm xã hội, chủ nghĩa công lợi trong kinh tế.",
      influence: "Kết hợp tư tưởng của Adam Smith, Ricardo với chủ nghĩa nhân văn và cải cách xã hội."
    }
  ];

  const handleViewDetail = (economistId: string) => {
    const data = economistsData[economistId];
    if (data) {
      setSelectedEconomist(data);
      setDetailOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={handleBackToHome}
          className="mb-8 hover:bg-accent/10"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Về trang chủ
        </Button>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
              Các nhà kinh tế tiêu biểu
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Khám phá những nhân vật kiệt xuất đã hình thành nên trường phái Kinh tế học Cổ điển
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {economists.map((economist) => (
              <EconomistCard 
                key={economist.id} 
                {...economist}
                onViewDetail={() => handleViewDetail(economist.id)}
              />
            ))}
          </div>

          <PageNavigation
            previousPage={{
              path: "/petty",
              label: "William Petty"
            }}
            nextPage={{
              path: "/references",
              label: "Tài liệu tham khảo"
            }}
          />
        </div>

        <EconomistDetail
          open={detailOpen}
          onOpenChange={setDetailOpen}
          data={selectedEconomist}
        />
      </div>
    </div>
  );
};

export default EconomistsPage;
