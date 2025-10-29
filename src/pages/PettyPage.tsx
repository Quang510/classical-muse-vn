import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import williamPettyImg from "@/assets/william-petty.jpg";
import {
  AcademicCapIcon,
  BookOpenIcon,
  LightBulbIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const PettyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 hover:bg-gold/10"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Quay lại trang chủ
        </Button>

        <div className="space-y-8">
          <div className="bg-card/90 rounded-2xl p-8 shadow-[var(--shadow-large)] border-2 border-bronze/30">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-bronze/40 mb-4 shadow-[var(--shadow-medium)]">
                  <img 
                    src={williamPettyImg}
                    alt="William Petty"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-3xl font-serif text-primary mb-2">William Petty</h1>
                <p className="text-muted-foreground text-lg">1623 – 1687</p>
                <p className="text-bronze font-medium italic mt-2">"Cha đẻ kinh tế chính trị học"</p>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="text-xl font-serif text-primary mb-3 flex items-center gap-2">
                    <AcademicCapIcon className="w-6 h-6 text-bronze" />
                    Vai trò lịch sử
                  </h4>
                  <p className="text-foreground/90 leading-relaxed">
                    William Petty được xem là <strong className="text-bronze">người sáng lập kinh tế chính trị học cổ điển</strong>, 
                    đi trước Adam Smith gần một thế kỷ. Ông là người đầu tiên áp dụng phương pháp khoa học định lượng vào 
                    nghiên cứu kinh tế, đặt nền móng cho lý thuyết giá trị lao động và phân tích thống kê kinh tế.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-serif text-primary mb-3 flex items-center gap-2">
                    <BookOpenIcon className="w-6 h-6 text-bronze" />
                    Tác phẩm chính
                  </h4>
                  <ul className="space-y-2 text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="text-bronze mt-1">◆</span>
                      <span><em>A Treatise of Taxes and Contributions</em> (1662) - Phân tích thuế và đất đai</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bronze mt-1">◆</span>
                      <span><em>Political Arithmetic</em> (1676) - Phương pháp thống kê kinh tế</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bronze mt-1">◆</span>
                      <span><em>Quantulumcumque concerning Money</em> (1682) - Lý thuyết tiền tệ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-bronze/20">
              <div className="bg-primary/5 rounded-lg p-6 border border-bronze/20 shadow-[var(--shadow-medium)]">
                <h4 className="text-lg font-serif text-primary mb-4 flex items-center gap-2">
                  <LightBulbIcon className="w-5 h-5 text-bronze" />
                  Đóng góp nổi bật
                </h4>
                <ul className="space-y-3 text-sm text-foreground/90">
                  <li className="flex items-start gap-2">
                    <span className="text-bronze font-bold">•</span>
                    <span><strong>Lý thuyết giá trị lao động:</strong> Đặt nền móng cho quan niệm lao động là nguồn gốc của giá trị</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bronze font-bold">•</span>
                    <span><strong>Political Arithmetic:</strong> Phát triển phương pháp định lượng và thống kê trong kinh tế</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bronze font-bold">•</span>
                    <span><strong>Phân tích địa tô:</strong> Phân biệt giữa rent (địa tô) và giá trị đất đai</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bronze font-bold">•</span>
                    <span><strong>Full employment:</strong> Đưa ra khái niệm việc làm đầy đủ trong nền kinh tế</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/40 rounded-lg p-6 border border-bronze/20 shadow-[var(--shadow-medium)]">
                <h4 className="text-lg font-serif text-primary mb-4 flex items-center gap-2">
                  <ChartBarIcon className="w-5 h-5 text-bronze" />
                  Ảnh hưởng
                </h4>
                <div className="space-y-3 text-sm">
                  <p className="text-foreground/90">
                    <strong className="text-bronze">Karl Marx</strong> thừa nhận Petty là <em>"một trong những nhà điều tra 
                    kinh tế sáng tạo nhất"</em> và người đặt nền móng cho học thuyết giá trị thặng dư.
                  </p>
                  <p className="text-foreground/90">
                    <strong className="text-bronze">Adam Smith</strong> và <strong className="text-bronze">David Ricardo</strong> 
                    {" "}kế thừa và phát triển phương pháp cũng như lý thuyết giá trị lao động của Petty.
                  </p>
                  <p className="text-foreground/90">
                    Công trình của Petty đánh dấu sự chuyển đổi từ <strong>trọng thương chủ nghĩa</strong> sang 
                    <strong> kinh tế chính trị học khoa học</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PettyPage;
