
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SpeechLanguagePathology from "./pages/SpeechLanguagePathology";
import PhysicalOccupationalTherapy from "./pages/PhysicalOccupationalTherapy";
import Audiology from "./pages/Audiology";
import Dentistry from "./pages/Dentistry";
import WoundHealingDiabeticCare from "./pages/WoundHealingDiabeticCare";
import FCOI from "./pages/FCOI";
import NewsAdmin from "./pages/NewsAdmin";
import NewsEdit from "./pages/NewsEdit";
import SeedData from "./pages/SeedData";

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
<<<<<<< HEAD
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/speech-language-pathology" element={<SpeechLanguagePathology />} />
              <Route path="/products/physical-occupational-therapy" element={<PhysicalOccupationalTherapy />} />
              <Route path="/products/audiology" element={<Audiology />} />
              <Route path="/products/dentistry" element={<Dentistry />} />
              <Route path="/products/wound-healing-diabetic-care" element={<WoundHealingDiabeticCare />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/login" element={<Login />} />
              
              {/* Protected Routes */}
              <Route path="/news/admin" element={
                <ProtectedRoute>
                  <NewsAdmin />
                </ProtectedRoute>
              } />
              <Route path="/news/edit" element={
                <ProtectedRoute>
                  <NewsEdit />
                </ProtectedRoute>
              } />
              <Route path="/news/edit/:id" element={
                <ProtectedRoute>
                  <NewsEdit />
                </ProtectedRoute>
              } />
              <Route path="/seed-data" element={
                <ProtectedRoute>
                  <SeedData />
                </ProtectedRoute>
              } />
              
              <Route path="/contact" element={<Contact />} />
              <Route path="/FCOI" element={<FCOI />} />
=======
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/speech-language-pathology" element={<SpeechLanguagePathology />} />
            <Route path="/products/physical-occupational-therapy" element={<PhysicalOccupationalTherapy />} />
            <Route path="/products/audiology" element={<Audiology />} />
            <Route path="/products/dentistry" element={<Dentistry />} />
            <Route path="/products/wound-healing-diabetic-care" element={<WoundHealingDiabeticCare />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/FCOI" element={<FCOI />} /> */}
>>>>>>> f1cfa7ef21e2e87816c979051a7c4c384fc038e1

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
