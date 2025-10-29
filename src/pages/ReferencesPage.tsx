import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReferencesPage = () => {
  const navigate = useNavigate();

  const books = [
    {
      title: "The Wealth of Nations",
      author: "Adam Smith (1776)",
      description: "Tác phẩm nền tảng của kinh tế học cổ điển, giới thiệu khái niệm bàn tay vô hình và phân công lao động."
    },
    {
      title: "Principles of Political Economy and Taxation",
      author: "David Ricardo (1817)",
      description: "Phát triển lý thuyết giá trị lao động, địa tô và lợi thế so sánh trong thương mại quốc tế."
    },
    {
      title: "Principles of Political Economy",
      author: "John Stuart Mill (1848)",
      description: "Tổng hợp và phát triển tư tưởng kinh tế cổ điển với quan điểm nhân văn và cải cách."
    },
    {
      title: "An Essay on the Principle of Population",
      author: "Thomas Malthus (1798)",
      description: "Phân tích mối quan hệ giữa dân số và nguồn lực, ảnh hưởng lớn đến tư duy kinh tế."
    }
  ];

  const articles = [
    "Blaug, M. (1997). Economic Theory in Retrospect. Cambridge University Press.",
    "Heilbroner, R. L. (1999). The Worldly Philosophers. Touchstone.",
    "Schumpeter, J. A. (1954). History of Economic Analysis. Oxford University Press.",
    "Skousen, M. (2016). The Making of Modern Economics. Routledge."
  ];

  const onlineResources = [
    {
      title: "Library of Economics and Liberty",
      url: "econlib.org",
      description: "Bộ sưu tập tài liệu kinh tế học cổ điển"
    },
    {
      title: "Stanford Encyclopedia of Philosophy",
      url: "plato.stanford.edu",
      description: "Các bài viết về triết học kinh tế"
    },
    {
      title: "Internet Archive",
      url: "archive.org",
      description: "Các tác phẩm gốc của các nhà kinh tế cổ điển"
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

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
              📚 Tài liệu tham khảo
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          </div>

          <div className="space-y-8">
            <Card className="border-gold/30 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary flex items-center">
                  <BookOpenIcon className="w-6 h-6 mr-3 text-accent" />
                  Sách tham khảo chính
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {books.map((book, index) => (
                  <div key={index} className="pb-4 border-b border-border/50 last:border-0">
                    <h4 className="font-semibold text-primary mb-1">{book.title}</h4>
                    <p className="text-sm text-accent mb-2">{book.author}</p>
                    <p className="text-foreground/80 text-sm">{book.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-gold/30 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">
                  Tài liệu nghiên cứu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {articles.map((article, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      <span className="text-foreground/80">{article}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/30 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">
                  Nguồn tài nguyên trực tuyến
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {onlineResources.map((resource, index) => (
                  <div key={index} className="pb-4 border-b border-border/50 last:border-0">
                    <h4 className="font-semibold text-primary mb-1">{resource.title}</h4>
                    <p className="text-sm text-accent mb-2">{resource.url}</p>
                    <p className="text-foreground/80 text-sm">{resource.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferencesPage;
