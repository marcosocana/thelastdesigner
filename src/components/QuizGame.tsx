import React, { useState, useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import { Question } from "@/types";
import { Progress } from "@/components/ui/progress";
import { Clock, Timer, shell } from "lucide-react";
import QuizSummary from "./QuizSummary";
import { useIsMobile } from "@/hooks/use-mobile";

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
  "¡Sigue así! Estás a una respuesta correcta de que te llamen ‘Senior Visionary Designer’ en LinkedIn.",
  "Cada respuesta correcta es un píxel más en el gran diseño de la humanidad. ¡No dejes espacios en blanco!",
  "¡Máquina, fiera, figura! Si sigues así, los clientes van a dejar de pedirte ‘algo tipo Apple’.",
  "Estás demostrando que la IA jamás podrá diseñar con flow. ¡Sigue adelante!",
  "Estás a un par de respuestas correctas de que tu madre entienda qué es lo que haces en el trabajo.",
  "¡Cuidado! Si sigues respondiendo así de bien, te van a pedir ‘un diseño rapidito’ en la oficina.",
  "Vas más fuerte que una mascletà en fallas. ¡Sigue así!",
  "¡No te detengas! La IA no podrá robarte el puesto si demuestras que el diseño es más que pintar pantallitas.",
  "Ere un crá. ¿Un piquito?",
  "¡Wow! Si sigues así, vas a hacer que los clientes dejen de pedir el logo más grande."
];

