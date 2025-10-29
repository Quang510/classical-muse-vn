import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { PageNavigation } from "@/components/PageNavigation";

const IntroPage = () => {
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

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={handleBackToHome}
          className="mb-8 hover:bg-gold/10"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Quay lại trang chủ
        </Button>

        {/* Content */}
        <div className="space-y-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-primary via-bronze to-gold bg-clip-text text-transparent">
              Giới thiệu chung
            </h1>
            <p className="text-xl text-muted-foreground">
              Trường phái Kinh tế học Cổ điển
            </p>
          </div>

          <div id="content-section" className="prose prose-lg max-w-none scroll-mt-20 space-y-12">
            <div className="bg-card/90 rounded-2xl p-8 shadow-[var(--shadow-large)] border-2 border-gold/20 space-y-6">
              <h2 className="text-2xl font-serif text-primary">Bối cảnh lịch sử</h2>
              <p className="text-foreground/90 leading-relaxed">
                Trường phái Kinh tế học Cổ điển ra đời trong bối cảnh <strong className="text-bronze">cách mạng công nghiệp</strong> ở 
                Anh thế kỷ XVIII–XIX, đánh dấu sự chuyển mình từ xã hội phong kiến sang chủ nghĩa tư bản 
                và sự hình thành của khoa học hiện đại.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Đây là thời kỳ mà châu Âu trải qua những thay đổi sâu sắc: máy móc thay thế lao động thủ công,
                công nghiệp phát triển mạnh mẽ, thương mại quốc tế mở rộng, và giai cấp tư sản nổi lên với 
                vai trò quan trọng trong xã hội.
              </p>
            </div>

            <div className="bg-card/90 rounded-2xl p-8 shadow-[var(--shadow-large)] border-2 border-gold/20 space-y-6">
              <h2 className="text-2xl font-serif text-primary">Vấn đề triết học</h2>
              <p className="text-foreground/90 leading-relaxed">
                Các nhà kinh tế cổ điển tin rằng con người có thể hiểu và điều khiển <strong className="text-bronze">trật tự tự nhiên</strong> 
                {" "}thông qua lý trí. Kinh tế học không chỉ là môn khoa học độc lập mà còn là một nhánh 
                của triết học đạo đức và chính trị.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Họ chịu ảnh hưởng sâu sắc từ tư tưởng <strong className="text-bronze">Khai sáng</strong> (Enlightenment), 
                với niềm tin vào khả năng của lý trí con người trong việc khám phá các quy luật tự nhiên chi phối 
                vũ trụ và xã hội loài người.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-bronze/10 to-gold/10 rounded-2xl p-8 border-2 border-bronze/30 shadow-[var(--shadow-medium)]">
                <h3 className="text-xl font-serif text-primary mb-4">
                  Mục tiêu
                </h3>
                <p className="text-foreground/85 leading-relaxed">
                  Tìm ra các <strong>"quy luật tự nhiên"</strong> chi phối nền kinh tế và xã hội, 
                  tương tự như các quy luật vật lý trong tự nhiên.
                </p>
              </div>

              <div className="bg-gradient-to-br from-bronze/10 to-gold/10 rounded-2xl p-8 border-2 border-bronze/30 shadow-[var(--shadow-medium)]">
                <h3 className="text-xl font-serif text-primary mb-4">
                  Tư tưởng cốt lõi
                </h3>
                <p className="text-foreground/85 leading-relaxed">
                  Tự do kinh tế, cá nhân là trung tâm, thị trường tự điều tiết, 
                  lao động là nguồn gốc của cải.
                </p>
              </div>
            </div>

            <div className="bg-card/90 rounded-2xl p-8 shadow-[var(--shadow-large)] border-2 border-gold/20 space-y-6">
              <h2 className="text-2xl font-serif text-primary">Tầm quan trọng</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-bronze text-2xl">◆</span>
                  <span className="text-foreground/90">
                    <strong>Nền tảng kinh tế học hiện đại:</strong> Đặt nền móng cho tất cả các lý thuyết 
                    kinh tế sau này, từ tân cổ điển đến Keynesian.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bronze text-2xl">◆</span>
                  <span className="text-foreground/90">
                    <strong>Phương pháp khoa học:</strong> Đưa phương pháp nghiên cứu khoa học vào 
                    kinh tế học thay vì chỉ dựa vào triết học thuần túy.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bronze text-2xl">◆</span>
                  <span className="text-foreground/90">
                    <strong>Ảnh hưởng chính sách:</strong> Các chính sách tự do thương mại, 
                    phi thuế quan hóa đều xuất phát từ tư tưởng cổ điển.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bronze text-2xl">◆</span>
                  <span className="text-foreground/90">
                    <strong>Di sản trí tuệ:</strong> Là cầu nối giữa triết học Khai sáng và 
                    khoa học xã hội hiện đại.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <PageNavigation
            nextPage={{
              path: "/characteristics",
              label: "Đặc điểm"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
