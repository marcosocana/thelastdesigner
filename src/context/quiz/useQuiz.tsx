
import { useQuizState } from "./QuizStateContext";
import { useQuizActions } from "./QuizActionsContext";

export const useQuiz = () => {
  const state = useQuizState();
  const actions = useQuizActions();

  return {
    ...state,
    ...actions
  };
};
