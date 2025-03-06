
import React, { useState, useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import { Question } from "@/types";

const QuizGame = () => {
  const { 
    currentTeam, 
    getCurrentLevelQuestions,
    getCurrentLevelProgress,
    submitAnswer,
    advanceLevel
  } = useQuiz();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  
  const questions = getCurrentLevelQuestions();
  const currentQuestion: Question | undefined = questions[currentQuestionIndex];
  const progress = getCurrentLevelProgress();
  
  useEffect(() => {
    if (
      currentTeam && 
      progress.correct + (questions.length - progress.correct) === progress.total &&
      progress.correct === progress.total
    ) {
      setAllQuestionsAnswered(true);
    } else {
      setAllQuestionsAnswered(false);
    }
  }, [currentTeam, progress, questions.length]);
  
  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return; // Prevent changing option during feedback
    setSelectedOption(optionIndex);
  };
  
  const handleSubmit = () => {
    if (selectedOption === null || !currentQuestion) return;
    
    const result = submitAnswer(currentQuestion.id, selectedOption);
    setIsCorrect(result);
    setShowFeedback(true);
    
    // Auto advance to next question after 2 seconds
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // All questions for this level have been answered
        setAllQuestionsAnswered(true);
      }
      
      setSelectedOption(null);
      setShowFeedback(false);
    }, 2000);
  };
  
  const handleAdvanceLevel = () => {
    const success = advanceLevel();
    if (success) {
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setShowFeedback(false);
      setAllQuestionsAnswered(false);
    }
  };
  
  if (!currentTeam) {
    return (
      <div className="my-8 brutalist-box text-center">
        <h2 className="text-2xl font-bold mb-4">No hay ningún equipo activo</h2>
        <p>Por favor, crea un equipo para comenzar el quiz.</p>
      </div>
    );
  }
  
  if (allQuestionsAnswered) {
    return (
      <div className="my-8 brutalist-box animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 uppercase">Nivel Completado</h2>
        
        <div className="my-6 p-4 brutalist-border">
          <h3 className="text-xl mb-2">Resultados:</h3>
          <p className="text-4xl font-bold mb-4">
            {progress.correct} / {progress.total} correctas
          </p>
          <div className="w-full h-6 brutalist-border bg-white">
            <div 
              className="h-full bg-black transition-all duration-500"
              style={{ width: `${progress.percentage}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm">
            Puntuación: {progress.percentage}%
          </p>
        </div>
        
        {progress.correct >= 20 ? (
          currentTeam.currentLevel === "advanced" ? (
            <div className="my-6 p-4 brutalist-border bg-brutalist-100">
              <h3 className="text-xl font-bold mb-2">¡FELICIDADES!</h3>
              <p>Has completado todos los niveles del quiz. ¡Eres un verdadero Disainer!</p>
            </div>
          ) : (
            <div>
              <p className="mb-4">
                ¡Excelente! Has acertado suficientes preguntas para avanzar al siguiente nivel.
              </p>
              <button
                onClick={handleAdvanceLevel}
                className="brutalist-btn w-full"
              >
                Avanzar al siguiente nivel
              </button>
            </div>
          )
        ) : (
          <div className="my-6 p-4 brutalist-border bg-brutalist-100">
            <h3 className="text-xl font-bold mb-2">Sigue practicando</h3>
            <p>
              Necesitas al menos 20 respuestas correctas para avanzar al siguiente nivel.
            </p>
          </div>
        )}
      </div>
    );
  }
  
  if (!currentQuestion) {
    return (
      <div className="my-8 brutalist-box text-center">
        <h2 className="text-2xl font-bold mb-4">Error al cargar la pregunta</h2>
        <p>No se pudo cargar la pregunta actual.</p>
      </div>
    );
  }
  
  return (
    <div className="my-8">
      <div className="brutalist-box animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold uppercase">
            Nivel: {currentTeam.currentLevel === "beginner" 
              ? "Principiante" 
              : currentTeam.currentLevel === "intermediate" 
              ? "Medio" 
              : "Avanzado"}
          </h2>
          <span className="text-lg font-mono">
            {currentQuestionIndex + 1} / {questions.length}
          </span>
        </div>
        
        <div className="w-full h-2 brutalist-border bg-white mb-6">
          <div 
            className="h-full bg-black transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        
        <div className="brutalist-wireframe mb-6">
          <h3 className="text-2xl font-bold mb-4">{currentQuestion.text}</h3>
        </div>
        
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              className={`w-full p-4 brutalist-border text-left transition-all ${
                selectedOption === index
                  ? "bg-black text-white"
                  : "bg-white hover:bg-brutalist-100"
              } ${
                showFeedback && index === currentQuestion.correctAnswer
                  ? "bg-green-200 border-green-500"
                  : ""
              } ${
                showFeedback && selectedOption === index && index !== currentQuestion.correctAnswer
                  ? "bg-red-200 border-red-500"
                  : ""
              }`}
              disabled={showFeedback}
            >
              <span className="inline-block w-8 text-center brutalist-border mr-2">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          ))}
        </div>
        
        {showFeedback ? (
          <div className={`p-4 brutalist-border ${isCorrect ? "bg-green-100" : "bg-red-100"} mb-4`}>
            <p className="font-bold">
              {isCorrect ? "¡Correcto!" : "Incorrecto"}
            </p>
            <p>
              {isCorrect 
                ? "¡Bien hecho! Has seleccionado la respuesta correcta."
                : `La respuesta correcta era: ${currentQuestion.options[currentQuestion.correctAnswer]}`
              }
            </p>
          </div>
        ) : (
          <button
            onClick={handleSubmit}
            className={`brutalist-btn w-full ${
              selectedOption === null ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={selectedOption === null}
          >
            Confirmar Respuesta
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
