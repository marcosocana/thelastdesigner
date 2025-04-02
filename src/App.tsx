
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "@/context/QuizContext";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import Manifiesto from "./pages/Manifiesto";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Set the page title and ensure metadata is loaded
  useEffect(() => {
    document.title = "The Last Designer";
    
    // Ensure the meta tags are properly set
    const updateMetaTags = () => {
      // Update or create the og:image meta tag
      let metaOgImage = document.querySelector('meta[property="og:image"]');
      if (!metaOgImage) {
        metaOgImage = document.createElement('meta');
        metaOgImage.setAttribute('property', 'og:image');
        document.head.appendChild(metaOgImage);
      }
      metaOgImage.setAttribute('content', '/lovable-uploads/c325bdcb-654e-4672-b2cc-6400a464888c.png');
      
      // Update or create the twitter:image meta tag
      let metaTwitterImage = document.querySelector('meta[name="twitter:image"]');
      if (!metaTwitterImage) {
        metaTwitterImage = document.createElement('meta');
        metaTwitterImage.setAttribute('name', 'twitter:image');
        document.head.appendChild(metaTwitterImage);
      }
      metaTwitterImage.setAttribute('content', '/lovable-uploads/c325bdcb-654e-4672-b2cc-6400a464888c.png');
    };
    
    updateMetaTags();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <QuizProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/manifiesto" element={<Manifiesto />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </QuizProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
