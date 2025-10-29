import { HeroNavigation } from "@/components/HeroNavigation";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import classicalBg from "@/assets/classical-economics-bg.jpg";
import adamSmithImg from "@/assets/adam-smith.jpg";
import davidRicardoImg from "@/assets/david-ricardo.jpg";
import johnMillImg from "@/assets/john-stuart-mill.jpg";
import williamPettyImg from "@/assets/william-petty.jpg";

const Index = () => {
  const navigate = useNavigate();

  const handleNavigate = (sectionId: string) => {
    navigate(`/${sectionId}`);
  };

  const scrollToNavigation = () => {
    const navigationSection = document.getElementById('navigation-section');
    if (navigationSection) {
      navigationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Overview Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        {/* Background image */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${classicalBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-bronze/10 rounded-full blur-3xl" />
        
        {/* Floating economist portraits */}
        <div className="absolute top-32 left-20 w-32 h-32 rounded-full overflow-hidden border-4 border-gold/40 shadow-[var(--shadow-large)] opacity-50 hover:opacity-80 transition-opacity animate-float">
          <img src={adamSmithImg} alt="Adam Smith" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-48 right-32 w-28 h-28 rounded-full overflow-hidden border-4 border-bronze/40 shadow-[var(--shadow-large)] opacity-50 hover:opacity-80 transition-opacity animate-float-delayed">
          <img src={davidRicardoImg} alt="David Ricardo" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-40 left-32 w-24 h-24 rounded-full overflow-hidden border-4 border-gold/40 shadow-[var(--shadow-large)] opacity-50 hover:opacity-80 transition-opacity animate-float">
          <img src={johnMillImg} alt="John Stuart Mill" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-32 right-20 w-28 h-28 rounded-full overflow-hidden border-4 border-primary/40 shadow-[var(--shadow-large)] opacity-50 hover:opacity-80 transition-opacity animate-float">
          <img src={williamPettyImg} alt="William Petty" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-primary via-bronze to-gold bg-clip-text text-transparent leading-tight">
            Kinh tế học Cổ điển
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Khám phá nền tảng triết học và lý thuyết kinh tế từ thời kỳ cách mạng công nghiệp
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToNavigation}
            size="lg"
            className="mt-8 bg-gradient-to-r from-primary via-bronze to-gold hover:opacity-90 text-white px-10 py-7 text-lg rounded-full shadow-[var(--shadow-large)] transition-all hover:scale-105"
          >
            Bắt đầu khám phá ↓
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <div id="navigation-section" className="scroll-mt-0">
        <HeroNavigation onNavigate={handleNavigate} />
      </div>
    </div>
  );
};

export default Index;
