
import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Team, TeamProgress } from "@/types";

interface QuizStateContextType {
  currentTeam: Team | null;
  setCurrentTeam: (team: Team | null) => void;
  teams: Team[];
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
  leaderboard: Team[];
  gameStarted: boolean;
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  quizStarted: boolean;
  setQuizStarted: React.Dispatch<React.SetStateAction<boolean>>;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  teamsProgress: TeamProgress[];
  setTeamsProgress: React.Dispatch<React.SetStateAction<TeamProgress[]>>;
  countdown: number;
  setCountdown: React.Dispatch<React.SetStateAction<number>>;
  showCountdown: boolean;
  setShowCountdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuizStateContext = createContext<QuizStateContextType | undefined>(undefined);

export const useQuizState = () => {
  const context = useContext(QuizStateContext);
  if (!context) {
    throw new Error("useQuizState must be used within a QuizStateProvider");
  }
  return context;
};

export const QuizStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTeam, setCurrentTeam] = useState<Team | null>(null);
  const [teams, setTeams] = useState<Team[]>([]);
  const [leaderboard, setLeaderboard] = useState<Team[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false); // changed from roundStarted to quizStarted
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [teamsProgress, setTeamsProgress] = useState<TeamProgress[]>([]);
  const [countdown, setCountdown] = useState(3);
  const [showCountdown, setShowCountdown] = useState(false);

  // Update leaderboard when teams change
  useEffect(() => {
    if (teams.length > 0) {
      const sortedTeams = [...teams].sort((a, b) => {
        return b.totalScore - a.totalScore;
      });
      
      setLeaderboard(sortedTeams);
    }
  }, [teams]);

  // Initialize team progress when game starts
  useEffect(() => {
    if (gameStarted) {
      const initialProgress: TeamProgress[] = teams.map(team => ({
        teamId: team.id,
        teamName: team.name,
        currentQuestionIndex: 0,
        answeredCorrectly: false,
        answeredIncorrectly: false,
        answerTime: 0
      }));
      
      setTeamsProgress(initialProgress);
    }
  }, [gameStarted, teams]);

  const value = {
    currentTeam,
    setCurrentTeam,
    teams,
    setTeams,
    leaderboard,
    gameStarted,
    setGameStarted,
    quizStarted,
    setQuizStarted,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    teamsProgress,
    setTeamsProgress,
    countdown,
    setCountdown,
    showCountdown,
    setShowCountdown
  };

  return <QuizStateContext.Provider value={value}>{children}</QuizStateContext.Provider>;
};
