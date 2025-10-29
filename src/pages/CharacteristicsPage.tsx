import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { FeatureTile } from "@/components/FeatureTile";
import { 
  LightBulbIcon, 
  ScaleIcon, 
  ChartBarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";

const CharacteristicsPage = () => {
  const navigate = useNavigate();

  const characteristics = [
    {
      icon: LightBulbIcon,
      title: "Tự do kinh tế",
      description: "Tin vào sức mạnh của thị trường tự do và hạn chế can thiệp của chính phủ vào hoạt động kinh tế."
    },
    {
      icon: ScaleIcon,
      title: "Cân bằng tự nhiên",
      description: "Thị trường có khả năng tự điều chỉnh và đạt được trạng thái cân bằng thông qua cơ chế giá cả."
    },
    {
      icon: ChartBarIcon,
      title: "Lý thuyết giá trị lao động",
      description: "Giá trị của hàng hóa được xác định bởi lượng lao động cần thiết để sản xuất ra nó."
    },
    {
      icon: CurrencyDollarIcon,
      title: "Tích lũy vốn",
      description: "Tiết kiệm và đầu tư là động lực chính thúc đẩy tăng trưởng kinh tế và phát triển."
    },
    {
      icon: UserGroupIcon,
      title: "Phân công lao động",
      description: "Chuyên môn hóa và phân công lao động là chìa khóa để nâng cao năng suất và hiệu quả."
    },
    {
      icon: GlobeAltIcon,
      title: "Thương mại tự do",
      description: "Thương mại quốc tế tự do mang lại lợi ích cho tất cả các quốc gia thông qua lợi thế so sánh."
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
              ⭐ Đặc điểm chính
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Những nguyên tắc và đặc trưng cốt lõi định hình trường phái Kinh tế học Cổ điển
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characteristics.map((char, index) => (
              <FeatureTile key={index} {...char} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacteristicsPage;
