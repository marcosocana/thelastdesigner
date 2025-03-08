
export type QuizLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Question {
  id: number;
  round: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface TeamMember {
  id: string;
  name: string;
}

export interface RoundScore {
  round: number;
  score: number;
  correctAnswers: number;
  totalTime: number;
}

export interface Team {
  id: string;
  name: string;
  logo: string | null;
  members: TeamMember[];
  currentRound: number;
  completedRounds: number[];
  roundScores: RoundScore[];
  totalScore: number;
}

export interface TeamProgress {
  teamId: string;
  teamName: string;
  currentQuestionIndex: number;
  answeredCorrectly: boolean;
  answeredIncorrectly: boolean;
  answerTime: number;
}

export interface QuizContextType {
  currentTeam: Team | null;
  setCurrentTeam: (team: Team) => void;
  leaderboard: Team[];
  createTeam: (name: string, memberNames: string[], logo: string | null) => void;
  submitAnswer: (questionId: number, answerIndex: number, answerTime: number) => boolean;
  getCurrentRoundQuestions: () => Question[];
  getRoundProgress: (round: number) => { correct: number; total: number; percentage: number };
  gameStarted: boolean;
  roundStarted: boolean;
  startGame: () => boolean;
  startRound: () => boolean;
  currentQuestionIndex: number;
  setNextQuestion: () => void;
  teamsProgress: TeamProgress[];
  countdown: number;
  showCountdown: boolean;
}
