
import React, { useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import { saveQuizResult } from "@/services/quizResultsService";
import { Linkedin, Share2 } from "lucide-react";

const QuizSummary = () => {
  const { currentTeam } = useQuiz();
  
  useEffect(() => {
    if (currentTeam) {
      saveQuizResult(currentTeam);
    }
  }, [currentTeam]);
  
  if (!currentTeam) {
    return <div>No hay datos del equipo disponibles.</div>;
  }
  
  const totalTime = currentTeam.roundScores.reduce((total, round) => total + round.totalTime, 0);
  
  const handleShareOnLinkedIn = () => {
    const text = `He participado en el Diseñathon y he conseguido una puntuación de ${currentTeam.totalScore} puntos.`;
    const url = window.location.origin;
    
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`,
      '_blank'
    );
  };
  
  return (
    <div className="my-8 brutalist-box animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 uppercase">Resumen Final</h2>
      
      <div className="p-6 brutalist-border mb-6">
        <h3 className="text-xl font-bold mb-2">Puntuación Total</h3>
        <p className="text-5xl font-bold">{currentTeam.totalScore} pts</p>
        <p className="mt-2">Tiempo total: {totalTime.toFixed(2)} segundos</p>
      </div>
      
      <h3 className="text-xl font-bold mb-4">Desglose por Rounds</h3>
      
      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 10 }).map((_, index) => {
          const roundNumber = index + 1;
          const roundScore = currentTeam.roundScores.find(rs => rs.round === roundNumber);
          
          return (
            <div 
              key={roundNumber}
              className={`p-4 brutalist-border ${roundScore ? 'bg-white' : 'bg-gray-100'}`}
            >
              <h4 className="font-bold">Round {roundNumber}</h4>
              {roundScore ? (
                <>
                  <p className="text-2xl font-bold">{roundScore.score} pts</p>
                  <p className="text-sm">
                    {roundScore.correctAnswers} respuestas correctas
                  </p>
                  <p className="text-sm">
                    Tiempo: {roundScore.totalTime.toFixed(2)}s
                  </p>
                </>
              ) : (
                <p className="text-sm italic">Round no completado</p>
              )}
            </div>
          );
        })}
      </div>
      
      <button 
        onClick={handleShareOnLinkedIn}
        className="brutalist-btn w-full mt-6 flex items-center justify-center gap-2"
      >
        <Linkedin className="h-5 w-5" />
        Compartir en LinkedIn
      </button>
      
      <button 
        onClick={() => navigator.clipboard.writeText(`He participado en el Diseñathon y he conseguido una puntuación de ${currentTeam.totalScore} puntos.`)}
        className="brutalist-border w-full mt-4 py-2 flex items-center justify-center gap-2 hover:bg-gray-100"
      >
        <Share2 className="h-5 w-5" />
        Copiar Texto
      </button>
    </div>
  );
};

export default QuizSummary;
