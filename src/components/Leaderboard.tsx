
import React from "react";
import { useQuiz } from "@/context/QuizContext";
import { Badge } from "@/components/ui/badge";
import { Trophy, Clock } from "lucide-react";

const Leaderboard = () => {
  const { leaderboard, gameStarted, teamsProgress } = useQuiz();

  if (leaderboard.length === 0) {
    return (
      <div className="my-8 brutalist-wireframe text-center p-6">
        <h2 className="text-xl font-bold mb-2">Tabla de Posiciones</h2>
        <p>No hay equipos participando todavía.</p>
      </div>
    );
  }

  return (
    <div className="my-8 animate-slide-up">
      <div className="brutalist-box">
        <h2 className="text-2xl font-bold mb-6 uppercase">Tabla de Posiciones</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full brutalist-border">
            <thead>
              <tr className="bg-black text-white">
                <th className="brutalist-border p-2 text-left">Equipo</th>
                <th className="brutalist-border p-2 text-center">Rounds</th>
                <th className="brutalist-border p-2 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((team, index) => {
                return (
                  <tr key={team.id} className={index % 2 === 0 ? "bg-white" : "bg-brutalist-100"}>
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
                        {index === 0 && (
                          <Trophy className="h-5 w-5 text-yellow-500 ml-2" />
                        )}
                      </div>
                    </td>
                    <td className="brutalist-border p-2">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((round) => {
                          const roundScore = team.roundScores.find(rs => rs.round === round);
                          const isCompleted = team.completedRounds.includes(round);
                          
                          return (
                            <div 
                              key={round}
                              className={`
                                w-6 h-6 text-xs flex items-center justify-center 
                                brutalist-border ${isCompleted ? "bg-black text-white" : "bg-gray-100"}
                              `}
                              title={`Round ${round}: ${roundScore?.score || 0} pts`}
                            >
                              {round}
                            </div>
                          );
                        })}
                      </div>
                    </td>
                    <td className="brutalist-border p-2 text-center font-bold">
                      {team.totalScore}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Round Scores Summary */}
        {gameStarted && (
          <div className="mt-6">
            <h3 className="font-bold mb-2">Puntuaciones por Round:</h3>
            <div className="overflow-x-auto">
              <table className="w-full brutalist-border text-sm">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="brutalist-border p-2 text-left">Equipo</th>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((round) => (
                      <th key={round} className="brutalist-border p-2 text-center">
                        R{round}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((team) => (
                    <tr key={team.id}>
                      <td className="brutalist-border p-2 font-bold">{team.name}</td>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((round) => {
                        const roundScore = team.roundScores.find(rs => rs.round === round);
                        return (
                          <td key={round} className="brutalist-border p-2 text-center">
                            {roundScore ? roundScore.score : "-"}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
