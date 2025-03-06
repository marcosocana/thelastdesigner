
import React from "react";
import { useQuiz } from "@/context/QuizContext";

const Leaderboard = () => {
  const { leaderboard, currentRoom } = useQuiz();

  if (!currentRoom || leaderboard.length === 0) {
    return (
      <div className="my-8 brutalist-wireframe text-center p-6">
        <h2 className="text-xl font-bold mb-2">Tabla de Posiciones</h2>
        <p>No hay equipos en esta sala todavía.</p>
      </div>
    );
  }

  return (
    <div className="my-8 animate-slide-up">
      <div className="brutalist-box">
        <h2 className="text-2xl font-bold mb-6 uppercase">Tabla de Posiciones</h2>
        <p className="mb-4 text-sm">Sala: {currentRoom.password}</p>
        
        <div className="overflow-x-auto">
          <table className="w-full brutalist-border">
            <thead>
              <tr className="bg-black text-white">
                <th className="brutalist-border p-2 text-left">Posición</th>
                <th className="brutalist-border p-2 text-left">Equipo</th>
                <th className="brutalist-border p-2 text-center">Principiante</th>
                <th className="brutalist-border p-2 text-center">Medio</th>
                <th className="brutalist-border p-2 text-center">Avanzado</th>
                <th className="brutalist-border p-2 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((team, index) => {
                const totalScore = 
                  team.score.beginner + 
                  team.score.intermediate + 
                  team.score.advanced;
                
                return (
                  <tr key={team.id} className={index % 2 === 0 ? "bg-white" : "bg-brutalist-100"}>
                    <td className="brutalist-border p-2 text-center font-bold">
                      {index + 1}
                    </td>
                    <td className="brutalist-border p-2">
                      <div className="flex items-center gap-2">
                        {team.logo && (
                          <div className="w-8 h-8 brutalist-border overflow-hidden">
                            <img 
                              src={team.logo} 
                              alt={`Logo de ${team.name}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <span className="font-bold">{team.name}</span>
                      </div>
                    </td>
                    <td className="brutalist-border p-2 text-center">{team.score.beginner}</td>
                    <td className="brutalist-border p-2 text-center">{team.score.intermediate}</td>
                    <td className="brutalist-border p-2 text-center">{team.score.advanced}</td>
                    <td className="brutalist-border p-2 text-center font-bold">{totalScore}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
