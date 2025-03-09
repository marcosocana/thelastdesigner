
import React from "react";
import { useQuiz } from "@/context/QuizContext";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { getQuizResult } from "@/services/quizResultsService";

const QuizSummary = () => {
  const { currentTeam } = useQuiz();
  
  if (!currentTeam) {
    return (
      <div className="my-8 brutalist-box text-center">
        <h2 className="text-2xl font-bold mb-4">No hay datos disponibles</h2>
        <p>No se encontró información del equipo.</p>
      </div>
    );
  }
  
  // Get total time from all rounds
  const totalTime = currentTeam.roundScores.reduce((total, round) => total + round.totalTime, 0);
  
  // Get total correct answers
  const totalCorrectAnswers = currentTeam.roundScores.reduce(
    (total, round) => total + round.correctAnswers, 
    0
  );
  
  // Determine if design is saved (more than 70 correct answers)
  const isDesignSaved = totalCorrectAnswers >= 70;
  
  // Share on LinkedIn
  const handleShareOnLinkedIn = () => {
    const result = isDesignSaved ? "he salvado el diseño" : "no he logrado salvar el diseño";
    const text = `He participado en The Last Designer y ${result} con una puntuación de ${currentTeam.totalScore} puntos y ${totalCorrectAnswers}/100 respuestas correctas.`;
    const url = window.location.origin;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
    window.open(linkedInUrl, '_blank');
  };
  
  return (
    <div className="my-8 animate-fade-in">
      <div className="brutalist-box">
        <h2 className="text-3xl font-bold mb-6 uppercase">Resumen Final</h2>
        
        <div className="brutalist-border p-6 mb-6 bg-brutalist-50">
          <h3 className="text-xl font-bold mb-4">Resultados de {currentTeam.name}</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="brutalist-border p-4 bg-white">
              <h4 className="font-bold mb-1">Puntuación Total</h4>
              <p className="text-4xl font-bold">{currentTeam.totalScore} pts</p>
            </div>
            
            <div className="brutalist-border p-4 bg-white">
              <h4 className="font-bold mb-1">Tiempo Total</h4>
              <p className="text-4xl font-bold">{totalTime.toFixed(2)} s</p>
            </div>
          </div>
          
          <div className="brutalist-border p-4 bg-white mb-6">
            <h4 className="font-bold mb-4">Respuestas Correctas</h4>
            <p className="text-4xl font-bold text-center">{totalCorrectAnswers}/100</p>
            
            <div className={`mt-4 p-4 text-center ${isDesignSaved ? 'bg-green-100' : 'bg-red-100'} brutalist-border`}>
              <h3 className="text-xl font-bold mb-2">
                {isDesignSaved 
                  ? "¡HAS SALVADO EL DISEÑO!" 
                  : "EL DISEÑO HA MUERTO PARA SIEMPRE..."}
              </h3>
              <p>
                {isDesignSaved 
                  ? "La humanidad aún tiene esperanza gracias a ti." 
                  : "La IA ha ganado. Las interfaces serán frías para siempre."}
              </p>
            </div>
          </div>
          
          <div className="brutalist-border p-4 bg-white mb-6">
            <h4 className="font-bold mb-4">Desglose por Rounds</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full brutalist-border">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="brutalist-border p-2 text-center">Round</th>
                    <th className="brutalist-border p-2 text-center">Temática</th>
                    <th className="brutalist-border p-2 text-center">Puntuación</th>
                    <th className="brutalist-border p-2 text-center">Correctas</th>
                    <th className="brutalist-border p-2 text-center">Tiempo</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map(round => {
                    const roundScore = currentTeam.roundScores.find(rs => rs.round === round);
                    const roundTheme = getRoundTheme(round);
                    return (
                      <tr key={round} className={round % 2 === 0 ? "bg-white" : "bg-brutalist-100"}>
                        <td className="brutalist-border p-2 text-center font-bold">{round}</td>
                        <td className="brutalist-border p-2 text-left">{roundTheme}</td>
                        <td className="brutalist-border p-2 text-center">
                          {roundScore ? roundScore.score : "-"}
                        </td>
                        <td className="brutalist-border p-2 text-center">
                          {roundScore ? `${roundScore.correctAnswers}/10` : "-"}
                        </td>
                        <td className="brutalist-border p-2 text-center">
                          {roundScore ? `${roundScore.totalTime.toFixed(2)}s` : "-"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          
          <Button 
            onClick={handleShareOnLinkedIn}
            className="brutalist-btn w-full flex items-center justify-center gap-2"
          >
            <Linkedin className="h-5 w-5" />
            Compartir en LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
};

// Helper function to get round theme
const getRoundTheme = (round: number): string => {
  const themes = [
    "Fundamentos de UX",
    "UI y Diseño Visual",
    "Design Systems",
    "Research y Data-Driven Design",
    "UX Writing & Microcopy",
    "Mobile UX y Responsive Design",
    "Prototipado y Herramientas",
    "Diseño Inclusivo y Accesibilidad",
    "Heurísticas y Evaluación UX",
    "Negocio y Estrategia de Producto"
  ];
  
  return themes[round - 1] || "";
};

export default QuizSummary;
