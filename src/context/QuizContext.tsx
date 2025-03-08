
import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { QuizContextType, Team, Question, TeamProgress, RoundScore } from "@/types";
import { questions, getQuestionsByRound } from "@/data/questions";
import { saveQuizResult } from "@/services/quizResultsService";

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTeam, setCurrentTeam] = useState<Team | null>(null);
  const [teams, setTeams] = useState<Team[]>([]);
  const [leaderboard, setLeaderboard] = useState<Team[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [roundStarted, setRoundStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [teamsProgress, setTeamsProgress] = useState<TeamProgress[]>([]);
  const [countdown, setCountdown] = useState(3);
  const [showCountdown, setShowCountdown] = useState(false);

  useEffect(() => {
    if (teams.length > 0) {
      const sortedTeams = [...teams].sort((a, b) => {
        return b.totalScore - a.totalScore;
      });
      
      setLeaderboard(sortedTeams);
    }
  }, [teams]);

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

  // Updated createTeam function to handle 3 arguments instead of 4
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
    if (!gameStarted || !currentTeam) {
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

    const question = questions.find(q => q.id === questionId);
    if (!question) return false;

    const isCorrect = question.correctAnswer === answerIndex;
    
    if (currentTeam) {
      // Calculate score based on time and correctness
      // Maximum score is 100 points per question
      // Faster answers get more points, up to 100 points for correct answers
      const maxScorePerQuestion = 100;
      const timeBonus = Math.max(0, 1 - (answerTime / 10)); // 0-1 range, faster is better
      const score = isCorrect ? Math.round(maxScorePerQuestion * timeBonus) : 0;
      
      const round = question.round;
      
      // Find or create round score
      let updatedRoundScores = [...currentTeam.roundScores];
      const roundScoreIndex = updatedRoundScores.findIndex(rs => rs.round === round);
      
      if (roundScoreIndex >= 0) {
        // Update existing round score
        updatedRoundScores[roundScoreIndex] = {
          ...updatedRoundScores[roundScoreIndex],
          score: updatedRoundScores[roundScoreIndex].score + score,
          correctAnswers: isCorrect 
            ? updatedRoundScores[roundScoreIndex].correctAnswers + 1 
            : updatedRoundScores[roundScoreIndex].correctAnswers,
          totalTime: updatedRoundScores[roundScoreIndex].totalTime + answerTime
        };
      } else {
        // Create new round score
        updatedRoundScores.push({
          round,
          score,
          correctAnswers: isCorrect ? 1 : 0,
          totalTime: answerTime
        });
      }
      
      // Calculate total score
      const totalScore = updatedRoundScores.reduce((total, rs) => total + rs.score, 0);
      
      // Check if round is completed
      const roundQuestions = getQuestionsByRound(round);
      const isRoundCompleted = currentQuestionIndex >= roundQuestions.length - 1;
      
      // Update completed rounds if round is completed
      let updatedCompletedRounds = [...currentTeam.completedRounds];
      if (isRoundCompleted && !updatedCompletedRounds.includes(round)) {
        updatedCompletedRounds.push(round);
      }
      
      const updatedTeam = {
        ...currentTeam,
        roundScores: updatedRoundScores,
        totalScore,
        completedRounds: updatedCompletedRounds,
        currentRound: isRoundCompleted ? round + 1 : round
      };
      
      setCurrentTeam(updatedTeam);
      
      const updatedProgress = teamsProgress.map(progress => 
        progress.teamId === currentTeam.id
          ? { 
              ...progress, 
              answeredCorrectly: isCorrect,
              answeredIncorrectly: !isCorrect,
              answerTime
            }
          : progress
      );
      
      setTeamsProgress(updatedProgress);
      
      // Update the team in the teams array
      setTeams(prevTeams => 
        prevTeams.map(team => team.id === currentTeam.id ? updatedTeam : team)
      );
      
      // If it's the last question of the round, end round
      if (isRoundCompleted) {
        setRoundStarted(false);
        
        // Save quiz result after each completed round
        saveQuizResult(updatedTeam);
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
    currentTeam,
    setCurrentTeam,
    leaderboard,
    createTeam,
    submitAnswer,
    getCurrentRoundQuestions,
    getRoundProgress,
    gameStarted,
    roundStarted,
    startGame,
    startRound,
    currentQuestionIndex,
    setNextQuestion,
    teamsProgress,
    countdown,
    showCountdown
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
