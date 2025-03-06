
import React from "react";
import Layout from "@/components/Layout";
import TeamCreation from "@/components/TeamCreation";
import QuizGame from "@/components/QuizGame";
import Leaderboard from "@/components/Leaderboard";
import { useQuiz } from "@/context/QuizContext";

const Quiz = () => {
  const { currentTeam } = useQuiz();
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="brutalist-box mb-8">
          <h1 className="brutalist-title">EL GRAN RETO DEL DISAINER</h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {!currentTeam ? <TeamCreation /> : <QuizGame />}
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
