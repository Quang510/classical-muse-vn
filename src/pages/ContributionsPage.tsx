import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageNavigation } from "@/components/PageNavigation";

const ContributionsPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
    setTimeout(() => {
      const navigationSection = document.getElementById('navigation-section');
      if (navigationSection) {
        navigationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const contributions = [
    {
      title: "Nền tảng Kinh tế học Hiện đại",
      description: "Kinh tế học Cổ điển đã đặt nền móng vững chắc cho kinh tế học như một ngành khoa học độc lập, với phương pháp nghiên cứu có hệ thống và các nguyên lý cơ bản."
    },
    {
      title: "Chính sách Tự do Thương mại",
      description: "Đóng góp quan trọng vào việc thúc đẩy chính sách thương mại tự do và xóa bỏ các rào cản thương mại, tạo điều kiện cho toàn cầu hóa."
    },
    {
      title: "Hiểu biết về Thị trường",
      description: "Làm sáng tỏ cơ chế hoạt động của thị trường, vai trò của giá cả, và sự tương tác giữa cung và cầu trong việc phân bổ nguồn lực."
    },
    {
      title: "Lý thuyết Phân phối Thu nhập",
      description: "Phát triển các lý thuyết về cách thu nhập được phân phối giữa các tầng lớp trong xã hội: tiền công, lợi nhuận và địa tô."
    },
    {
      title: "Tăng trưởng Kinh tế",
      description: "Nghiên cứu các yếu tố thúc đẩy tăng trưởng kinh tế dài hạn, vai trò của tích lũy vốn và tiến bộ kỹ thuật."
    },
    {
      title: "Phê phán Chủ nghĩa Trọng thương",
      description: "Thách thức và lật đổ các quan điểm kinh tế trọng thương cũ, mở đường cho tư duy kinh tế tự do và cởi mở hơn."
    }
  ];

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
              Đóng góp lịch sử
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Những đóng góp quan trọng của Kinh tế học Cổ điển cho khoa học kinh tế và xã hội
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {contributions.map((contribution, index) => (
              <Card key={index} className="hover-lift border-gold/30 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-primary">
                    {contribution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">
                    {contribution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <PageNavigation
            previousPage={{
              path: "/theories",
              label: "Lý thuyết cốt lõi"
            }}
            nextPage={{
              path: "/impact",
              label: "Ảnh hưởng và Di sản"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContributionsPage;
