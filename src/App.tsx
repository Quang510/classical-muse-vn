import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IntroPage from "./pages/IntroPage";
import PettyPage from "./pages/PettyPage";
import EconomistsPage from "./pages/EconomistsPage";
import CharacteristicsPage from "./pages/CharacteristicsPage";
import TheoriesPage from "./pages/TheoriesPage";
import ContributionsPage from "./pages/ContributionsPage";
import PhilosophyPage from "./pages/PhilosophyPage";
import ImpactPage from "./pages/ImpactPage";
import QuizPage from "./pages/QuizPage";
import ReferencesPage from "./pages/ReferencesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/petty" element={<PettyPage />} />
          <Route path="/economists" element={<EconomistsPage />} />
          <Route path="/characteristics" element={<CharacteristicsPage />} />
          <Route path="/theories" element={<TheoriesPage />} />
          <Route path="/contributions" element={<ContributionsPage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/references" element={<ReferencesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
