import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { EconomistCard } from "@/components/EconomistCard";
import { FeatureTile } from "@/components/FeatureTile";
import { Quiz } from "@/components/Quiz";
import { 
  TrendingUp, 
  Scale, 
  Users, 
  Target, 
  Workflow,
  BookOpen,
  AlertCircle,
  Lightbulb,
  Award
} from "lucide-react";
import adamSmithImg from "@/assets/adam-smith.jpg";
import davidRicardoImg from "@/assets/david-ricardo.jpg";
import johnMillImg from "@/assets/john-stuart-mill.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Section id="intro" emoji="🏛️" title="Giới thiệu chung">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
            Trường phái Kinh tế học Cổ điển ra đời trong bối cảnh cách mạng công nghiệp ở Anh 
            thế kỷ XVIII–XIX, đánh dấu sự chuyển mình từ xã hội phong kiến sang chủ nghĩa tư bản 
            và sự hình thành của khoa học hiện đại.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-foreground/80">
            Các nhà kinh tế cổ điển tin rằng con người có thể hiểu và điều khiển trật tự tự nhiên 
            thông qua lý trí. Kinh tế học không chỉ là môn khoa học độc lập mà còn là một nhánh 
            của triết học đạo đức và chính trị.
          </p>
          <div className="grid md:grid-cols-2 gap-4 pt-6">
            <div className="bg-card/80 rounded-xl p-6 border border-accent/20">
              <h3 className="font-serif text-xl text-primary mb-3">Mục tiêu</h3>
              <p className="text-foreground/80">
                Tìm ra các "quy luật tự nhiên" chi phối nền kinh tế và xã hội
              </p>
            </div>
            <div className="bg-card/80 rounded-xl p-6 border border-accent/20">
              <h3 className="font-serif text-xl text-primary mb-3">Tư tưởng cốt lõi</h3>
              <p className="text-foreground/80">
                Tự do kinh tế, cá nhân là trung tâm, thị trường tự điều tiết, lao động là nguồn gốc của cải
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Economists Section */}
      <Section id="economists" emoji="🧑‍🏫" title="Các nhà kinh tế tiêu biểu" className="bg-secondary/30">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EconomistCard
            name="Adam Smith"
            years="1723–1790"
            title='"Cha đẻ của kinh tế học cổ điển"'
            work="The Wealth of Nations (1776)"
            ideas="Bàn tay vô hình, tự do kinh tế, giá trị do lao động tạo ra"
            influence="Chủ nghĩa duy lý, tự nhiên luận, đạo đức học Anh"
            imageSrc={adamSmithImg}
          />
          <EconomistCard
            name="David Ricardo"
            years="1772–1823"
            title='"Người hệ thống hóa lý thuyết giá trị lao động"'
            work="Principles of Political Economy and Taxation (1817)"
            ideas="Giá trị lao động, lợi thế so sánh, phân phối lợi nhuận – địa tô – tiền công"
            influence="Phát triển học thuyết giá trị lao động của Adam Smith"
            imageSrc={davidRicardoImg}
          />
          <EconomistCard
            name="John Stuart Mill"
            years="1806–1873"
            title='"Nhà tư tưởng tự do và nhân văn"'
            work="Principles of Political Economy (1848)"
            ideas="Kết hợp tự do cá nhân với cải cách xã hội, nhấn mạnh đạo đức trong kinh tế học"
            influence="Chủ nghĩa tự do cổ điển, chủ nghĩa công lợi"
            imageSrc={johnMillImg}
          />
        </div>
      </Section>

      {/* Characteristics Section */}
      <Section id="characteristics" emoji="🧩" title="Đặc điểm cơ bản">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureTile
            icon={TrendingUp}
            title="Lao động là thước đo giá trị"
            description="Giá trị hàng hóa được xác định bởi lượng lao động xã hội cần thiết để sản xuất ra nó"
          />
          <FeatureTile
            icon={Scale}
            title="Cơ chế thị trường tự điều tiết"
            description="Thị trường tự do với cung cầu cân bằng, không cần sự can thiệp của nhà nước"
          />
          <FeatureTile
            icon={Users}
            title="Cạnh tranh thúc đẩy hiệu quả"
            description="Cạnh tranh tự do giữa các cá nhân tạo ra hiệu quả xã hội cao nhất"
          />
          <FeatureTile
            icon={Target}
            title="Quy luật kinh tế khách quan"
            description="Các quy luật kinh tế có tính tự nhiên, phổ biến giống như quy luật vật lý"
          />
          <FeatureTile
            icon={Workflow}
            title="Chu trình P-D-T-T"
            description="Quá trình sản xuất – phân phối – trao đổi – tiêu dùng diễn ra liên tục"
          />
          <FeatureTile
            icon={Lightbulb}
            title="Lý trí và tự nhiên"
            description="Niềm tin vào khả năng của lý trí con người và trật tự tự nhiên"
          />
        </div>
      </Section>

      {/* Contributions & Limitations Section */}
      <Section id="contributions" emoji="🧪" title="Đóng góp và Hạn chế" className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contributions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-primary flex items-center gap-2">
              <Award className="w-6 h-6 text-accent" />
              Đóng góp
            </h3>
            <div className="space-y-4">
              <div className="bg-card/80 rounded-lg p-5 border border-accent/20">
                <p className="text-foreground/90">
                  <strong className="text-accent">•</strong> Đặt nền móng cho kinh tế học hiện đại 
                  với phương pháp nghiên cứu khoa học
                </p>
              </div>
              <div className="bg-card/80 rounded-lg p-5 border border-accent/20">
                <p className="text-foreground/90">
                  <strong className="text-accent">•</strong> Xây dựng học thuyết giá trị lao động – 
                  nền tảng cho nhiều trường phái sau này
                </p>
              </div>
              <div className="bg-card/80 rounded-lg p-5 border border-accent/20">
                <p className="text-foreground/90">
                  <strong className="text-accent">•</strong> Đưa ra cách nhìn khoa học về sản xuất, 
                  phân phối và trao đổi trong xã hội
                </p>
              </div>
              <div className="bg-card/80 rounded-lg p-5 border border-accent/20">
                <p className="text-foreground/90">
                  <strong className="text-accent">•</strong> Thúc đẩy tư tưởng tự do kinh tế, 
                  cá nhân và chủ nghĩa duy lý
                </p>
              </div>
            </div>
          </div>

          {/* Limitations */}
          <div className="space-y-6" id="limitations">
            <h3 className="text-2xl font-serif text-primary flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-destructive" />
              🧱 Hạn chế
            </h3>
            <div className="space-y-4">
              <div className="bg-card/80 rounded-lg p-5 border border-destructive/20">
                <p className="text-foreground/90">
                  <strong className="text-destructive">•</strong> Chưa thấy rõ mâu thuẫn giai cấp 
                  và bản chất bóc lột trong chủ nghĩa tư bản
                </p>
              </div>
              <div className="bg-card/80 rounded-lg p-5 border border-destructive/20">
                <p className="text-foreground/90">
                  <strong className="text-destructive">•</strong> Lý tưởng hóa cơ chế thị trường, 
                  bỏ qua các khủng hoảng chu kỳ
                </p>
              </div>
              <div className="bg-card/80 rounded-lg p-5 border border-destructive/20">
                <p className="text-foreground/90">
                  <strong className="text-destructive">•</strong> Thiếu yếu tố lịch sử – xã hội 
                  trong phân tích, coi quy luật kinh tế là bất biến
                </p>
              </div>
              <div className="bg-card/80 rounded-lg p-5 border border-destructive/20">
                <p className="text-foreground/90">
                  <strong className="text-destructive">•</strong> Quan niệm tĩnh về giá trị, 
                  chưa xem xét động lực phát triển của lịch sử
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section id="philosophy" emoji="🔗" title="Ảnh hưởng triết học">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-card/80 rounded-xl p-8 border border-accent/20">
            <h3 className="text-xl font-serif text-primary mb-4">Nguồn gốc tư tưởng</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Kinh tế học cổ điển có nguồn gốc sâu xa từ các trào lưu triết học Khai sáng châu Âu:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">◆</span>
                <span><strong>Chủ nghĩa duy lý</strong> (Descartes, Leibniz): tin vào khả năng nhận thức của lý trí con người</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">◆</span>
                <span><strong>Tự nhiên luận</strong> (Newton, Locke): vũ trụ và xã hội vận hành theo các quy luật tự nhiên</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">◆</span>
                <span><strong>Triết học đạo đức Anh</strong>: nhấn mạnh lợi ích cá nhân và sự hài hòa xã hội</span>
              </li>
            </ul>
          </div>

          <div className="bg-card/80 rounded-xl p-8 border border-teal/20">
            <h3 className="text-xl font-serif text-primary mb-4">Niềm tin cốt lõi</h3>
            <p className="text-foreground/90 leading-relaxed">
              Trường phái cổ điển thể hiện niềm tin sâu sắc vào <strong className="text-accent">trật tự tự nhiên</strong> 
              {" "}và <strong className="text-accent">lý trí con người</strong>. Họ cho rằng nếu để cho thị trường 
              tự do hoạt động, nền kinh tế sẽ tự động cân bằng và phát triển, như một cỗ máy vũ trụ hoàn hảo.
            </p>
          </div>

          <div className="bg-destructive/5 rounded-xl p-8 border border-destructive/20">
            <h3 className="text-xl font-serif text-primary mb-4">Phê phán của Marx</h3>
            <p className="text-foreground/90 leading-relaxed">
              <strong className="text-destructive">Karl Marx</strong> kế thừa học thuyết giá trị lao động 
              nhưng phê phán sâu sắc trường phái cổ điển. Ông chỉ ra rằng họ đã bỏ qua <strong>bản chất lịch sử</strong> 
              {" "}của các quy luật kinh tế và <strong>mâu thuẫn giai cấp</strong> trong xã hội tư bản chủ nghĩa. 
              Marx chuyển từ duy vật cơ giới sang <strong className="text-destructive">duy vật biện chứng – lịch sử</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* Historical Impact Section */}
      <Section id="impact" emoji="🔭" title="Ảnh hưởng lịch sử và so sánh" className="bg-secondary/30">
        <div className="max-w-5xl mx-auto space-y-8">
          <p className="text-lg text-center text-foreground/90 leading-relaxed">
            Classical Economics mở đường cho sự phát triển của kinh tế học tân cổ điển (Neoclassical) 
            và kinh tế học Marxist, tạo nên hai hướng đi lớn của tư tưởng kinh tế hiện đại.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-accent text-accent-foreground">
                  <th className="px-6 py-4 text-left font-serif text-lg">Tiêu chí</th>
                  <th className="px-6 py-4 text-left font-serif text-lg">Kinh tế học cổ điển</th>
                  <th className="px-6 py-4 text-left font-serif text-lg">Kinh tế học Marxist</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-primary">Cơ sở giá trị</td>
                  <td className="px-6 py-4 text-foreground/90">Lao động</td>
                  <td className="px-6 py-4 text-foreground/90">Lao động + giá trị thặng dư</td>
                </tr>
                <tr className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-primary">Quan điểm về nhà nước</td>
                  <td className="px-6 py-4 text-foreground/90">Không can thiệp</td>
                  <td className="px-6 py-4 text-foreground/90">Điều tiết xã hội</td>
                </tr>
                <tr className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-primary">Triết học nền tảng</td>
                  <td className="px-6 py-4 text-foreground/90">Duy lý – tự nhiên luận</td>
                  <td className="px-6 py-4 text-foreground/90">Duy vật biện chứng – lịch sử</td>
                </tr>
                <tr className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-primary">Mục tiêu</td>
                  <td className="px-6 py-4 text-foreground/90">Tự do kinh tế cá nhân</td>
                  <td className="px-6 py-4 text-foreground/90">Giải phóng con người khỏi bóc lột</td>
                </tr>
                <tr className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-primary">Hình ảnh xã hội lý tưởng</td>
                  <td className="px-6 py-4 text-foreground/90">Cạnh tranh hoàn hảo</td>
                  <td className="px-6 py-4 text-foreground/90">Cộng đồng không giai cấp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Quiz Section */}
      <Section id="quiz" emoji="🎯" title="Kiểm tra kiến thức">
        <div className="max-w-3xl mx-auto">
          <Quiz />
        </div>
      </Section>

      {/* References Section */}
      <Section id="references" emoji="📚" title="Tài liệu tham khảo" className="bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 rounded-xl p-8 border border-accent/20">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground/90">
                  Adam Smith (1776). <em>The Wealth of Nations</em>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground/90">
                  David Ricardo (1817). <em>Principles of Political Economy and Taxation</em>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground/90">
                  John Stuart Mill (1848). <em>Principles of Political Economy</em>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground/90">
                  Karl Marx (1867). <em>Das Kapital</em>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground/90">
                  Bài giảng Triết học Mác – Lênin, FPT University.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            Trần Quang – Triết học 2025 – FPT University
          </p>
          <p className="text-xs opacity-75 mt-2">
            Đồ án môn học: Triết học Mác – Lênin
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
