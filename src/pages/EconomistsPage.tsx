import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { EconomistCard } from "@/components/EconomistCard";
import { EconomistDetail, EconomistDetailData } from "@/components/EconomistDetail";
import { useState } from "react";
import adamSmithImg from "@/assets/adam-smith.jpg";
import davidRicardoImg from "@/assets/david-ricardo.jpg";
import johnStuartMillImg from "@/assets/john-stuart-mill.jpg";

const EconomistsPage = () => {
  const navigate = useNavigate();
  const [selectedEconomist, setSelectedEconomist] = useState<EconomistDetailData | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const economistsData: Record<string, EconomistDetailData> = {
    "adam-smith": {
      name: "Adam Smith",
      years: "1723-1790",
      title: "Cha đẻ của Kinh tế học Cổ điển",
      imageSrc: adamSmithImg,
      biography: "Adam Smith sinh tại Kirkcaldy, Scotland, là một trong những nhà triết học và kinh tế học có ảnh hưởng nhất trong lịch sử. Ông là giáo sư triết học đạo đức tại Đại học Glasgow và sau này trở thành gia sư cho Duke of Buccleuch. Trong thời gian du lịch châu Âu, Smith gặp gỡ nhiều nhà tư tưởng lớn của thời kỳ Khai sáng như Voltaire, François Quesnay và các nhà trọng nông. Tác phẩm 'The Wealth of Nations' (1776) của ông được xem là nền tảng của kinh tế học hiện đại.",
      majorWorks: [
        {
          title: "The Theory of Moral Sentiments",
          year: "1759",
          description: "Tác phẩm về triết học đạo đức, phân tích cảm xúc con người và cơ sở đạo đức của xã hội"
        },
        {
          title: "An Inquiry into the Nature and Causes of the Wealth of Nations",
          year: "1776",
          description: "Tác phẩm kinh điển về kinh tế học, phân tích nguồn gốc của sự giàu có quốc gia và vai trò của thị trường tự do"
        }
      ],
      keyIdeas: [
        "Bàn tay vô hình (Invisible Hand): Thị trường tự điều chỉnh thông qua lợi ích cá nhân mà không cần sự can thiệp của chính phủ",
        "Phân công lao động (Division of Labor): Tăng năng suất thông qua chuyên môn hóa và phân chia công việc",
        "Thương mại tự do: Ủng hộ việc bãi bỏ thuế quan và hạn chế thương mại",
        "Lợi ích cá nhân: Động lực kinh tế chính đến từ việc theo đuổi lợi ích riêng của mỗi người",
        "Vai trò hạn chế của chính phủ: Nhà nước chỉ nên đảm bảo quốc phòng, tư pháp và cơ sở hạ tầng công cộng"
      ],
      philosophicalInfluence: [
        "Chịu ảnh hưởng từ David Hume về chủ nghĩa kinh nghiệm và triết học đạo đức",
        "Kế thừa tư tưởng tự do cá nhân từ John Locke",
        "Chịu ảnh hưởng từ trường phái Trọng nông Pháp (Physiocrats) về trật tự tự nhiên",
        "Phát triển từ tư tưởng Khai sáng Scotland về lý trí và tiến bộ xã hội"
      ],
      legacy: "Adam Smith được tôn vinh là 'Cha đẻ của Kinh tế học' và tác phẩm của ông đã định hình nên tư tưởng kinh tế tự do thị trường trong suốt 2 thế kỷ. Khái niệm 'bàn tay vô hình' vẫn là nền tảng của kinh tế học tân cổ điển hiện đại. Ông ảnh hưởng sâu sắc đến David Ricardo, John Stuart Mill, và các nhà kinh tế học cổ điển sau này. Tư tưởng của Smith về thương mại tự do đã định hình chính sách kinh tế của nhiều quốc gia phát triển.",
      quotes: [
        "Không phải từ lòng nhân ái của người bán thịt, người làm rượu hay người làm bánh mà chúng ta có bữa tối, mà từ sự quan tâm đến lợi ích riêng của họ.",
        "Bàn tay vô hình của thị trường dẫn dắt mỗi cá nhân theo đuổi lợi ích riêng của mình nhưng lại tạo ra lợi ích chung cho toàn xã hội."
      ]
    },
    "david-ricardo": {
      name: "David Ricardo",
      years: "1772-1823",
      title: "Nhà lý thuyết Thương mại Quốc tế",
      imageSrc: davidRicardoImg,
      biography: "David Ricardo sinh trong một gia đình Do Thái giàu có ở London. Ông bắt đầu làm việc trong lĩnh vực tài chính từ tuổi 14 và nhanh chóng trở thành một trong những nhà đầu tư thành công nhất thời bấy giờ. Ricardo bắt đầu nghiên cứu kinh tế học sau khi đọc 'The Wealth of Nations' của Adam Smith vào năm 1799. Mặc dù không có học vị chính thức, ông trở thành một trong những nhà lý thuyết kinh tế quan trọng nhất, đặc biệt trong lĩnh vực thương mại quốc tế và phân phối thu nhập.",
      majorWorks: [
        {
          title: "On the Principles of Political Economy and Taxation",
          year: "1817",
          description: "Tác phẩm chính về lý thuyết giá trị, phân phối thu nhập, thuế và thương mại quốc tế"
        },
        {
          title: "Essay on the Influence of a Low Price of Corn on the Profits of Stock",
          year: "1815",
          description: "Phân tích về mối quan hệ giữa giá lương thực, địa tô và lợi nhuận"
        }
      ],
      keyIdeas: [
        "Lý thuyết lợi thế so sánh (Comparative Advantage): Các quốc gia nên chuyên môn hóa sản xuất hàng hóa mà họ có lợi thế tương đối, không nhất thiết phải lợi thế tuyệt đối",
        "Lý thuyết địa tô (Theory of Rent): Địa tô phát sinh từ sự khác biệt về độ màu mỡ của đất",
        "Lý thuyết giá trị lao động: Giá trị hàng hóa được quyết định bởi lượng lao động cần thiết để sản xuất",
        "Định luật lợi nhuận giảm dần: Lợi nhuận có xu hướng giảm theo thời gian do gia tăng dân số và khan hiếm đất đai",
        "Nguyên lý tương đương Ricardian: Thuế và vay nợ công có tác động kinh tế tương đương nhau"
      ],
      philosophicalInfluence: [
        "Kế thừa và phát triển tư tưởng của Adam Smith về phân công lao động và thương mại",
        "Chịu ảnh hưởng từ Jeremy Bentham về chủ nghĩa công lợi",
        "Ảnh hưởng từ Thomas Malthus về lý thuyết dân số",
        "Phát triển phương pháp diễn dịch trừu tượng trong kinh tế học"
      ],
      legacy: "Ricardo được coi là người sáng lập ra lý thuyết kinh tế hiện đại với phương pháp phân tích trừu tượng và logic chặt chẽ. Lý thuyết lợi thế so sánh của ông vẫn là nền tảng của kinh tế học quốc tế đến ngày nay. Ông ảnh hưởng trực tiếp đến John Stuart Mill và Karl Marx. Các công trình của Ricardo về phân phối thu nhập đã định hình cuộc tranh luận về bất bình đẳng kinh tế trong nhiều thế kỷ.",
      quotes: [
        "Giá trị của một hàng hóa phụ thuộc vào lượng lao động tương đối cần thiết để sản xuất ra nó.",
        "Lợi ích của thương mại không nằm ở chỗ mỗi nước xuất khẩu những gì mình sản xuất tốt nhất, mà ở chỗ mỗi nước xuất khẩu những gì mình sản xuất kém tệ nhất."
      ]
    },
    "john-stuart-mill": {
      name: "John Stuart Mill",
      years: "1806-1873",
      title: "Nhà kinh tế học và Triết học",
      imageSrc: johnStuartMillImg,
      biography: "John Stuart Mill sinh tại London trong một gia đình trí thức. Cha ông, James Mill, là một nhà triết học và bạn thân của Jeremy Bentham. Mill nhỏ được giáo dục nghiêm khắc theo phương pháp đặc biệt: học tiếng Hy Lạp từ 3 tuổi, Latin từ 8 tuổi, và đọc các tác phẩm triết học sâu sắc từ tuổi thiếu niên. Ông là một nhà tư tưởng đa tài, đóng góp quan trọng cho cả kinh tế học, triết học chính trị, logic học và đạo đức học. Mill cũng là người ủng hộ mạnh mẽ quyền phụ nữ và cải cách xã hội.",
      majorWorks: [
        {
          title: "Principles of Political Economy",
          year: "1848",
          description: "Tổng hợp và phát triển kinh tế học cổ điển, kết hợp với quan điểm cải cách xã hội"
        },
        {
          title: "On Liberty",
          year: "1859",
          description: "Tác phẩm kinh điển về tự do cá nhân và giới hạn quyền lực nhà nước"
        },
        {
          title: "Utilitarianism",
          year: "1863",
          description: "Phát triển và tinh chỉnh học thuyết công lợi của Bentham"
        },
        {
          title: "The Subjection of Women",
          year: "1869",
          description: "Lập luận mạnh mẽ cho quyền bình đẳng giới"
        }
      ],
      keyIdeas: [
        "Tổng hợp kinh tế cổ điển: Kết hợp tư tưởng của Smith và Ricardo với cải cách xã hội",
        "Phân biệt luật sản xuất và phân phối: Sản xuất tuân theo quy luật tự nhiên, nhưng phân phối có thể điều chỉnh theo ý muốn xã hội",
        "Kinh tế trạng thái dừng (Stationary State): Không nhất thiết phải tăng trưởng liên tục, có thể đạt trạng thái cân bằng bền vững",
        "Chủ nghĩa công lợi chất lượng: Phân biệt giữa khoái lạc cao cấp và thấp cấp",
        "Tự do cá nhân và giới hạn nhà nước: Nguyên tắc tổn hại (harm principle) trong can thiệp chính phủ"
      ],
      philosophicalInfluence: [
        "Kế thừa chủ nghĩa công lợi từ Jeremy Bentham nhưng bổ sung yếu tố chất lượng",
        "Chịu ảnh hưởng từ Harriet Taylor (vợ ông) về quyền phụ nữ và công bằng xã hội",
        "Tổng hợp kinh tế cổ điển của Smith và Ricardo với tư tưởng cải cách xã hội",
        "Phát triển chủ nghĩa tự do cá nhân với trách nhiệm xã hội"
      ],
      legacy: "Mill là nhà kinh tế học cổ điển cuối cùng và là cầu nối giữa kinh tế học cổ điển với kinh tế học tân cổ điển. Tác phẩm 'Principles of Political Economy' là sách giáo khoa kinh tế chủ đạo trong nửa sau thế kỷ 19. Triết học tự do của Mill ảnh hưởng sâu rộng đến tư tưởng chính trị phương Tây hiện đại. Ông là tiếng nói tiên phong cho quyền phụ nữ, tự do ngôn luận và dân chủ đại diện.",
      quotes: [
        "Tốt hơn là làm một con người không hài lòng hơn là một con heo hài lòng.",
        "Điều duy nhất mà quyền lực có thể được thực thi một cách hợp pháp đối với bất kỳ thành viên nào của một cộng đồng văn minh, trái với ý muốn của họ, là để ngăn chặn tổn hại đến người khác."
      ]
    }
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
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-accent/10"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Về trang chủ
        </Button>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
              👥 Các nhà kinh tế tiêu biểu
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Khám phá những nhân vật kiệt xuất đã hình thành nên trường phái Kinh tế học Cổ điển
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {economists.map((economist) => (
              <EconomistCard 
                key={economist.id} 
                {...economist}
                onViewDetail={() => handleViewDetail(economist.id)}
              />
            ))}
          </div>
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
