import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const PhilosophyPage = () => {
  const navigate = useNavigate();

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

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
              Triết học cơ bản
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          </div>

          <div className="space-y-8">
            <Card className="border-gold/30 bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-4">Chủ nghĩa Tự do Cá nhân</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Tin tưởng vào quyền tự do và quyền lợi cá nhân. Mỗi người có quyền theo đuổi lợi ích của mình, 
                  và khi mọi người làm như vậy, xã hội sẽ được hưởng lợi thông qua "bàn tay vô hình" của thị trường.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Tự do kinh tế là điều kiện tiên quyết cho tự do chính trị và phát triển cá nhân.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/30 bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-4">Chủ nghĩa Tự nhiên</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Xã hội và nền kinh tế tuân theo các quy luật tự nhiên giống như thế giới vật lý. 
                  Những quy luật này hoạt động tốt nhất khi không bị can thiệp.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Trật tự tự nhiên của thị trường luôn hiệu quả hơn sự can thiệp nhân tạo của chính phủ.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/30 bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-4">Chủ nghĩa Duy lý</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Con người là những người ra quyết định hợp lý, luôn tìm cách tối đa hóa lợi ích của mình 
                  dựa trên thông tin có sẵn.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Sử dụng logic và lý luận để hiểu các hiện tượng kinh tế, thay vì dựa vào truyền thống hay mê tín.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/30 bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-4">Chủ nghĩa Lạc quan Kinh tế</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Tin rằng thị trường tự do sẽ dẫn đến thịnh vượng chung và cải thiện đời sống cho tất cả mọi người.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Tiến bộ kinh tế là tất yếu khi cho phép các lực lượng thị trường hoạt động tự do.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/30 bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-4">Đạo đức Thực dụng</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Các chính sách nên được đánh giá dựa trên kết quả thực tế của chúng, 
                  đặc biệt là khả năng tăng cường hạnh phúc và phúc lợi chung.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Mục tiêu cuối cùng là "hạnh phúc lớn nhất cho số đông người nhất" - nguyên tắc cơ bản của chủ nghĩa công lợi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophyPage;
