
export type QuizLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Question {
  id: number;
  level: QuizLevel;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface TeamMember {
  id: string;
  name: string;
}

export interface Team {
  id: string;
  name: string;
  logo: string | null;
  members: TeamMember[];
  currentLevel: QuizLevel;
  score: {
    beginner: number;
    intermediate: number;
    advanced: number;
  };
  completedQuestions: {
    beginner: number[];
    intermediate: number[];
    advanced: number[];
  };
}

export interface Room {
  id: string;
  password: string;
  teams: Team[];
}

export interface TeamProgress {
  teamId: string;
  teamName: string;
  currentQuestionIndex: number;
  answeredCorrectly: boolean;
  answeredIncorrectly: boolean;
}

export interface QuizContextType {
  currentTeam: Team | null;
  setCurrentTeam: (team: Team) => void;
  currentRoom: Room | null;
  setCurrentRoom: (room: Room) => void;
  createTeam: (name: string, memberNames: string[], logo: string | null, password: string) => void;
  joinRoom: (password: string) => Room | null;
  submitAnswer: (questionId: number, answerIndex: number) => boolean;
  getCurrentLevelProgress: () => { correct: number; total: number; percentage: number };
  getCurrentLevelQuestions: () => Question[];
  advanceLevel: () => boolean;
  leaderboard: Team[];
  gameStarted: boolean;
  startGame: () => boolean;
  currentQuestionIndex: number;
  setNextQuestion: () => void;
  teamsProgress: TeamProgress[];
}
