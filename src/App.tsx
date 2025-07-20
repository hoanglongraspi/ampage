
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Contact from "./pages/Contact";
import SpeechLanguagePathology from "./pages/SpeechLanguagePathology";
import PhysicalOccupationalTherapy from "./pages/PhysicalOccupationalTherapy";
import Audiology from "./pages/Audiology";
import Dentistry from "./pages/Dentistry";
import WoundHealingDiabeticCare from "./pages/WoundHealingDiabeticCare";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/speech-language-pathology" element={<SpeechLanguagePathology />} />
            <Route path="/projects/physical-occupational-therapy" element={<PhysicalOccupationalTherapy />} />
            <Route path="/projects/audiology" element={<Audiology />} />
            <Route path="/projects/dentistry" element={<Dentistry />} />
            <Route path="/projects/wound-healing-diabetic-care" element={<WoundHealingDiabeticCare />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
