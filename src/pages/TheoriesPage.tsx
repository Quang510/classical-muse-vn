import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { BentoCard } from "@/components/BentoCard";
import { theoriesData } from "@/data/theoriesData";
import { TheoryDetail } from "@/components/TheoryDetail";
import { useState } from "react";

const TheoriesPage = () => {
  const navigate = useNavigate();
  const [selectedTheory, setSelectedTheory] = useState<string | null>(null);

  const theories = [
    {
      id: "invisible-hand",
      category: "Thị trường",
      title: "Bàn tay vô hình",
      description: "Cơ chế tự điều tiết của thị trường"
    },
    {
      id: "labor-theory",
      category: "Giá trị",
      title: "Lý thuyết giá trị lao động",
      description: "Giá trị được xác định bởi lao động"
    },
    {
      id: "comparative-advantage",
      category: "Thương mại",
      title: "Lợi thế so sánh",
      description: "Nền tảng của thương mại quốc tế"
    },
    {
      id: "division-of-labor",
      category: "Năng suất",
      title: "Phân công lao động",
      description: "Chuyên môn hóa tăng năng suất"
    },
    {
      id: "laissez-faire",
      category: "Chính sách",
      title: "Laissez-faire",
      description: "Tự do kinh tế không can thiệp"
    },
    {
      id: "says-law",
      category: "Kinh tế vĩ mô",
      title: "Định luật Say",
      description: "Cung tạo ra cầu của chính nó"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-accent/10"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Về trang chủ
        </Button>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
              💡 Lý thuyết cốt lõi
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Những học thuyết kinh tế nền tảng của trường phái Cổ điển
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {theories.map((theory) => (
              <BentoCard
                key={theory.id}
                category={theory.category}
                title={theory.title}
                description={theory.description}
                onClick={() => setSelectedTheory(theory.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <TheoryDetail
        open={selectedTheory !== null}
        onOpenChange={(open) => !open && setSelectedTheory(null)}
        data={selectedTheory ? theoriesData[selectedTheory] : undefined}
      />
    </div>
  );
};

export default TheoriesPage;
