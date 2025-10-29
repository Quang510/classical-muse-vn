import { TheoryDetailData } from "@/components/TheoryDetail";

export const theoriesData: Record<string, TheoryDetailData> = {
  "invisible-hand": {
    category: "Cơ chế thị trường",
    title: "Bàn tay vô hình",
    description: "Thị trường tự điều chỉnh qua lợi ích cá nhân",
    fullDescription:
      "Khái niệm 'bàn tay vô hình' của Adam Smith mô tả cơ chế tự điều tiết của thị trường tự do. Theo đó, khi mỗi cá nhân theo đuổi lợi ích riêng của mình trong một thị trường tự do cạnh tranh, họ vô tình đóng góp vào lợi ích chung của xã hội như thể có một 'bàn tay vô hình' đang điều phối. Người bán muốn tối đa hóa lợi nhuận nên họ sản xuất những gì người tiêu dùng muốn; người mua tìm kiếm giá tốt nhất nên thúc đẩy cạnh tranh và hiệu quả.",
    keyPoints: [
      "Cá nhân theo đuổi lợi ích riêng nhưng vô tình mang lại lợi ích chung",
      "Thị trường tự điều chỉnh giá cả thông qua cung và cầu",
      "Cạnh tranh tự do dẫn đến phân bổ nguồn lực hiệu quả",
      "Không cần sự can thiệp của chính phủ trong thị trường lý tưởng",
    ],
    examples: [
      "Người bán bánh mì không làm bánh vì muốn cho người khác ăn, mà vì muốn kiếm tiền. Nhưng kết quả là người dân có bánh mì để ăn với giá hợp lý.",
      "Nông dân trồng lúa vì lợi nhuận, nhưng xã hội có lương thực. Cạnh tranh giữa các nông dân khiến giá cả hợp lý và chất lượng được cải thiện.",
    ],
    relatedConcepts: ["Tự do thị trường", "Laissez-faire", "Cạnh tranh hoàn hảo", "Phân bổ nguồn lực"],
  },
  "labor-theory": {
    category: "Giá trị",
    title: "Lý thuyết giá trị lao động",
    description: "Giá trị hàng hóa được xác định bởi lao động",
    fullDescription:
      "Lý thuyết giá trị lao động cho rằng giá trị của một hàng hóa được xác định bởi tổng lượng lao động xã hội cần thiết để sản xuất ra nó. William Petty, Adam Smith và đặc biệt là David Ricardo đã phát triển lý thuyết này. Theo Ricardo, giá trị không phụ thuộc vào công dụng (use value) mà phụ thuộc vào lượng lao động bỏ ra (exchange value). Lý thuyết này sau đó được Karl Marx kế thừa và phát triển thành học thuyết giá trị thặng dư.",
    keyPoints: [
      "Giá trị hàng hóa = lượng lao động xã hội cần thiết để sản xuất",
      "Bao gồm cả lao động trực tiếp và lao động gián tiếp (vật tư, máy móc)",
      "Phân biệt giá trị sử dụng (use value) và giá trị trao đổi (exchange value)",
      "Là nền tảng cho lý thuyết giá trị thặng dư của Marx",
    ],
    examples: [
      "Một chiếc áo có giá trị vì phải mất 5 giờ lao động để sản xuất (kể cả thời gian làm vải, cắt may, vận chuyển).",
      "Kim cương đắt hơn nước không phải vì hữu ích hơn, mà vì cần nhiều lao động hơn để khai thác và chế tác.",
    ],
    relatedConcepts: ["Giá trị thặng dư", "Lao động xã hội", "Giá cả tự nhiên", "William Petty"],
  },
  "comparative-advantage": {
    category: "Thương mại quốc tế",
    title: "Lợi thế so sánh",
    description: "Chuyên môn hóa dựa trên chi phí cơ hội",
    fullDescription:
      "Lý thuyết lợi thế so sánh của David Ricardo là một trong những đóng góp quan trọng nhất cho kinh tế học. Lý thuyết này chỉ ra rằng ngay cả khi một quốc gia có lợi thế tuyệt đối trong sản xuất tất cả hàng hóa, vẫn có lợi khi chuyên môn hóa sản xuất hàng hóa mà họ có lợi thế so sánh (chi phí cơ hội thấp nhất) và trao đổi với quốc gia khác. Điều này tạo ra lợi ích cho cả hai bên thông qua thương mại tự do.",
    keyPoints: [
      "Chuyên môn hóa theo lợi thế so sánh, không phải lợi thế tuyệt đối",
      "Chi phí cơ hội là yếu tố quyết định",
      "Thương mại tự do mang lại lợi ích cho tất cả các bên tham gia",
      "Nền tảng lý thuyết cho toàn cầu hóa và phân công lao động quốc tế",
    ],
    examples: [
      "Bồ Đào Nha sản xuất rượu hiệu quả hơn Anh, nhưng Anh vẫn có lợi thế so sánh trong dệt vải. Cả hai nên chuyên môn hóa và trao đổi.",
      "Một luật sư có thể đánh máy nhanh hơn thư ký, nhưng vẫn nên thuê thư ký vì thời gian của luật sư đáng giá hơn.",
    ],
    relatedConcepts: ["David Ricardo", "Chi phí cơ hội", "Thương mại tự do", "Phân công lao động"],
  },
  "division-labor": {
    category: "Hiệu quả sản xuất",
    title: "Phân công lao động",
    description: "Chuyên môn hóa tăng năng suất",
    fullDescription:
      "Adam Smith mở đầu cuốn 'The Wealth of Nations' bằng ví dụ nổi tiếng về nhà máy sản xuất ghim để minh họa sức mạnh của phân công lao động. Khi công việc được chia thành các công đoạn nhỏ và mỗi công nhân chuyên môn hóa vào một công đoạn, năng suất tăng lên đáng kể. Điều này xảy ra vì: (1) kỹ năng của công nhân được nâng cao qua lặp lại, (2) tiết kiệm thời gian chuyển đổi công việc, (3) tạo điều kiện cho cải tiến công nghệ và máy móc.",
    keyPoints: [
      "Chia công việc thành các công đoạn nhỏ chuyên môn",
      "Tăng năng suất thông qua luyện tập và thành thạo",
      "Tiết kiệm thời gian không phải chuyển đổi công việc",
      "Tạo điều kiện cho cải tiến kỹ thuật và tự động hóa",
    ],
    examples: [
      "Nhà máy ghim của Adam Smith: 1 người làm tất cả chỉ sản xuất được 20 ghim/ngày, nhưng 10 người phân công có thể sản xuất 48,000 ghim/ngày.",
      "Dây chuyền lắp ráp ô tô của Ford: thay vì mỗi thợ làm một chiếc xe hoàn chỉnh, họ chuyên môn từng công đoạn, giảm thời gian sản xuất từ 12 giờ xuống 1.5 giờ.",
    ],
    relatedConcepts: ["Adam Smith", "Năng suất lao động", "Chuyên môn hóa", "Cách mạng công nghiệp"],
  },
  "rent-theory": {
    category: "Phân phối thu nhập",
    title: "Lý thuyết địa tô",
    description: "Thu nhập từ đất đai và tài nguyên",
    fullDescription:
      "David Ricardo phát triển lý thuyết địa tô để giải thích thu nhập từ đất đai. Ông cho rằng địa tô phát sinh từ sự khác biệt về độ màu mỡ của đất. Khi dân số tăng, người ta phải canh tác cả đất kém màu mỡ. Giá lương thực được quyết định bởi chi phí sản xuất trên đất kém nhất. Vì vậy, người sở hữu đất tốt hơn thu được địa tô - phần chênh lệch giữa giá bán và chi phí sản xuất của họ. Địa tô không phải do lao động tạo ra mà do độ hiếm của tài nguyên tốt.",
    keyPoints: [
      "Địa tô phát sinh từ sự khác biệt về chất lượng đất",
      "Giá lương thực quyết định bởi đất kém màu mỡ nhất đang canh tác",
      "Địa tô tăng khi dân số tăng và đất tốt trở nên khan hiếm",
      "Mâu thuẫn lợi ích giữa địa chủ và các giai cấp khác",
    ],
    examples: [
      "Nếu đất A cho 100 tạ lúa với chi phí 50 triệu, đất B cho 80 tạ với chi phí 40 triệu, nhưng giá lúa được định bởi đất B (500k/tạ), thì chủ đất A thu địa tô là 10 triệu.",
      "Khi dân số tăng, phải canh tác đất C (kém hơn B), giá lúa tăng lên, địa tô của cả đất A và B đều tăng.",
    ],
    relatedConcepts: ["David Ricardo", "Phân phối thu nhập", "Lợi nhuận giảm dần", "Giai cấp địa chủ"],
  },
  "laissez-faire": {
    category: "Chính sách kinh tế",
    title: "Laissez-faire",
    description: "Tự do kinh tế không can thiệp",
    fullDescription:
      "Laissez-faire (tiếng Pháp: 'để tự do làm') là triết lý kinh tế chủ trương tối thiểu hóa can thiệp của chính phủ vào nền kinh tế. Các nhà kinh tế cổ điển tin rằng thị trường tự do sẽ tự điều chỉnh hiệu quả nhất thông qua cơ chế cung cầu và bàn tay vô hình. Chính phủ chỉ nên đảm bảo quyền sở hữu, thực thi hợp đồng, và bảo vệ cạnh tranh. Mọi quy định, thuế quan, và can thiệp khác đều gây méo mó thị trường và giảm hiệu quả.",
    keyPoints: [
      "Hạn chế tối đa sự can thiệp của chính phủ vào kinh tế",
      "Thị trường tự do tự điều chỉnh hiệu quả nhất",
      "Chính phủ chỉ bảo vệ quyền sở hữu và thực thi hợp đồng",
      "Chống lại thuế quan, độc quyền, và quy định hạn chế",
    ],
    examples: [
      "Adam Smith phản đối luật Hạn chế Ngũ cốc (Corn Laws) của Anh vì nó bảo hộ nông dân trong nước, làm tăng giá lương thực cho người tiêu dùng.",
      "Các nhà cổ điển chống lại việc chính phủ định giá tối thiểu hoặc tối đa vì làm mất cân bằng cung cầu tự nhiên.",
    ],
    relatedConcepts: ["Tự do thị trường", "Bàn tay vô hình", "Trọng thương chủ nghĩa", "Tự do thương mại"],
  },
};
