import { Team, Question } from "@/types";
import { questions, getQuestionsByRound } from "@/data/questions";

// Maximum time to answer (in seconds)
const MAX_QUESTION_TIME = 20;

export const calculateScore = (
  isCorrect: boolean, 
  answerTime: number
): number => {
  // Maximum score is 100 points per question
  // Faster answers get more points, up to 100 points for correct answers
  const maxScorePerQuestion = 100;
  const timeBonus = Math.max(0, 1 - (answerTime / MAX_QUESTION_TIME)); // 0-1 range, faster is better
  return isCorrect ? Math.round(maxScorePerQuestion * timeBonus) : 0;
};

export const updateTeamAfterAnswer = (
  team: Team,
  questionId: number,
  answerIndex: number,
  answerTime: number,
  currentQuestionIndex: number
): { isCorrect: boolean; updatedTeam: Team | null } => {
  const question = questions.find(q => q.id === questionId);
  if (!question) return { isCorrect: false, updatedTeam: null };

  const isCorrect = question.correctAnswer === answerIndex;
  const score = calculateScore(isCorrect, answerTime);
  const round = question.round;
  
  // Find or create round score
  let updatedRoundScores = [...team.roundScores];
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
  
  // Track completed rounds (just for keeping theme progress)
  let updatedCompletedRounds = [...team.completedRounds];
  const currentRound = Math.floor(currentQuestionIndex / 10) + 1;
  const isLastInThemeGroup = (currentQuestionIndex + 1) % 10 === 0;
  
  if (isLastInThemeGroup && !updatedCompletedRounds.includes(currentRound)) {
    updatedCompletedRounds.push(currentRound);
  }
  
  const updatedTeam = {
    ...team,
    roundScores: updatedRoundScores,
    totalScore,
    completedRounds: updatedCompletedRounds,
    currentRound: Math.floor((currentQuestionIndex + 1) / 10) + 1
  };
  
  return { isCorrect, updatedTeam };
};
