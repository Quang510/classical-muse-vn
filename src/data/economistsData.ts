import { EconomistDetailData } from "@/components/EconomistDetail";
import adamSmithImg from "@/assets/adam-smith.jpg";
import davidRicardoImg from "@/assets/david-ricardo.jpg";
import johnMillImg from "@/assets/john-stuart-mill.jpg";

export const economistsData: Record<string, EconomistDetailData> = {
  "adam-smith": {
    name: "Adam Smith",
    years: "1723–1790",
    title: '"Cha đẻ của kinh tế học cổ điển"',
    imageSrc: adamSmithImg,
    biography:
      "Adam Smith sinh tại Scotland, là triết gia đạo đức và nhà kinh tế chính trị. Ông được đào tạo tại Đại học Glasgow và Oxford, sau đó trở thành giáo sư triết học đạo đức. Smith không chỉ là một nhà kinh tế xuất sắc mà còn là một triết gia sâu sắc, kết nối kinh tế học với đạo đức, luân lý và chính trị học. Tác phẩm của ông đặt nền móng cho tư tưởng tự do kinh tế và thị trường tự do, ảnh hưởng sâu rộng đến sự phát triển của chủ nghĩa tư bản hiện đại.",
    majorWorks: [
      {
        title: "The Theory of Moral Sentiments",
        vietnameseName: "Lý thuyết Tình cảm Đạo đức",
        year: "1759",
        description:
          "Khám phá bản chất của đạo đức con người, sự đồng cảm và các nguyên tắc đạo đức điều chỉnh hành vi xã hội. Đây là nền tảng triết học cho các tác phẩm kinh tế sau này của ông.",
      },
      {
        title: "An Inquiry into the Nature and Causes of the Wealth of Nations",
        vietnameseName: "Khảo cứu về Bản chất và Nguyên nhân của Sự giàu có của các Quốc gia",
        year: "1776",
        description:
          "Tác phẩm kinh điển đánh dấu sự ra đời của kinh tế học hiện đại. Phân tích phân công lao động, thị trường tự do, vai trò của lợi ích cá nhân, và khái niệm 'bàn tay vô hình' điều tiết nền kinh tế.",
      },
    ],
    keyIdeas: [
      "Bàn tay vô hình (Invisible Hand): Cơ chế thị trường tự điều chỉnh thông qua lợi ích cá nhân, dẫn đến lợi ích chung cho xã hội",
      "Phân công lao động: Chuyên môn hóa tăng năng suất và hiệu quả sản xuất",
      "Lý thuyết giá trị lao động: Giá trị hàng hóa được xác định bởi lượng lao động cần thiết để sản xuất",
      "Thị trường tự do: Tự do thương mại và cạnh tranh là động lực phát triển kinh tế",
      "Vai trò hạn chế của nhà nước: Nhà nước chỉ nên can thiệp tối thiểu, bảo vệ tài sản và duy trì trật tự pháp luật",
    ],
    philosophicalInfluence: [
      "Chủ nghĩa kinh nghiệm của David Hume - bạn thân và người thầy tinh thần",
      "Tư tưởng Khai sáng Scotland - nhấn mạnh lý trí, tiến bộ và khoa học",
      "Triết học đạo đức Anh - nghiên cứu bản chất của đức hạnh và đạo đức",
      "Tự nhiên luận - tin vào trật tự tự nhiên và quy luật tự nhiên trong xã hội",
    ],
    legacy:
      "Adam Smith được công nhận là 'Cha đẻ của kinh tế học hiện đại'. Tư tưởng của ông về thị trường tự do, vai trò của lợi ích cá nhân trong xã hội, và sự cần thiết hạn chế can thiệp của nhà nước đã trở thành nền tảng cho chủ nghĩa tự do kinh tế (economic liberalism) và ảnh hưởng sâu sắc đến chính sách kinh tế toàn cầu. Các nhà kinh tế sau này như David Ricardo, John Stuart Mill, và cả Karl Marx đều phát triển hoặc phê phán dựa trên nền tảng lý thuyết của Smith.",
    quotes: [
      "It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.",
      "The real tragedy of the poor is the poverty of their aspirations.",
      "Labour was the first price, the original purchase - money that was paid for all things.",
    ],
  },
  "david-ricardo": {
    name: "David Ricardo",
    years: "1772–1823",
    title: '"Người hệ thống hóa lý thuyết giá trị lao động"',
    imageSrc: davidRicardoImg,
    biography:
      "David Ricardo sinh trong một gia đình Do Thái giàu có ở London. Ban đầu làm việc trong lĩnh vực tài chính và trở thành một nhà đầu tư chứng khoán thành công. Sau khi đọc tác phẩm của Adam Smith, Ricardo bắt đầu quan tâm đến kinh tế học và trở thành một trong những nhà kinh tế có ảnh hưởng nhất thế kỷ 19. Ông phát triển các lý thuyết về giá trị, phân phối thu nhập, và thương mại quốc tế, đặc biệt là lý thuyết lợi thế so sánh - một trong những đóng góp quan trọng nhất cho kinh tế học.",
    majorWorks: [
      {
        title: "On the Principles of Political Economy and Taxation",
        vietnameseName: "Về các Nguyên lý Kinh tế Chính trị và Thuế khóa",
        year: "1817",
        description:
          "Tác phẩm chính của Ricardo, trình bày một cách hệ thống lý thuyết giá trị lao động, phân phối thu nhập giữa địa chủ, tư bản và công nhân, cũng như lý thuyết về địa tô (rent) và thương mại quốc tế.",
      },
      {
        title: "Essay on the Influence of a Low Price of Corn on the Profits of Stock",
        vietnameseName: "Tiểu luận về Ảnh hưởng của Giá Ngũ cốc Thấp đến Lợi nhuận Vốn",
        year: "1815",
        description:
          "Phân tích mối quan hệ giữa giá lương thực, địa tô và lợi nhuận tư bản, đặt nền móng cho lý thuyết phân phối thu nhập.",
      },
    ],
    keyIdeas: [
      "Lý thuyết giá trị lao động: Giá trị hàng hóa được xác định bởi lượng lao động cần thiết để sản xuất, bao gồm cả lao động trực tiếp và gián tiếp",
      "Lợi thế so sánh (Comparative Advantage): Các quốc gia nên chuyên môn hóa sản xuất hàng hóa mà họ có lợi thế tương đối, kể cả khi không có lợi thế tuyệt đối",
      "Lý thuyết địa tô: Địa tô phát sinh từ độ màu mỡ khác nhau của đất, không phải do sức lao động",
      "Phân phối thu nhập: Phân tích mâu thuẫn về phân phối giữa địa chủ, tư bản gia và công nhân",
      "Quy luật lợi nhuận giảm dần: Khi dân số tăng, đất đai hạn chế dẫn đến lợi nhuận giảm",
    ],
    philosophicalInfluence: [
      "Kế thừa và phát triển lý thuyết giá trị lao động của Adam Smith",
      "Phương pháp phân tích logic và trừu tượng - đặt nền móng cho kinh tế học toán học",
      "Ảnh hưởng của Thomas Malthus về dân số và tài nguyên",
      "Chủ nghĩa tự do về thương mại quốc tế",
    ],
    legacy:
      "Ricardo được coi là người đặt nền móng cho phân tích kinh tế hiện đại với phương pháp logic chặt chẽ và trừu tượng hóa. Lý thuyết lợi thế so sánh của ông vẫn là nền tảng cho lý thuyết thương mại quốc tế đến ngày nay. Karl Marx kế thừa và phát triển lý thuyết giá trị lao động của Ricardo để xây dựng lý thuyết giá trị thặng dư. Các nhà kinh tế tân cổ điển sau này cũng dựa vào phương pháp phân tích của Ricardo để phát triển mô hình kinh tế toán học.",
    quotes: [
      "The interest of the landlords is always opposed to the interest of every other class in the community.",
      "Profits depend upon the cost of production of food.",
      "Labour, like all other things which are purchased and sold, has its natural and its market price.",
    ],
  },
  "john-stuart-mill": {
    name: "John Stuart Mill",
    years: "1806–1873",
    title: '"Nhà tư tưởng tự do và nhân văn"',
    imageSrc: johnMillImg,
    biography:
      "John Stuart Mill sinh ra trong một gia đình trí thức, là con trai của James Mill - một nhà kinh tế và triết học nổi tiếng. Từ nhỏ, ông được cha giáo dục rất nghiêm khắc theo phương pháp Bentham. Mill không chỉ là nhà kinh tế mà còn là triết gia, nhà luận lý học và nhà tư tưởng chính trị tiến bộ nhất thế kỷ 19. Ông ủng hộ quyền bình đẳng của phụ nữ, tự do ngôn luận, và cải cách xã hội trong khi vẫn duy trì niềm tin vào thị trường tự do.",
    majorWorks: [
      {
        title: "A System of Logic",
        vietnameseName: "Hệ thống Logic",
        year: "1843",
        description:
          "Công trình về logic học và phương pháp khoa học, đặt nền móng cho chủ nghĩa kinh nghiệm và phương pháp quy nạp trong khoa học xã hội.",
      },
      {
        title: "Principles of Political Economy",
        vietnameseName: "Các Nguyên lý Kinh tế Chính trị",
        year: "1848",
        description:
          "Tổng kết và mở rộng kinh tế học cổ điển. Mill phân biệt rõ giữa quy luật sản xuất (bất biến) và quy luật phân phối (có thể thay đổi), mở ra khả năng cải cách xã hội.",
      },
      {
        title: "On Liberty",
        vietnameseName: "Về Tự do",
        year: "1859",
        description:
          "Tác phẩm kinh điển về tự do cá nhân, bảo vệ quyền tự do ngôn luận và hành động miễn là không gây hại cho người khác.",
      },
      {
        title: "Utilitarianism",
        vietnameseName: "Chủ nghĩa Công lợi",
        year: "1861",
        description:
          "Phát triển chủ nghĩa công lợi (utilitarianism), nhấn mạnh chất lượng hạnh phúc chứ không chỉ số lượng.",
      },
      {
        title: "The Subjection of Women",
        vietnameseName: "Sự Đàn áp Phụ nữ",
        year: "1869",
        description:
          "Ủng hộ mạnh mẽ quyền bình đẳng của phụ nữ, được coi là một trong những tác phẩm nữ quyền sớm nhất.",
      },
    ],
    keyIdeas: [
      "Kết hợp tự do kinh tế với công bằng xã hội: Thị trường tự do trong sản xuất nhưng cần cải cách trong phân phối",
      "Chủ nghĩa công lợi (Utilitarianism): Hành động đúng là hành động mang lại hạnh phúc lớn nhất cho số đông",
      "Phân biệt giữa quy luật sản xuất và phân phối: Sản xuất tuân theo quy luật tự nhiên, nhưng phân phối có thể thay đổi theo ý muốn xã hội",
      "Tự do cá nhân: Bảo vệ quyền tự do ngôn luận, tư tưởng và hành động của cá nhân",
      "Vai trò nhà nước: Nhà nước có thể can thiệp để bảo vệ người yếu thế và cung cấp hàng hóa công cộng",
    ],
    philosophicalInfluence: [
      "Chủ nghĩa kinh nghiệm của John Locke và David Hume",
      "Chủ nghĩa công lợi của Jeremy Bentham - nhưng phát triển thêm về chất lượng hạnh phúc",
      "Chủ nghĩa lãng mạn và tư tưởng xã hội chủ nghĩa của thế kỷ 19",
      "Ảnh hưởng của vợ ông - Harriet Taylor - về nữ quyền và công bằng xã hội",
    ],
    legacy:
      "John Stuart Mill là nhà tư tưởng tự do (liberalism) quan trọng nhất thế kỷ 19, cầu nối giữa kinh tế học cổ điển và kinh tế học hiện đại. Ông là người đầu tiên kết hợp tư tưởng tự do kinh tế với quan tâm về công bằng xã hội, mở đường cho nhà nước phúc lợi hiện đại. Tác phẩm 'On Liberty' vẫn là nền tảng của tư tưởng tự do dân chủ ngày nay. Mill cũng là người tiên phong trong phong trào nữ quyền và cải cách xã hội.",
    quotes: [
      "The only freedom which deserves the name is that of pursuing our own good in our own way.",
      "Over himself, over his own body and mind, the individual is sovereign.",
      "The worth of a State, in the long run, is the worth of the individuals composing it.",
      "It is better to be a human being dissatisfied than a pig satisfied.",
    ],
  },
};
