
import React, { createContext, useContext, useRef } from "react";
import { Question, Team, TeamProgress, RoundScore } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { getQuestionsByRound } from "@/data/questions";
import { saveQuizResult } from "@/services/quizResultsService";
import { useQuizState } from "./QuizStateContext";
import { updateTeamAfterAnswer } from "./quizUtils";

interface QuizActionsContextType {
  createTeam: (name: string, memberNames: string[], logo: string | null) => void;
  submitAnswer: (questionId: number, answerIndex: number, answerTime: number) => boolean;
  getCurrentRoundQuestions: () => Question[];
  getRoundProgress: (round: number) => { correct: number; total: number; percentage: number };
  startGame: () => boolean;
  startRound: () => boolean;
  setNextQuestion: () => void;
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
    setRoundStarted,
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
      currentRound: 1,
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

  const startRound = (): boolean => {
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
          setRoundStarted(true);
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
      
      // If it's the last question of the round, check but don't end round yet
      // (we'll let the UI handle the transition after showing feedback)
      const roundQuestions = getQuestionsByRound(currentTeam.currentRound);
      const isRoundCompleted = currentQuestionIndex >= roundQuestions.length - 1;
      
      if (isRoundCompleted) {
        // Use setTimeout to ensure this happens outside of the render cycle
        setTimeout(() => {
          // We're only saving the result here, but NOT immediately setting roundStarted to false
          // This allows the UI to show the feedback before transitioning
          saveQuizResult(updatedTeam);
          
          // After saving, set roundStarted to false
          // This is delayed to allow feedback to show first
          setTimeout(() => {
            setRoundStarted(false);
          }, 4500); // Set this slightly before the UI transition to ensure smooth flow
        }, 0);
      }
    }
    
    return isCorrect;
  };

  const getCurrentRoundQuestions = (): Question[] => {
    if (!currentTeam) return [];
    return getQuestionsByRound(currentTeam.currentRound);
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
    getCurrentRoundQuestions,
    getRoundProgress,
    startGame,
    startRound,
    setNextQuestion
  };

  return <QuizActionsContext.Provider value={value}>{children}</QuizActionsContext.Provider>;
};
