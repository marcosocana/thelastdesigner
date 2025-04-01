
import React from "react";
import { useQuiz } from "@/context/QuizContext";
import { Badge } from "@/components/ui/badge";
import { Trophy, Clock, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Leaderboard = () => {
  const {
    leaderboard,
    gameStarted,
    teamsProgress,
    currentTeam,
    setCurrentTeam
  } = useQuiz();

  const handleFinishGame = () => {
    if (currentTeam) {
      // Set current round to 11 to trigger game completion
      const updatedTeam = {
        ...currentTeam,
        currentRound: 11
      };
      setCurrentTeam(updatedTeam);
    }
  };

  // Calculate total correct answers
  const getTotalCorrectAnswers = () => {
    if (!currentTeam) return 0;
    return currentTeam.roundScores.reduce(
      (total, round) => total + round.correctAnswers, 
      0
    );
  };

  if (leaderboard.length === 0) {
    return <div className="my-8 brutalist-wireframe text-center p-6">
        <h2 className="text-xl font-bold mb-2">Progreso</h2>
        <p>Aquí aparecerá tu avance en el juego.</p>
      </div>;
  }

  return <div className="my-8 animate-slide-up w-full">
      <div className="brutalist-box">
        <h2 className="text-2xl font-bold mb-6 uppercase">Estadísticas</h2>
        
        {currentTeam && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="brutalist-border p-4 bg-white">
              <h4 className="font-bold mb-1">Puntuación Total</h4>
              <p className="text-3xl font-bold">{currentTeam.totalScore} pts</p>
            </div>
            
            <div className="brutalist-border p-4 bg-white">
              <h4 className="font-bold mb-1">Respuestas Correctas</h4>
              <p className="text-3xl font-bold">{getTotalCorrectAnswers()}/100</p>
            </div>
          </div>
        )}
        
        {/* Show "Terminar juego" button as long as game has started */}
        {gameStarted && currentTeam && 
          <Button 
            onClick={handleFinishGame}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-gray-100 text-black brutalist-border hover:bg-gray-200"
          >
            <CheckSquare className="h-5 w-5" />
            Finalizar
          </Button>
        }
      </div>
    </div>;
};

export default Leaderboard;
