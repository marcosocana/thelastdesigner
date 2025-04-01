
import React from "react";
import Layout from "@/components/Layout";
import TeamCreation from "@/components/TeamCreation";
import QuizGame from "@/components/QuizGame";
import Leaderboard from "@/components/Leaderboard";
import GameState from "@/components/GameState";
import { useQuiz } from "@/context/QuizContext";
import { useIsMobile } from "@/hooks/use-mobile";

const Quiz = () => {
  const {
    currentTeam,
    gameStarted
  } = useQuiz();
  const isMobile = useIsMobile();

  // Check if we're showing the final summary (completed all questions)
  const showingSummary = currentTeam && currentTeam.currentRound > 10;
  
  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto px-2">
        <div className={`grid ${isMobile || showingSummary ? '' : 'md:grid-cols-2'} gap-4 md:gap-8`}>
          <div className={`${showingSummary ? 'w-full' : ''} max-w-full overflow-x-hidden`}>
            {!currentTeam ? <TeamCreation /> : !gameStarted ? <GameState /> : <QuizGame />}
          </div>
          
          {!showingSummary && <div className="w-full max-w-full overflow-x-hidden">
            <Leaderboard />
          </div>}
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
