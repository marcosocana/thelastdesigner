
import React, { useState, useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import { Question } from "@/types";
import { Progress } from "@/components/ui/progress";
import { Clock, Timer, Shell } from "lucide-react";
import QuizSummary from "./QuizSummary";
import { useIsMobile } from "@/hooks/use-mobile";
import { questions } from "@/data/questions";

const roundThemes = [
  { name: "Fundamentos de UX", textColor: "text-blue-700" },
  { name: "UI y Diseño Visual", textColor: "text-purple-700" },
  { name: "Design Systems", textColor: "text-green-700" },
  { name: "Research y Data-Driven Design", textColor: "text-yellow-600" },
  { name: "UX Writing & Microcopy", textColor: "text-pink-700" },
  { name: "Mobile UX y Responsive Design", textColor: "text-red-700" },
  { name: "Prototipado y Herramientas", textColor: "text-indigo-700" },
  { name: "Diseño Inclusivo y Accesibilidad", textColor: "text-teal-700" },
  { name: "Heurísticas y Evaluación UX", textColor: "text-orange-700" },
  { name: "Negocio y Estrategia de Producto", textColor: "text-cyan-700" }
];

const encouragementMessages = [
  "¡Sigue así! Estás a una respuesta correcta de que te llamen 'Senior Visionary Designer' en LinkedIn.",
  "Cada respuesta correcta es un píxel más en el gran diseño de la humanidad. ¡No dejes espacios en blanco!",
  "¡Máquina, fiera, figura! Si sigues así, los clientes van a dejar de pedirte 'algo tipo Apple'.",
  "Estás demostrando que la IA jamás podrá diseñar con flow. ¡Sigue adelante!",
  "Estás a un par de respuestas correctas de que tu madre entienda qué es lo que haces en el trabajo.",
  "¡Cuidado! Si sigues respondiendo así de bien, te van a pedir 'un diseño rapidito' en la oficina.",
  "Vas más fuerte que una mascletà en fallas. ¡Sigue así!",
  "¡No te detengas! La IA no podrá robarte el puesto si demuestras que el diseño es más que pintar pantallitas.",
  "Ere un crá. ¿Un piquito?",
  "¡Wow! Si sigues así, vas a hacer que los clientes dejen de pedir el logo más grande."
];

// Updated max time constant
const MAX_QUESTION_TIME = 20;

const QuizGame = () => {
  const { 
    currentTeam, 
    getCurrentQuestions,
    getCurrentTheme,
    getRoundProgress,
    submitAnswer,
    gameStarted,
    quizStarted,
    startQuiz,
    currentQuestionIndex,
    setNextQuestion,
    countdown,
    showCountdown
  } = useQuiz();
  
  const isMobile = useIsMobile();
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(MAX_QUESTION_TIME);
  const [answerTime, setAnswerTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const allQuestions = questions;
  const currentQuestion: Question | undefined = allQuestions[currentQuestionIndex];
  const totalQuestions = allQuestions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  
  const currentTheme = getCurrentTheme();
  const themeIndex = Math.floor(currentQuestionIndex / 10);
  const questionWithinTheme = (currentQuestionIndex % 10) + 1;
  
  const getRandomEncouragement = () => encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
  
  useEffect(() => {
    if (!gameStarted || showFeedback || !currentQuestion || !quizStarted) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [gameStarted, currentQuestionIndex, showFeedback, currentQuestion, quizStarted]);
  
  useEffect(() => {
    if (quizStarted && currentQuestion) {
      setTimeLeft(MAX_QUESTION_TIME);
      setShowFeedback(false);
      setStartTime(Date.now());
    }
  }, [currentQuestionIndex, quizStarted, currentQuestion]);
  
  useEffect(() => {
    if (currentTeam && currentQuestionIndex >= totalQuestions) {
      setQuizCompleted(true);
    }
  }, [currentTeam, currentQuestionIndex, totalQuestions]);
  
  const handleTimeUp = () => {
    if (currentQuestion) {
      const elapsedTime = MAX_QUESTION_TIME; // Max time
      setAnswerTime(elapsedTime);
      
      const result = submitAnswer(currentQuestion.id, -1, elapsedTime);
      setIsCorrect(false);
      setShowFeedback(true);
      
      // Always wait 5 seconds to show feedback
      setTimeout(() => {
        if (isLastQuestion) {
          setQuizCompleted(true);
        } else {
          setNextQuestion();
        }
      }, 5000);
    }
  };
  
  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return;
    
    // Auto-submit the answer when option is selected
    if (currentQuestion) {
      const elapsedTime = Math.min((Date.now() - startTime) / 1000, MAX_QUESTION_TIME);
      setAnswerTime(elapsedTime);
      
      const result = submitAnswer(currentQuestion.id, optionIndex, elapsedTime);
      setIsCorrect(result);
      setShowFeedback(true);
      
      // Always wait 5 seconds to show feedback
      setTimeout(() => {
        if (isLastQuestion) {
          setQuizCompleted(true);
        } else {
          setNextQuestion();
        }
      }, 5000);
    }
  };
  
  const handleStartQuiz = () => {
    startQuiz();
  };
  
  if (!currentTeam || !gameStarted) {
    return (
      <div className="my-4 md:my-8 brutalist-box text-center w-full">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Esperando el inicio del juego</h2>
        <p>El juego comenzará cuando un equipo presione "Iniciar".</p>
      </div>
    );
  }
  
  if (quizCompleted) {
    return <QuizSummary />;
  }
  
  if (showCountdown) {
    return (
      <div className="my-4 md:my-8 brutalist-box text-center py-8 md:py-16 w-full">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">Preparados...</h2>
        <div className="text-6xl md:text-9xl font-bold animate-pulse">
          {countdown === 0 ? "¡GO!" : countdown}
        </div>
      </div>
    );
  }
  
  if (!quizStarted) {
    const encouragement = getRandomEncouragement();
    
    return (
      <div className="my-4 md:my-8 brutalist-box animate-fade-in w-full">
        <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">
          Quiz: <span className={roundThemes[0].textColor}>¡Demuestra tu conocimiento!</span>
        </h2>
        
        <p className="mb-6">
          Te enfrentarás a 100 preguntas sobre diseño. ¡Preparado para la batalla!
        </p>
        
        <div className="flex justify-center my-6">
          <Shell className="h-16 w-16 md:h-24 md:w-24 text-gray-400" />
        </div>
        
        <p className="text-center italic my-4">{encouragement}</p>
        
        <button
          onClick={handleStartQuiz}
          className="brutalist-btn w-full"
        >
          Comenzar Quiz
        </button>
      </div>
    );
  }
  
  if (!currentQuestion) {
    return (
      <div className="my-4 md:my-8 brutalist-box text-center w-full">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Error al cargar la pregunta</h2>
        <p>No se pudo cargar la pregunta actual.</p>
      </div>
    );
  }
  
  return (
    <div className="my-4 md:my-8 w-full">
      <div className="brutalist-box animate-fade-in">
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-bold uppercase">
            Tema: <span className={currentTheme.textColor}>{currentTheme.name}</span>
          </h2>
          <span className="text-base md:text-lg font-mono block mt-2">
            Pregunta {currentQuestionIndex + 1} / {totalQuestions}
          </span>
        </div>
        
        <div className="w-full h-2 brutalist-border bg-white mb-6">
          <div 
            className="h-full bg-black transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="font-bold">Tiempo:</span>
            <span className={`font-mono flex items-center ${timeLeft <= 3 ? "text-red-600 animate-pulse" : ""}`}>
              <Clock className="h-4 w-4 mr-1" /> {timeLeft}s
            </span>
          </div>
          <Progress 
            value={(timeLeft / MAX_QUESTION_TIME) * 100} 
            className="h-3 brutalist-border" 
          />
        </div>
        
        <div className="brutalist-wireframe mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-4 responsive-text">{currentQuestion.text}</h3>
        </div>
        
        <div className="space-y-3 mb-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              className={`w-full p-3 md:p-4 brutalist-border text-left transition-all ${
                showFeedback && index === currentQuestion.correctAnswer
                  ? "bg-green-200 border-green-500"
                  : showFeedback && index !== currentQuestion.correctAnswer
                  ? "bg-white"
                  : "bg-white hover:bg-gray-100"
              }`}
              disabled={showFeedback}
            >
              <div className="quiz-option">
                <span className="quiz-option-label brutalist-border mr-2 text-black">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="quiz-option-text text-black">
                  {option}
                </span>
              </div>
            </button>
          ))}
        </div>
        
        {showFeedback && (
          <div className={`p-4 brutalist-border ${isCorrect ? "bg-green-100" : "bg-red-100"} mb-4`}>
            <p className="font-bold text-black">
              {isCorrect ? "¡Correcto!" : "Incorrecto"}
            </p>
            <p className="text-black responsive-text">
              {isCorrect 
                ? "¡Bien hecho! Has seleccionado la respuesta correcta."
                : `La respuesta correcta era: ${currentQuestion.options[currentQuestion.correctAnswer]}`
              }
            </p>
            <p className="mt-2 text-sm flex items-center text-black">
              <Timer className="h-4 w-4 mr-1" /> Tiempo: {answerTime.toFixed(2)}s
            </p>
            <p className="mt-2 text-sm font-bold animate-pulse text-black">
              {isLastQuestion 
                ? "Finalizando quiz en unos segundos..." 
                : "Siguiente pregunta en unos segundos..."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