const QuizGame = () => {
  const { 
    currentTeam, 
    getCurrentRoundQuestions,
    getRoundProgress,
    submitAnswer,
    gameStarted,
    roundStarted,
    startRound,
    currentQuestionIndex,
    setNextQuestion,
    countdown,
    showCountdown
  } = useQuiz();
  
  const isMobile = useIsMobile();
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [roundCompleted, setRoundCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [answerTime, setAnswerTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [allRoundsCompleted, setAllRoundsCompleted] = useState(false);
  
  const questions = getCurrentRoundQuestions();
  const currentQuestion: Question | undefined = questions[currentQuestionIndex];
  const progress = currentTeam ? getRoundProgress(currentTeam.currentRound) : { correct: 0, total: 0, percentage: 0 };
  
  const getCurrentRoundTheme = () => {
    if (!currentTeam) return { name: roundThemes[0].name, textColor: roundThemes[0].textColor };
    return roundThemes[currentTeam.currentRound - 1] || roundThemes[0];
  };
  
  const roundTheme = getCurrentRoundTheme();
  const getRandomEncouragement = () => encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
  
  useEffect(() => {
    if (!gameStarted || showFeedback || !currentQuestion || !roundStarted) return;
    
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
  }, [gameStarted, currentQuestionIndex, showFeedback, currentQuestion, roundStarted]);
  
  useEffect(() => {
    if (roundStarted && currentQuestion) {
      setTimeLeft(10);
      setShowFeedback(false);
      setStartTime(Date.now());
    }
  }, [currentQuestionIndex, roundStarted, currentQuestion]);
  
  useEffect(() => {
    if (
      currentTeam && 
      roundStarted &&
      currentQuestionIndex >= questions.length
    ) {
      setRoundCompleted(true);
      setStartTime(0);
    } else {
      setRoundCompleted(false);
    }
  }, [currentTeam, roundStarted, currentQuestionIndex, questions.length]);
  
  useEffect(() => {
    if (currentTeam && currentTeam.currentRound > 10) {
      setAllRoundsCompleted(true);
    }
  }, [currentTeam]);
  
  const handleTimeUp = () => {
    if (currentQuestion) {
      const elapsedTime = 20; // Max time
      setAnswerTime(elapsedTime);
      
      const result = submitAnswer(currentQuestion.id, -1, elapsedTime);
      setIsCorrect(false);
      setShowFeedback(true);
      
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setNextQuestion();
        } else {
          setRoundCompleted(true);
        }
      }, 3000);
    }
  };
  
  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return;
    
    // Auto-submit the answer when option is selected
    if (currentQuestion) {
      const elapsedTime = Math.min((Date.now() - startTime) / 1000, 10);
      setAnswerTime(elapsedTime);
      
      const result = submitAnswer(currentQuestion.id, optionIndex, elapsedTime);
      setIsCorrect(result);
      setShowFeedback(true);
      
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setNextQuestion();
        } else {
          setRoundCompleted(true);
        }
      }, 3000);
    }
  };
  
  const handleStartRound = () => {
    startRound();
  };
  
  if (!currentTeam || !gameStarted) {
    return (
      <div className="my-4 md:my-8 brutalist-box text-center w-full">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Esperando el inicio del juego</h2>
        <p>El juego comenzará cuando un equipo presione "Iniciar".</p>
      </div>
    );
  }
  
  if (allRoundsCompleted) {
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
  
  if (!roundStarted) {
    const encouragement = getRandomEncouragement();
    
    return (
      <div className="my-4 md:my-8 brutalist-box animate-fade-in w-full">
        <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">
          Round {currentTeam.currentRound}: <span className={roundTheme.textColor}>{roundTheme.name}</span>
        </h2>
        
        {roundCompleted ? (
          <div className="my-4 md:my-6 p-4 brutalist-border">
            <h3 className="text-lg md:text-xl mb-2">Resultados del Round {currentTeam.currentRound - 1}:</h3>
            
            {currentTeam.roundScores
              .filter(rs => rs.round === currentTeam.currentRound - 1)
              .map(rs => (
                <div key={rs.round} className="mb-4">
                  <p className="font-bold text-xl">Puntuación: {rs.score} pts</p>
                  <p className="text-sm">
                    Tiempo total: {rs.totalTime.toFixed(2)} segundos
                  </p>
                </div>
              ))
            }
            
            <div className="flex justify-center my-4">
              <shell className="h-16 w-16 md:h-24 md:w-24 text-gray-400" />
            </div>
            
            <p className="text-center italic my-4">{encouragement}</p>
          </div>
        ) : (
          <p className="mb-4">
            {currentTeam.completedRounds.length === 0 
              ? "¡Es hora de comenzar tu primer round!" 
              : `Has completado ${currentTeam.completedRounds.length} ${currentTeam.completedRounds.length === 1 ? 'round' : 'rounds'} hasta ahora.`
            }
          </p>
        )}
        
        {currentTeam.currentRound <= 10 ? (
          <>
            {currentTeam.currentRound > 1 && !currentTeam.completedRounds.includes(currentTeam.currentRound - 1) && (
              <div className="p-4 brutalist-border bg-yellow-100 mb-4 text-black">
                <p className="font-bold">¡Atención!</p>
                <p>Debes completar el Round {currentTeam.currentRound - 1} antes de avanzar.</p>
              </div>
            )}
            
            <button
              onClick={handleStartRound}
              className="brutalist-btn w-full"
              disabled={currentTeam.currentRound > 1 && !currentTeam.completedRounds.includes(currentTeam.currentRound - 1)}
            >
              {roundCompleted 
                ? `Round ${currentTeam.currentRound}`
                : currentTeam.completedRounds.includes(currentTeam.currentRound - 1) 
                  ? `Round ${currentTeam.currentRound}`
                  : `Round ${currentTeam.currentRound}`
              }
            </button>
          </>
        ) : (
          <div className="p-4 brutalist-border bg-brutalist-100">
            <h3 className="text-xl font-bold mb-2">¡FELICIDADES!</h3>
            <p>Has completado todos los rounds del quiz. ¡Eres un verdadero Disainer!</p>
            <button 
              onClick={() => setAllRoundsCompleted(true)} 
              className="brutalist-btn w-full mt-4"
            >
              Ver Resumen
            </button>
          </div>
        )}
      </div>
    );
  }
  
  if (roundCompleted) {
    const encouragement = getRandomEncouragement();
    
    return (
      <div className="my-4 md:my-8 brutalist-box animate-fade-in w-full">
        <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">
          Round {currentTeam.currentRound - 1} Completado: <span className={roundThemes[currentTeam.currentRound - 2]?.textColor}>{roundThemes[currentTeam.currentRound - 2]?.name}</span>
        </h2>
        
        {currentTeam.roundScores
          .filter(rs => rs.round === currentTeam.currentRound - 1)
          .map(rs => (
            <div key={rs.round} className="p-4 brutalist-border mb-4">
              <h3 className="text-xl font-bold">Puntuación del Round {rs.round}</h3>
              <p className="text-4xl font-bold my-2">{rs.score} pts</p>
              <p className="text-sm">
                Tiempo total: {rs.totalTime.toFixed(2)} segundos
              </p>
            </div>
          ))
        }
        
        <div className="flex justify-center my-6">
          <shell className="h-16 w-16 md:h-24 md:w-24 text-gray-400" />
        </div>
        
        <p className="text-center italic my-4">{encouragement}</p>
        
        <button
          onClick={handleStartRound}
          className="brutalist-btn w-full"
        >
          {currentTeam.currentRound <= 10 
            ? `Round ${currentTeam.currentRound}`
            : "Ver Resultados"
          }
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
            Round {currentTeam.currentRound}: <span className={roundTheme.textColor}>{roundTheme.name}</span>
          </h2>
          <span className="text-base md:text-lg font-mono block mt-2">
            Pregunta {currentQuestionIndex + 1} / {questions.length}
          </span>
        </div>
        
        <div className="w-full h-2 brutalist-border bg-white mb-6">
          <div 
            className="h-full bg-black transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
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
            value={(timeLeft / 10) * 100} 
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
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
