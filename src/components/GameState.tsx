import React from "react";
import { useQuiz } from "@/context/QuizContext";
import { Button } from "@/components/ui/button";
import { Trophy, Clock, Flag } from "lucide-react";

const GameState = () => {
  const { 
    currentTeam, 
    startGame,
    gameStarted
  } = useQuiz();

  const handleStartGame = () => {
    // No se muestra ningún mensaje de éxito ni de error
    startGame();
  };

  if (!currentTeam) {
    return null;
  }

  // If the game hasn't started, show the waiting room
  if (!gameStarted) {
    return (
      <div className="brutalist-box mb-6 animate-fade-in">
        <h2 className="text-xl font-bold mb-4 uppercase">Preparados para comenzar</h2>
        
        <div className="brutalist-border p-3 bg-brutalist-50 mb-4">
          <h3 className="font-bold mb-2">Estructura del juego:</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center">
              <Flag className="h-4 w-4 mr-2" /> 10 rounds de preguntas
            </p>
            <p className="flex items-center">
              <Clock className="h-4 w-4 mr-2" /> 10 preguntas por round
            </p>
            <p className="flex items-center">
              <Trophy className="h-4 w-4 mr-2" /> Puntuación máxima: 1000 puntos por round
            </p>
          </div>
        </div>
        
        <Button 
          onClick={handleStartGame}
          className="brutalist-btn w-full"
        >
          Iniciar Reto
        </Button>
      </div>
    );
  }

  return null;
};

export default GameState;
