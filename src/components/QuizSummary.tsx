
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
  
  // Share on LinkedIn
  const handleShareOnLinkedIn = () => {
    const text = `He participado en el gran reto del disaigner y he conseguido una puntuación de ${currentTeam.totalScore} puntos.`;
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
            <h4 className="font-bold mb-4">Desglose por Rounds</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full brutalist-border">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="brutalist-border p-2 text-center">Round</th>
                    <th className="brutalist-border p-2 text-center">Puntuación</th>
                    <th className="brutalist-border p-2 text-center">Correctas</th>
                    <th className="brutalist-border p-2 text-center">Tiempo</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map(round => {
                    const roundScore = currentTeam.roundScores.find(rs => rs.round === round);
                    return (
                      <tr key={round} className={round % 2 === 0 ? "bg-white" : "bg-brutalist-100"}>
                        <td className="brutalist-border p-2 text-center font-bold">{round}</td>
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

export default QuizSummary;
