import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";

const sections = [
  { id: "intro", label: "Giới thiệu", emoji: "🏛️" },
  { id: "petty", label: "William Petty", emoji: "🧮" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-effect shadow-[var(--shadow-medium)] border-b border-gold/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection("intro")}
              className="flex items-center gap-3 group"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                🏛️
              </span>
              <div className="flex flex-col items-start">
                <span className="text-xl md:text-2xl font-serif font-bold bg-gradient-to-r from-primary via-bronze to-gold bg-clip-text text-transparent">
                  Kinh tế học Cổ điển
                </span>
                <span className="text-xs text-muted-foreground font-sans">
                  Classical Economics Philosophy
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-bronze to-gold text-white shadow-[var(--shadow-soft)] scale-105"
                      : "text-foreground hover:bg-secondary/60 hover:scale-105"
                  }`}
                >
                  <span className="mr-1.5">{section.emoji}</span>
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-gold/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden glass-effect pt-20 animate-in fade-in duration-300">
          <div className="container mx-auto px-4 py-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-bronze to-gold text-white shadow-[var(--shadow-medium)]"
                    : "text-foreground hover:bg-secondary/60 hover:translate-x-2"
                }`}
              >
                <span className="mr-2 text-xl">{section.emoji}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
