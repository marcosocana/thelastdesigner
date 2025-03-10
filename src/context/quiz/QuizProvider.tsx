
import React from "react";
import { QuizStateProvider } from "./QuizStateContext";
import { QuizActionsProvider } from "./QuizActionsContext";

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QuizStateProvider>
      <QuizActionsProvider>{children}</QuizActionsProvider>
    </QuizStateProvider>
  );
};
