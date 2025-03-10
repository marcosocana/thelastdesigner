
import { Team } from "@/types";

export interface QuizResult {
  id: string;
  userName: string;
  totalScore: number;
  totalTime: number;
  date: string;
  roundScores: {
    round: number;
    score: number;
    correctAnswers: number;
    totalTime: number;
  }[];
}

// Changed to use in-memory storage instead of localStorage
let quizResults: QuizResult[] = [];

export const saveQuizResult = (team: Team): void => {
  // Calculate total time
  const totalTime = team.roundScores.reduce((total, round) => total + round.totalTime, 0);
  
  const newResult: QuizResult = {
    id: team.id,
    userName: team.name,
    totalScore: team.totalScore,
    totalTime,
    date: new Date().toISOString(),
    roundScores: team.roundScores
  };
  
  // Check if result already exists
  const existingIndex = quizResults.findIndex(r => r.id === team.id);
  if (existingIndex >= 0) {
    // Update existing result
    quizResults[existingIndex] = newResult;
  } else {
    // Add new result
    quizResults.push(newResult);
  }
};

export const getQuizResults = (): QuizResult[] => {
  return quizResults;
};

export const getQuizResult = (id: string): QuizResult | undefined => {
  return quizResults.find(r => r.id === id);
};
