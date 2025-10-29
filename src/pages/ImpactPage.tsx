import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ImpactPage = () => {
  const navigate = useNavigate();

  const impacts = [
    {
      category: "Chính sách Kinh tế",
      items: [
        "Thúc đẩy chính sách tự do hóa thương mại trên toàn cầu",
        "Giảm can thiệp của chính phủ vào thị trường",
        "Xóa bỏ các rào cản thương mại và thuế quan",
        "Khuyến khích tư nhân hóa các doanh nghiệp nhà nước"
      ]
    },
    {
      category: "Phát triển Lý thuyết",
      items: [
        "Nền tảng cho các trường phái kinh tế sau này (Neoklassik, Keynesian)",
        "Phát triển các mô hình kinh tế toán học",
        "Ảnh hưởng đến lý thuyết tài chính và ngân hàng hiện đại",
        "Cơ sở cho kinh tế học vi mô đương đại"
      ]
    },
    {
      category: "Xã hội & Văn hóa",
      items: [
        "Thay đổi cách nhìn về vai trò của cá nhân trong xã hội",
        "Thúc đẩy chủ nghĩa tư bản và doanh nghiệp tư nhân",
        "Ảnh hưởng đến văn hóa kinh doanh và tinh thần khởi nghiệp",
        "Định hình quan điểm về quyền sở hữu tư nhân"
      ]
    },
    {
      category: "Toàn cầu hóa",
      items: [
        "Tạo nền tảng lý thuyết cho toàn cầu hóa kinh tế",
        "Thúc đẩy sự hình thành các tổ chức thương mại quốc tế (WTO)",
        "Ảnh hưởng đến các hiệp định thương mại tự do",
        "Định hình trật tự kinh tế thế giới hiện đại"
      ]
    },
    {
      category: "Giáo dục & Nghiên cứu",
      items: [
        "Trở thành nội dung cốt lõi trong giảng dạy kinh tế học",
        "Ảnh hưởng đến phương pháp nghiên cứu kinh tế",
        "Tạo ra các khái niệm và thuật ngữ kinh tế cơ bản",
        "Là điểm khởi đầu để so sánh với các trường phái khác"
      ]
    },
    {
      category: "Phê bình & Phản ứng",
      items: [
        "Thúc đẩy sự ra đời của chủ nghĩa Marx như một phản ứng",
        "Dẫn đến sự phát triển của các trường phái can thiệp nhà nước",
        "Khởi nguồn cho các cuộc tranh luận về vai trò của chính phủ",
        "Tạo ra các phong trào xã hội và chính trị đối lập"
      ]
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
              🌟 Ảnh hưởng và Di sản
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Tác động sâu rộng của Kinh tế học Cổ điển đến thế giới hiện đại
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {impacts.map((impact, index) => (
              <Card key={index} className="hover-lift border-gold/30 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-primary">
                    {impact.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {impact.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span className="text-foreground/80 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactPage;
