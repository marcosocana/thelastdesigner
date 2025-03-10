
// This file is a compatibility layer for existing code
// It re-exports everything from the refactored quiz context
import { QuizProvider } from "./quiz/QuizProvider";
import { useQuiz } from "./quiz/useQuiz";

export { QuizProvider, useQuiz };
