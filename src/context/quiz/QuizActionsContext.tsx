
import React, { createContext, useContext, useRef } from "react";
import { Question, Team, TeamProgress, RoundScore } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { getQuestionsByRound, questions } from "@/data/questions";
import { saveQuizResult } from "@/services/quizResultsService";
import { useQuizState } from "./QuizStateContext";
import { updateTeamAfterAnswer } from "./quizUtils";

interface QuizActionsContextType {
  createTeam: (name: string, memberNames: string[], logo: string | null) => void;
  submitAnswer: (questionId: number, answerIndex: number, answerTime: number) => boolean;
  getCurrentQuestions: () => Question[];
  getRoundProgress: (round: number) => { correct: number; total: number; percentage: number };
  startGame: () => boolean;
  startQuiz: () => boolean;
  setNextQuestion: () => void;
  getCurrentTheme: () => { name: string; textColor: string };
}

const QuizActionsContext = createContext<QuizActionsContextType | undefined>(undefined);

export const useQuizActions = () => {
  const context = useContext(QuizActionsContext);
  if (!context) {
    throw new Error("useQuizActions must be used within a QuizActionsProvider");
  }
  return context;
};

export const QuizActionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    currentTeam,
    setCurrentTeam,
    teams,
    setTeams,
    setGameStarted,
    setQuizStarted,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    teamsProgress,
    setTeamsProgress,
    setShowCountdown,
    setCountdown
  } = useQuizState();

  // Use refs to track state updates we'll need to batch
  const pendingTeamsProgressUpdate = useRef<TeamProgress[] | null>(null);
  
  const createTeam = (name: string, memberNames: string[], logo: string | null) => {
    const newTeam: Team = {
      id: uuidv4(),
      name,
      logo,
      members: memberNames.map(name => ({ id: uuidv4(), name })),
      currentRound: 1, // Keep for theme tracking
      completedRounds: [],
      roundScores: [],
      totalScore: 0
    };

    setCurrentTeam(newTeam);
    setTeams(prevTeams => [...prevTeams, newTeam]);
  };

  const startGame = (): boolean => {
    if (!currentTeam) {
      return false;
    }
    
    setGameStarted(true);
    setCurrentQuestionIndex(0);
    return true;
  };

  const startQuiz = (): boolean => {
    if (!currentTeam) {
      return false;
    }
    
    // Start countdown
    setShowCountdown(true);
    setCountdown(3);
    
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          setShowCountdown(false);
          setQuizStarted(true);
          setCurrentQuestionIndex(0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return true;
  };

  const setNextQuestion = () => {
    setCurrentQuestionIndex(prev => prev + 1);
    
    if (currentTeam) {
      const updatedProgress = teamsProgress.map(progress => 
        progress.teamId === currentTeam.id
          ? { 
              ...progress, 
              currentQuestionIndex: currentQuestionIndex + 1,
              answeredCorrectly: false,
              answeredIncorrectly: false,
              answerTime: 0
            }
          : progress
      );
      
      setTeamsProgress(updatedProgress);
    }
  };

  const submitAnswer = (questionId: number, answerIndex: number, answerTime: number): boolean => {
    if (!currentTeam) return false;

    const { isCorrect, updatedTeam } = updateTeamAfterAnswer(
      currentTeam,
      questionId,
      answerIndex,
      answerTime,
      currentQuestionIndex
    );
    
    if (updatedTeam) {
      setCurrentTeam(updatedTeam);
      
      // Store updates in ref to avoid state updates during render
      pendingTeamsProgressUpdate.current = teamsProgress.map(progress => 
        progress.teamId === currentTeam.id
          ? { 
              ...progress, 
              answeredCorrectly: isCorrect,
              answeredIncorrectly: !isCorrect,
              answerTime
            }
          : progress
      );
      
      // Use setTimeout to apply updates after current render cycle
      setTimeout(() => {
        if (pendingTeamsProgressUpdate.current) {
          setTeamsProgress(pendingTeamsProgressUpdate.current);
          pendingTeamsProgressUpdate.current = null;
        }
      }, 0);
      
      // Update the team in the teams array
      setTeams(prevTeams => 
        prevTeams.map(team => team.id === currentTeam.id ? updatedTeam : team)
      );
      
      // If all 100 questions are answered, end quiz
      if (currentQuestionIndex >= questions.length - 1) {
        // Use setTimeout to ensure this happens outside of the render cycle
        setTimeout(() => {
          setQuizStarted(false);
          // Save quiz result
          saveQuizResult(updatedTeam);
        }, 0);
      }
    }
    
    return isCorrect;
  };

  const getCurrentQuestions = (): Question[] => {
    return questions; // Return all questions
  };

  const getCurrentTheme = () => {
    // Calculate current theme based on questionIndex
    const roundThemes = [
      { name: "Fundamentos de UX", textColor: "text-blue-700" },
      { name: "UI y Diseño Visual", textColor: "text-purple-700" },
      { name: "Design Systems", textColor: "text-green-700" },
      { name: "Research y Data-Driven Design", textColor: "text-yellow-600" },
      { name: "UX Writing & Microcopy", textColor: "text-pink-700" },
      { name: "Mobile UX y Responsive Design", textColor: "text-red-700" },
      { name: "Prototipado y Herramientas", textColor: "text-indigo-700" },
      { name: "Diseño Inclusivo y Accesibilidad", textColor: "text-teal-700" },
      { name: "Heurísticas y Evaluación UX", textColor: "text-orange-700" },
      { name: "Negocio y Estrategia de Producto", textColor: "text-cyan-700" }
    ];
    
    const themeIndex = Math.floor(currentQuestionIndex / 10);
    return themeIndex < roundThemes.length ? roundThemes[themeIndex] : roundThemes[0];
  };

  const getRoundProgress = (round: number) => {
    if (!currentTeam) return { correct: 0, total: 0, percentage: 0 };
    
    const roundScore = currentTeam.roundScores.find(rs => rs.round === round);
    const correctAnswers = roundScore?.correctAnswers || 0;
    
    const roundQuestions = getQuestionsByRound(round);
    const total = roundQuestions.length;
    const percentage = total > 0 ? Math.round((correctAnswers / total) * 100) : 0;
    
    return { correct: correctAnswers, total, percentage };
  };

  const value = {
    createTeam,
    submitAnswer,
    getCurrentQuestions,
    getRoundProgress,
    startGame,
    startQuiz,
    setNextQuestion,
    getCurrentTheme
  };

  return <QuizActionsContext.Provider value={value}>{children}</QuizActionsContext.Provider>;
};
