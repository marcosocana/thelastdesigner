
import React from "react";
import Layout from "@/components/Layout";
import TeamCreation from "@/components/TeamCreation";
import QuizGame from "@/components/QuizGame";
import Leaderboard from "@/components/Leaderboard";
import GameState from "@/components/GameState";
import { useQuiz } from "@/context/QuizContext";

const Quiz = () => {
  const { currentTeam, gameStarted } = useQuiz();
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="brutalist-box mb-8">
          <h1 className="brutalist-title">THE LAST DESIGNER</h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {!currentTeam ? (
              <TeamCreation />
            ) : !gameStarted ? (
              <GameState />
            ) : (
              <QuizGame />
            )}
          </div>
          
          <div>
            <Leaderboard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
