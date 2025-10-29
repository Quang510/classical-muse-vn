import { Navigation } from "@/components/Navigation";
import { HeroNavigation } from "@/components/HeroNavigation";
import { Section } from "@/components/Section";
import { EconomistCard } from "@/components/EconomistCard";
import { FeatureTile } from "@/components/FeatureTile";
import { Quiz } from "@/components/Quiz";
import { EconomistDetail, EconomistDetailData } from "@/components/EconomistDetail";
import { BentoCard } from "@/components/BentoCard";
import { TheoryDetail, TheoryDetailData } from "@/components/TheoryDetail";
import { economistsData } from "@/data/economistsData";
import { theoriesData } from "@/data/theoriesData";
import { useGsapFadeIn, useGsapStagger } from "@/hooks/useGsapAnimation";
import { useState } from "react";
import { 
  ScaleIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  ArrowPathIcon,
  LightBulbIcon,
  BookOpenIcon,
  ExclamationTriangleIcon,
  TrophyIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  BeakerIcon,
  SparklesIcon,
  BanknotesIcon,
  GlobeAltIcon,
  CubeIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import adamSmithImg from "@/assets/adam-smith.jpg";
import davidRicardoImg from "@/assets/david-ricardo.jpg";
import johnMillImg from "@/assets/john-stuart-mill.jpg";

const Index = () => {
  const heroRef = useGsapFadeIn();
  const cardsRef = useGsapStagger('.economist-card');
  const tilesRef = useGsapStagger('.feature-tile');
  
  const [selectedEconomist, setSelectedEconomist] = useState<EconomistDetailData | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const [selectedTheory, setSelectedTheory] = useState<TheoryDetailData | null>(null);
  const [theoryDetailOpen, setTheoryDetailOpen] = useState(false);

  const handleViewDetail = (economistKey: string) => {
    setSelectedEconomist(economistsData[economistKey]);
    setDetailOpen(true);
  };

  const handleViewTheory = (theoryKey: string) => {
    setSelectedTheory(theoriesData[theoryKey]);
    setTheoryDetailOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Simplified floating navbar - only shows after scroll */}
      <Navigation />

      <EconomistDetail 
        open={detailOpen} 
        onOpenChange={setDetailOpen} 
        data={selectedEconomist} 
      />

      <TheoryDetail
        open={theoryDetailOpen}
        onOpenChange={setTheoryDetailOpen}
        data={selectedTheory}
      />

      {/* Hero Navigation - Bento Grid */}
      <HeroNavigation onNavigate={scrollToSection} />

      {/* Hero Section */}
      <Section id="intro" emoji="🏛️" title="Giới thiệu chung">
        <div ref={heroRef} className="max-w-4xl mx-auto space-y-6 text-center">
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
            <div className="bg-card/90 rounded-xl p-6 border-2 border-bronze/20 shadow-[var(--shadow-paper)]">
              <h3 className="font-serif text-xl text-primary mb-3">Mục tiêu</h3>
              <p className="text-foreground/85">
                Tìm ra các "quy luật tự nhiên" chi phối nền kinh tế và xã hội
              </p>
            </div>
            <div className="bg-card/90 rounded-xl p-6 border-2 border-bronze/20 shadow-[var(--shadow-paper)]">
              <h3 className="font-serif text-xl text-primary mb-3">Tư tưởng cốt lõi</h3>
              <p className="text-foreground/85">
                Tự do kinh tế, cá nhân là trung tâm, thị trường tự điều tiết, lao động là nguồn gốc của cải
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* William Petty Section - NEW */}
      <Section id="petty" emoji="🧮" title="William Petty – Người mở đường" className="bg-bronze/5">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card/90 rounded-2xl p-8 border-2 border-bronze/30 shadow-[var(--shadow-elevated)]">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-bronze/40 mb-4 shadow-[var(--shadow-paper)]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/William_Petty.jpg/220px-William_Petty.jpg"
                    alt="William Petty"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-2">William Petty</h3>
                <p className="text-muted-foreground">1623 – 1687</p>
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
              <div className="bg-primary/5 rounded-lg p-6 border border-bronze/20 shadow-[var(--shadow-paper)]">
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

              <div className="bg-secondary/40 rounded-lg p-6 border border-bronze/20 shadow-[var(--shadow-paper)]">
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
      </Section>

      {/* Economists Section */}
      <Section id="economists" emoji="🧑‍🏫" title="Các nhà kinh tế tiêu biểu" className="bg-secondary/40">
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EconomistCard
            name="Adam Smith"
            years="1723–1790"
            title='"Cha đẻ của kinh tế học cổ điển"'
            work="The Wealth of Nations (1776)"
            ideas="Bàn tay vô hình, tự do kinh tế, giá trị do lao động tạo ra"
            influence="Chủ nghĩa duy lý, tự nhiên luận, đạo đức học Anh"
            imageSrc={adamSmithImg}
            className="economist-card"
            onViewDetail={() => handleViewDetail('adam-smith')}
          />
          <EconomistCard
            name="David Ricardo"
            years="1772–1823"
            title='"Người hệ thống hóa lý thuyết giá trị lao động"'
            work="Principles of Political Economy and Taxation (1817)"
            ideas="Giá trị lao động, lợi thế so sánh, phân phối lợi nhuận – địa tô – tiền công"
            influence="Phát triển học thuyết giá trị lao động của Adam Smith"
            imageSrc={davidRicardoImg}
            className="economist-card"
            onViewDetail={() => handleViewDetail('david-ricardo')}
          />
          <EconomistCard
            name="John Stuart Mill"
            years="1806–1873"
            title='"Nhà tư tưởng tự do và nhân văn"'
            work="Principles of Political Economy (1848)"
            ideas="Kết hợp tự do cá nhân với cải cách xã hội, nhấn mạnh đạo đức trong kinh tế học"
            influence="Chủ nghĩa tự do cổ điển, chủ nghĩa công lợi"
            imageSrc={johnMillImg}
            className="economist-card"
            onViewDetail={() => handleViewDetail('john-stuart-mill')}
          />
        </div>
      </Section>

      {/* Characteristics Section */}
      <Section id="characteristics" emoji="🧩" title="Đặc điểm cơ bản">
        <div ref={tilesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureTile
            icon={CurrencyDollarIcon}
            title="Lao động là thước đo giá trị"
            description="Giá trị hàng hóa được xác định bởi lượng lao động xã hội cần thiết để sản xuất ra nó"
            className="feature-tile"
          />
          <FeatureTile
            icon={ScaleIcon}
            title="Cơ chế thị trường tự điều tiết"
            description="Thị trường tự do với cung cầu cân bằng, không cần sự can thiệp của nhà nước"
            className="feature-tile"
          />
          <FeatureTile
            icon={UserGroupIcon}
            title="Cạnh tranh thúc đẩy hiệu quả"
            description="Cạnh tranh tự do giữa các cá nhân tạo ra hiệu quả xã hội cao nhất"
            className="feature-tile"
          />
          <FeatureTile
            icon={BeakerIcon}
            title="Quy luật kinh tế khách quan"
            description="Các quy luật kinh tế có tính tự nhiên, phổ biến giống như quy luật vật lý"
            className="feature-tile"
          />
          <FeatureTile
            icon={ArrowPathIcon}
            title="Chu trình P-D-T-T"
            description="Quá trình sản xuất – phân phối – trao đổi – tiêu dùng diễn ra liên tục"
            className="feature-tile"
          />
          <FeatureTile
            icon={LightBulbIcon}
            title="Lý trí và tự nhiên"
            description="Niềm tin vào khả năng của lý trí con người và trật tự tự nhiên"
            className="feature-tile"
          />
        </div>
      </Section>

      {/* Theories Bento Grid Section - NEW */}
      <Section id="theories" emoji="💡" title="Các lý thuyết cốt lõi" className="bg-gradient-to-b from-secondary/20 to-background">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Large card - Invisible Hand */}
          <BentoCard
            category="Cơ chế thị trường"
            title="Bàn tay vô hình"
            description="Thị trường tự điều chỉnh qua lợi ích cá nhân"
            icon={<SparklesIcon className="w-8 h-8" />}
            className="md:col-span-2 lg:row-span-2 min-h-[280px]"
            onClick={() => handleViewTheory('invisible-hand')}
          />
          
          {/* Medium cards */}
          <BentoCard
            category="Giá trị"
            title="Lý thuyết giá trị lao động"
            description="Giá trị hàng hóa được xác định bởi lao động"
            icon={<CurrencyDollarIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => handleViewTheory('labor-theory')}
          />
          
          <BentoCard
            category="Thương mại quốc tế"
            title="Lợi thế so sánh"
            description="Chuyên môn hóa dựa trên chi phí cơ hội"
            icon={<GlobeAltIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => handleViewTheory('comparative-advantage')}
          />
          
          {/* Large horizontal card */}
          <BentoCard
            category="Hiệu quả sản xuất"
            title="Phân công lao động"
            description="Chuyên môn hóa tăng năng suất"
            icon={<CubeIcon className="w-7 h-7" />}
            className="md:col-span-2 min-h-[200px]"
            onClick={() => handleViewTheory('division-labor')}
          />
          
          <BentoCard
            category="Phân phối thu nhập"
            title="Lý thuyết địa tô"
            description="Thu nhập từ đất đai và tài nguyên"
            icon={<BanknotesIcon className="w-7 h-7" />}
            className="min-h-[200px]"
            onClick={() => handleViewTheory('rent-theory')}
          />
          
          <BentoCard
            category="Chính sách kinh tế"
            title="Laissez-faire"
            description="Tự do kinh tế không can thiệp"
            icon={<BuildingLibraryIcon className="w-7 h-7" />}
            className="md:col-span-2 lg:col-span-1 min-h-[200px]"
            onClick={() => handleViewTheory('laissez-faire')}
          />
        </div>
      </Section>

      {/* Contributions & Limitations Section */}
      <Section id="contributions" emoji="🧪" title="Đóng góp và Hạn chế" className="bg-secondary/40">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contributions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-primary flex items-center gap-2">
              <TrophyIcon className="w-6 h-6 text-bronze" />
              Đóng góp
            </h3>
            <div className="space-y-4">
              <div className="bg-card/90 rounded-lg p-5 border-2 border-bronze/20 shadow-[var(--shadow-paper)]">
                <p className="text-foreground/90">
                  <strong className="text-bronze">•</strong> Đặt nền móng cho kinh tế học hiện đại 
                  với phương pháp nghiên cứu khoa học
                </p>
              </div>
              <div className="bg-card/90 rounded-lg p-5 border-2 border-bronze/20 shadow-[var(--shadow-paper)]">
                <p className="text-foreground/90">
                  <strong className="text-bronze">•</strong> Xây dựng học thuyết giá trị lao động – 
                  nền tảng cho nhiều trường phái sau này
                </p>
              </div>
              <div className="bg-card/90 rounded-lg p-5 border-2 border-bronze/20 shadow-[var(--shadow-paper)]">
                <p className="text-foreground/90">
                  <strong className="text-bronze">•</strong> Đưa ra cách nhìn khoa học về sản xuất, 
                  phân phối và trao đổi trong xã hội
                </p>
              </div>
              <div className="bg-card/90 rounded-lg p-5 border-2 border-bronze/20 shadow-[var(--shadow-paper)]">
                <p className="text-foreground/90">
                  <strong className="text-bronze">•</strong> Thúc đẩy tư tưởng tự do kinh tế, 
                  cá nhân và chủ nghĩa duy lý
                </p>
              </div>
            </div>
          </div>

          {/* Limitations */}
          <div className="space-y-6" id="limitations">
            <h3 className="text-2xl font-serif text-primary flex items-center gap-2">
              <ExclamationTriangleIcon className="w-6 h-6 text-destructive" />
              🧱 Hạn chế
            </h3>
            <div className="space-y-4">
              <div className="bg-card/90 rounded-lg p-5 border-2 border-destructive/20 shadow-[var(--shadow-paper)]">
                <p className="text-foreground/90">
                  <strong className="text-destructive">•</strong> Chưa thấy rõ mâu thuẫn giai cấp 
                  và bản chất bóc lột trong chủ nghĩa tư bản
                </p>
              </div>
              <div className="bg-card/90 rounded-lg p-5 border-2 border-destructive/20 shadow-[var(--shadow-paper)]">
                <p className="text-foreground/90">
                  <strong className="text-destructive">•</strong> Lý tưởng hóa cơ chế thị trường, 
                  bỏ qua các khủng hoảng chu kỳ
                </p>
              </div>
              <div className="bg-card/90 rounded-lg p-5 border-2 border-destructive/20 shadow-[var(--shadow-paper)]">
                <p className="text-foreground/90">
                  <strong className="text-destructive">•</strong> Thiếu yếu tố lịch sử – xã hội 
                  trong phân tích, coi quy luật kinh tế là bất biến
                </p>
              </div>
              <div className="bg-card/90 rounded-lg p-5 border-2 border-destructive/20 shadow-[var(--shadow-paper)]">
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
      <Section id="references" emoji="📚" title="Tài liệu tham khảo" className="bg-secondary/40">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/90 rounded-xl p-8 border-2 border-bronze/20 shadow-[var(--shadow-paper)]">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <BookOpenIcon className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                <span className="text-foreground/90">
                  Adam Smith (1776). <em>The Wealth of Nations</em>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BookOpenIcon className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                <span className="text-foreground/90">
                  David Ricardo (1817). <em>Principles of Political Economy and Taxation</em>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BookOpenIcon className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                <span className="text-foreground/90">
                  John Stuart Mill (1848). <em>Principles of Political Economy</em>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BookOpenIcon className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                <span className="text-foreground/90">
                  Karl Marx (1867). <em>Das Kapital</em>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BookOpenIcon className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
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
