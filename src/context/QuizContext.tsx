
import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { QuizContextType, Team, ParticipantResult, Question, TeamProgress, RoundScore } from "@/types";
import { questions, getQuestionsByRound } from "@/data/questions";

const QuizContext = createContext<QuizContextType | undefined>(undefined);

// This would be replaced with a real database in a production environment
const RESULTS_STORAGE_KEY = "quiz_participant_results";

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTeam, setCurrentTeam] = useState<Team | null>(null);
  const [leaderboard, setLeaderboard] = useState<Team[]>([]);
  const [allTeams, setAllTeams] = useState<Team[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [roundStarted, setRoundStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [teamsProgress, setTeamsProgress] = useState<TeamProgress[]>([]);
  const [countdown, setCountdown] = useState(3);
  const [showCountdown, setShowCountdown] = useState(false);

  // Load previous results from localStorage
  useEffect(() => {
    try {
      const savedResults = localStorage.getItem(RESULTS_STORAGE_KEY);
      if (savedResults) {
        const parsedResults = JSON.parse(savedResults);
        // We could use these results to display a leaderboard of past participants
      }
    } catch (error) {
      console.error("Error loading saved results:", error);
    }
  }, []);

  useEffect(() => {
    if (allTeams.length > 0) {
      const sortedTeams = [...allTeams].sort((a, b) => {
        return b.totalScore - a.totalScore;
      });
      
      setLeaderboard(sortedTeams);
    }
  }, [allTeams]);

  useEffect(() => {
    if (gameStarted) {
      const initialProgress: TeamProgress[] = allTeams.map(team => ({
        teamId: team.id,
        teamName: team.name,
        currentQuestionIndex: 0,
        answeredCorrectly: false,
        answeredIncorrectly: false,
        answerTime: 0
      }));
      
      setTeamsProgress(initialProgress);
    }
  }, [gameStarted, allTeams]);

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
    setAllTeams(prev => [...prev, newTeam]);
  };

  const saveParticipantResult = () => {
    if (!currentTeam) return;
    
    // Calculate total time from all rounds
    const totalTime = currentTeam.roundScores.reduce((total, rs) => total + rs.totalTime, 0);
    
    const newResult: ParticipantResult = {
      id: currentTeam.id,
      teamName: currentTeam.name,
      totalScore: currentTeam.totalScore,
      totalTime,
      participationDate: new Date()
    };
    
    try {
      // Get existing results
      const savedResultsJson = localStorage.getItem(RESULTS_STORAGE_KEY) || '[]';
      const savedResults = JSON.parse(savedResultsJson);
      
      // Add new result
      savedResults.push(newResult);
      
      // Save back to localStorage
      localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(savedResults));
      
      console.log("Saved participant result:", newResult);
    } catch (error) {
      console.error("Error saving participant result:", error);
    }
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
      
      // Update team in allTeams array
      setAllTeams(prev => 
        prev.map(team => team.id === updatedTeam.id ? updatedTeam : team)
      );
      
      // If it's the last question of the round, end round
      if (isRoundCompleted) {
        setRoundStarted(false);
        
        // If it's the last round (10), save the final result
        if (round === 10) {
          setTimeout(() => {
            saveParticipantResult();
          }, 1000);
        }
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
    createTeam,
    submitAnswer,
    getCurrentRoundQuestions,
    getRoundProgress,
    leaderboard,
    gameStarted,
    roundStarted,
    startGame,
    startRound,
    currentQuestionIndex,
    setNextQuestion,
    teamsProgress,
    countdown,
    showCountdown,
    saveParticipantResult
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
