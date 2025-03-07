
import React from "react";
import { useQuiz } from "@/context/QuizContext";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Trophy, Clock, Flag } from "lucide-react";

const GameState = () => {
  const { 
    currentRoom, 
    currentTeam, 
    startGame,
    gameStarted
  } = useQuiz();

  const handleStartGame = () => {
    if (startGame()) {
      toast({
        title: "¡El juego ha comenzado!",
        description: "Todos los equipos están jugando ahora."
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo iniciar el juego."
      });
    }
  };

  if (!currentRoom || !currentTeam) {
    return null;
  }

  // If the game hasn't started, show the waiting room
  if (!gameStarted) {
    return (
      <div className="brutalist-box mb-6 animate-fade-in">
        <h2 className="text-xl font-bold mb-4 uppercase">Sala de Espera</h2>
        <p className="mb-2">
          Código de la sala: <span className="font-bold">{currentRoom.password}</span>
        </p>
        <p className="mb-4">
          Equipos en esta sala: <span className="font-bold">{currentRoom.teams.length}</span>
        </p>
        
        <div className="brutalist-border p-3 bg-brutalist-50 mb-4">
          <h3 className="font-bold mb-2">Equipos conectados:</h3>
          <ul className="list-disc pl-5">
            {currentRoom.teams.map(team => (
              <li key={team.id}>
                {team.name} ({team.members.length} {team.members.length === 1 ? "miembro" : "miembros"})
              </li>
            ))}
          </ul>
        </div>
        
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
          Iniciar Juego para Todos
        </Button>
      </div>
    );
  }

  return null;
};

export default GameState;
