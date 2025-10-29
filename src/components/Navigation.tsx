import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const sections = [
  { id: "intro", label: "Giới thiệu", emoji: "🏛️" },
  { id: "economists", label: "Nhà kinh tế", emoji: "🧑‍🏫" },
  { id: "characteristics", label: "Đặc điểm", emoji: "🧩" },
  { id: "contributions", label: "Đóng góp", emoji: "🧪" },
  { id: "limitations", label: "Hạn chế", emoji: "🧱" },
  { id: "philosophy", label: "Ảnh hưởng triết học", emoji: "🔗" },
  { id: "impact", label: "Ảnh hưởng lịch sử", emoji: "🔭" },
  { id: "quiz", label: "Kiểm tra", emoji: "🎯" },
  { id: "references", label: "Tài liệu", emoji: "📚" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-sm shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => scrollToSection("intro")}
              className="text-lg md:text-xl font-serif font-semibold text-primary hover:text-accent transition-colors"
            >
              🏛️ Kinh tế học Cổ điển
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <span className="mr-1">{section.emoji}</span>
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-card/95 backdrop-blur-sm pt-16">
          <div className="container mx-auto px-4 py-6 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  activeSection === section.id
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <span className="mr-2">{section.emoji}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
