
import React from "react";
import Layout from "@/components/Layout";
import TeamCreation from "@/components/TeamCreation";
import QuizGame from "@/components/QuizGame";
import Leaderboard from "@/components/Leaderboard";
import GameState from "@/components/GameState";
import { useQuiz } from "@/context/QuizContext";

const Quiz = () => {
  const { currentTeam, gameStarted } = useQuiz();
  
  // Check if we're showing the final summary (current round > 10)
  const showingSummary = currentTeam && currentTeam.currentRound > 10;
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="brutalist-box mb-8">
          <h1 className="brutalist-title">THE LAST DESIGNER</h1>
          {currentTeam && (
            <p className="text-center text-sm mt-2">
              Tu misión: Salvar al diseño y la humanidad. Si superas 5000 puntos, habrá esperanza.
            </p>
          )}
        </div>
        
        <div className={`grid ${showingSummary ? '' : 'md:grid-cols-2'} gap-8`}>
          <div className={showingSummary ? 'w-full' : ''}>
            {!currentTeam ? (
              <TeamCreation />
            ) : !gameStarted ? (
              <GameState />
            ) : (
              <QuizGame />
            )}
          </div>
          
          {!showingSummary && (
            <div>
              <Leaderboard />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
