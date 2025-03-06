
import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Quiz from "@/pages/Quiz";
import NotFound from "@/pages/NotFound";
import { QuizProvider } from "@/context/QuizContext";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <QuizProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </QuizProvider>
  );
}

export default App;
