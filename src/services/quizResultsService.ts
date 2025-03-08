
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

const STORAGE_KEY = 'quiz_results';

export const saveQuizResult = (team: Team): void => {
  const existingResultsStr = localStorage.getItem(STORAGE_KEY);
  const existingResults: QuizResult[] = existingResultsStr ? JSON.parse(existingResultsStr) : [];
  
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
  const existingIndex = existingResults.findIndex(r => r.id === team.id);
  if (existingIndex >= 0) {
    // Update existing result
    existingResults[existingIndex] = newResult;
  } else {
    // Add new result
    existingResults.push(newResult);
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existingResults));
};

export const getQuizResults = (): QuizResult[] => {
  const resultsStr = localStorage.getItem(STORAGE_KEY);
  return resultsStr ? JSON.parse(resultsStr) : [];
};

export const getQuizResult = (id: string): QuizResult | undefined => {
  const results = getQuizResults();
  return results.find(r => r.id === id);
};
