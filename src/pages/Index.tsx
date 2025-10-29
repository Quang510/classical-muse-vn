import { HeroNavigation } from "@/components/HeroNavigation";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleNavigate = (sectionId: string) => {
    navigate(`/${sectionId}`);
  };

  return (
    <div className="min-h-screen">
      <HeroNavigation onNavigate={handleNavigate} />
    </div>
  );
};

export default Index;
