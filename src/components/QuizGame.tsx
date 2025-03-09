import React, { useState, useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import { Question } from "@/types";
import { Progress } from "@/components/ui/progress";
import { Clock, Timer } from "lucide-react";
import QuizSummary from "./QuizSummary";

const roundThemes = [
  { name: "Fundamentos de UX", color: "bg-blue-100", borderColor: "border-blue-300", textColor: "text-blue-800" },
  { name: "UI y Diseño Visual", color: "bg-purple-100", borderColor: "border-purple-300", textColor: "text-purple-800" },
  { name: "Design Systems", color: "bg-green-100", borderColor: "border-green-300", textColor: "text-green-800" },
  { name: "Research y Data-Driven Design", color: "bg-yellow-100", borderColor: "border-yellow-300", textColor: "text-yellow-800" },
  { name: "UX Writing & Microcopy", color: "bg-pink-100", borderColor: "border-pink-300", textColor: "text-pink-800" },
  { name: "Mobile UX y Responsive Design", color: "bg-red-100", borderColor: "border-red-300", textColor: "text-red-800" },
  { name: "Prototipado y Herramientas", color: "bg-indigo-100", borderColor: "border-indigo-300", textColor: "text-indigo-800" },
  { name: "Diseño Inclusivo y Accesibilidad", color: "bg-teal-100", borderColor: "border-teal-300", textColor: "text-teal-800" },
  { name: "Heurísticas y Evaluación UX", color: "bg-orange-100", borderColor: "border-orange-300", textColor: "text-orange-800" },
  { name: "Negocio y Estrategia de Producto", color: "bg-cyan-100", borderColor: "border-cyan-300", textColor: "text-cyan-800" }
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
  
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
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
    if (!currentTeam) return roundThemes[0];
    return roundThemes[currentTeam.currentRound - 1] || roundThemes[0];
  };
  
  const roundTheme = getCurrentRoundTheme();
  
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
      setSelectedOption(null);
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
      const elapsedTime = 10; // Max time
      setAnswerTime(elapsedTime);
      
      submitAnswer(currentQuestion.id, -1, elapsedTime);
      setIsCorrect(false);
      setShowFeedback(true);
      
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setNextQuestion();
        } else {
          setRoundCompleted(true);
        }
      }, 2000);
    }
  };
  
  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return;
    setSelectedOption(optionIndex);
  };
  
  const handleSubmit = () => {
    if (selectedOption === null || !currentQuestion) return;
    
    const elapsedTime = Math.min((Date.now() - startTime) / 1000, 10);
    setAnswerTime(elapsedTime);
    
    const result = submitAnswer(currentQuestion.id, selectedOption, elapsedTime);
    setIsCorrect(result);
    setShowFeedback(true);
    
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setNextQuestion();
      } else {
        setRoundCompleted(true);
      }
    }, 2000);
  };
  
  const handleStartRound = () => {
    startRound();
  };
  
  if (!currentTeam || !gameStarted) {
    return (
      <div className="my-8 brutalist-box text-center">
        <h2 className="text-2xl font-bold mb-4">Esperando el inicio del juego</h2>
        <p>El juego comenzará cuando un equipo presione "Iniciar".</p>
      </div>
    );
  }
  
  if (allRoundsCompleted) {
    return <QuizSummary />;
  }
  
  if (showCountdown) {
    return (
      <div className={`my-8 brutalist-box text-center py-16 ${roundTheme.color}`}>
        <h2 className="text-4xl font-bold mb-8">Preparados...</h2>
        <div className="text-9xl font-bold animate-pulse">
          {countdown === 0 ? "¡GO!" : countdown}
        </div>
      </div>
    );
  }
  
  if (!roundStarted) {
    return (
      <div className={`my-8 brutalist-box animate-fade-in ${roundTheme.color}`}>
        <h2 className="text-2xl font-bold mb-4 uppercase">
          Round {currentTeam.currentRound}: {roundTheme.name}
        </h2>
        
        {roundCompleted ? (
          <div className={`my-6 p-4 brutalist-border ${roundTheme.borderColor}`}>
            <h3 className="text-xl mb-2">Resultados del Round {currentTeam.currentRound - 1}:</h3>
            
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
              <div className="p-4 brutalist-border bg-yellow-100 mb-4">
                <p className="font-bold">¡Atención!</p>
                <p>Debes completar el Round {currentTeam.currentRound - 1} antes de avanzar.</p>
              </div>
            )}
            
            <button
              onClick={handleStartRound}
              className={`brutalist-btn w-full ${roundTheme.textColor} ${roundTheme.borderColor}`}
              disabled={currentTeam.currentRound > 1 && !currentTeam.completedRounds.includes(currentTeam.currentRound - 1)}
            >
              {roundCompleted 
                ? `Iniciar Round ${currentTeam.currentRound}: ${roundThemes[currentTeam.currentRound - 1]?.name}` 
                : currentTeam.completedRounds.includes(currentTeam.currentRound - 1) 
                  ? `Iniciar Round ${currentTeam.currentRound}: ${roundTheme.name}` 
                  : `Continuar Round ${currentTeam.currentRound}: ${roundTheme.name}`
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
              Ver Resumen Final
            </button>
          </div>
        )}
      </div>
    );
  }
  
  if (roundCompleted) {
    const currentRoundScores = currentTeam.roundScores.find(rs => rs.round === currentTeam.currentRound - 1);
    
    return (
      <div className={`my-8 brutalist-box animate-fade-in ${roundTheme.color}`}>
        <h2 className="text-2xl font-bold mb-4 uppercase">
          Round {currentTeam.currentRound - 1} Completado: {roundThemes[currentTeam.currentRound - 2]?.name}
        </h2>
        
        {currentTeam.roundScores
          .filter(rs => rs.round === currentTeam.currentRound - 1)
          .map(rs => (
            <div key={rs.round} className={`p-4 brutalist-border mb-4 ${roundTheme.borderColor}`}>
              <h3 className="text-xl font-bold">Puntuación del Round {rs.round}</h3>
              <p className="text-4xl font-bold my-2">{rs.score} pts</p>
              <p className="text-sm">
                Tiempo total: {rs.totalTime.toFixed(2)} segundos
              </p>
            </div>
          ))
        }
        
        <button
          onClick={handleStartRound}
          className={`brutalist-btn w-full ${roundTheme.textColor} ${roundTheme.borderColor}`}
        >
          {currentTeam.currentRound <= 10 
            ? `Iniciar Round ${currentTeam.currentRound}: ${roundThemes[currentTeam.currentRound - 1]?.name}` 
            : "Ver Resultados Finales"
          }
        </button>
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
      <div className={`brutalist-box animate-fade-in ${roundTheme.color}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold uppercase">
            Round {currentTeam.currentRound}: {roundTheme.name}
          </h2>
          <span className="text-lg font-mono">
            Pregunta {currentQuestionIndex + 1} / {questions.length}
          </span>
        </div>
        
        <div className="w-full h-2 brutalist-border bg-white mb-6">
          <div 
            className={`h-full ${roundTheme.textColor.replace('text-', 'bg-').replace('-800', '-500')} transition-all duration-300`}
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="font-bold">Tiempo restante:</span>
            <span className={`font-mono flex items-center ${timeLeft <= 3 ? "text-red-600 animate-pulse" : ""}`}>
              <Clock className="h-4 w-4 mr-1" /> {timeLeft} segundos
            </span>
          </div>
          <Progress 
            value={(timeLeft / 10) * 100} 
            className={`h-3 brutalist-border`} 
          />
        </div>
        
        <div className={`brutalist-wireframe mb-6 ${roundTheme.borderColor}`}>
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
                  : `bg-white hover:${roundTheme.color}`
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
            <p className="mt-2 text-sm flex items-center">
              <Timer className="h-4 w-4 mr-1" /> Tiempo de respuesta: {answerTime.toFixed(2)} segundos
            </p>
          </div>
        ) : (
          <button
            onClick={handleSubmit}
            className={`brutalist-btn w-full ${roundTheme.textColor} ${roundTheme.borderColor}`}
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
