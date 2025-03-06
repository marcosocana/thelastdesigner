import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { QuizContextType, Team, Room, Question, QuizLevel } from "@/types";
import { questions } from "@/data/questions";

interface TeamProgress {
  teamId: string;
  teamName: string;
  currentQuestionIndex: number;
  answeredCorrectly: boolean;
  answeredIncorrectly: boolean;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTeam, setCurrentTeam] = useState<Team | null>(null);
  const [currentRoom, setCurrentRoom] = useState<Room | null>(null);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [leaderboard, setLeaderboard] = useState<Team[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [teamsProgress, setTeamsProgress] = useState<TeamProgress[]>([]);

  useEffect(() => {
    const storedTeam = localStorage.getItem("currentTeam");
    const storedRoom = localStorage.getItem("currentRoom");
    const storedRooms = localStorage.getItem("rooms");
    const storedGameStarted = localStorage.getItem("gameStarted");
    
    if (storedTeam) setCurrentTeam(JSON.parse(storedTeam));
    if (storedRoom) setCurrentRoom(JSON.parse(storedRoom));
    if (storedRooms) setRooms(JSON.parse(storedRooms));
    if (storedGameStarted) setGameStarted(JSON.parse(storedGameStarted));
  }, []);

  useEffect(() => {
    if (currentTeam) localStorage.setItem("currentTeam", JSON.stringify(currentTeam));
    if (currentRoom) {
      localStorage.setItem("currentRoom", JSON.stringify(currentRoom));
      
      if (currentRoom.teams.length > 0) {
        const sortedTeams = [...currentRoom.teams].sort((a, b) => {
          const totalScoreA = a.score.beginner + a.score.intermediate + a.score.advanced;
          const totalScoreB = b.score.beginner + b.score.intermediate + b.score.advanced;
          return totalScoreB - totalScoreA;
        });
        
        setLeaderboard(sortedTeams);
      }
    }
    if (rooms.length > 0) localStorage.setItem("rooms", JSON.stringify(rooms));
    localStorage.setItem("gameStarted", JSON.stringify(gameStarted));
  }, [currentTeam, currentRoom, rooms, gameStarted]);

  useEffect(() => {
    if (gameStarted && currentRoom) {
      const initialProgress: TeamProgress[] = currentRoom.teams.map(team => ({
        teamId: team.id,
        teamName: team.name,
        currentQuestionIndex: 0,
        answeredCorrectly: false,
        answeredIncorrectly: false
      }));
      
      setTeamsProgress(initialProgress);
    }
  }, [gameStarted, currentRoom]);

  const createTeam = (name: string, memberNames: string[], logo: string | null, password: string) => {
    const newTeam: Team = {
      id: uuidv4(),
      name,
      logo,
      members: memberNames.map(name => ({ id: uuidv4(), name })),
      currentLevel: "beginner",
      score: {
        beginner: 0,
        intermediate: 0,
        advanced: 0,
      },
      completedQuestions: {
        beginner: [],
        intermediate: [],
        advanced: [],
      },
    };

    setCurrentTeam(newTeam);

    let room = rooms.find(r => r.password === password);
    
    if (room) {
      const updatedRoom = {
        ...room,
        teams: [...room.teams, newTeam],
      };
      
      setCurrentRoom(updatedRoom);
      
      const updatedRooms = rooms.map(r => 
        r.id === room!.id ? updatedRoom : r
      );
      
      setRooms(updatedRooms);
    } else {
      const newRoom: Room = {
        id: uuidv4(),
        password,
        teams: [newTeam],
      };
      
      setCurrentRoom(newRoom);
      setRooms([...rooms, newRoom]);
    }
  };

  const joinRoom = (password: string): Room | null => {
    const room = rooms.find(r => r.password === password);
    
    if (room) {
      // If the current team is already in the room, just reconnect
      const existingTeam = currentTeam ? room.teams.find(t => t.id === currentTeam.id) : null;
      
      if (existingTeam) {
        // The team already exists in this room, just update the current team state
        setCurrentTeam(existingTeam);
        setCurrentRoom(room);
        return room;
      } else if (currentTeam) {
        // The team exists but isn't in this room yet, add it
        const updatedRoom = {
          ...room,
          teams: [...room.teams, currentTeam],
        };
        
        setCurrentRoom(updatedRoom);
        
        const updatedRooms = rooms.map(r => 
          r.id === room.id ? updatedRoom : r
        );
        
        setRooms(updatedRooms);
        return updatedRoom;
      }
    }
    return null;
  };

  const startGame = (): boolean => {
    if (!currentRoom || currentRoom.teams.length === 0) {
      return false;
    }
    
    setGameStarted(true);
    setCurrentQuestionIndex(0);
    return true;
  };

  const setNextQuestion = () => {
    setCurrentQuestionIndex(prev => prev + 1);
    
    if (currentTeam && currentRoom) {
      const updatedProgress = teamsProgress.map(progress => 
        progress.teamId === currentTeam.id
          ? { 
              ...progress, 
              currentQuestionIndex: currentQuestionIndex + 1,
              answeredCorrectly: false,
              answeredIncorrectly: false
            }
          : progress
      );
      
      setTeamsProgress(updatedProgress);
    }
  };

  const submitAnswer = (questionId: number, answerIndex: number): boolean => {
    if (!currentTeam) return false;

    const question = questions.find(q => q.id === questionId);
    if (!question) return false;

    const isCorrect = question.correctAnswer === answerIndex;
    
    if (currentTeam) {
      const level = question.level;
      
      const updatedCompletedQuestions = {
        ...currentTeam.completedQuestions,
        [level]: [...currentTeam.completedQuestions[level], questionId]
      };
      
      const updatedScore = {
        ...currentTeam.score,
        [level]: isCorrect ? currentTeam.score[level] + 1 : currentTeam.score[level]
      };
      
      const updatedTeam = {
        ...currentTeam,
        score: updatedScore,
        completedQuestions: updatedCompletedQuestions,
      };
      
      setCurrentTeam(updatedTeam);
      
      const updatedProgress = teamsProgress.map(progress => 
        progress.teamId === currentTeam.id
          ? { 
              ...progress, 
              answeredCorrectly: isCorrect,
              answeredIncorrectly: !isCorrect
            }
          : progress
      );
      
      setTeamsProgress(updatedProgress);
      
      if (currentRoom) {
        const updatedRoomTeams = currentRoom.teams.map(team => 
          team.id === currentTeam.id ? updatedTeam : team
        );
        
        const updatedRoom = {
          ...currentRoom,
          teams: updatedRoomTeams,
        };
        
        setCurrentRoom(updatedRoom);
        
        const updatedRooms = rooms.map(room => 
          room.id === currentRoom.id ? updatedRoom : room
        );
        
        setRooms(updatedRooms);
      }
    }
    
    return isCorrect;
  };

  const getCurrentLevelProgress = () => {
    if (!currentTeam) return { correct: 0, total: 0, percentage: 0 };
    
    const level = currentTeam.currentLevel;
    const correct = currentTeam.score[level];
    const levelQuestions = questions.filter(q => q.level === level);
    const total = levelQuestions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    return { correct, total, percentage };
  };

  const getCurrentLevelQuestions = (): Question[] => {
    if (!currentTeam) return [];
    
    const level = currentTeam.currentLevel;
    return questions.filter(q => q.level === level);
  };

  const advanceLevel = (): boolean => {
    if (!currentTeam) return false;
    
    const { correct } = getCurrentLevelProgress();
    
    if (correct < 20) return false;
    
    const currentLevel = currentTeam.currentLevel;
    let nextLevel: QuizLevel | null = null;
    
    if (currentLevel === "beginner") {
      nextLevel = "intermediate";
    } else if (currentLevel === "intermediate") {
      nextLevel = "advanced";
    } else {
      return false;
    }
    
    if (nextLevel) {
      const updatedTeam = {
        ...currentTeam,
        currentLevel: nextLevel,
      };
      
      setCurrentTeam(updatedTeam);
      
      if (currentRoom) {
        const updatedRoomTeams = currentRoom.teams.map(team => 
          team.id === currentTeam.id ? updatedTeam : team
        );
        
        const updatedRoom = {
          ...currentRoom,
          teams: updatedRoomTeams,
        };
        
        setCurrentRoom(updatedRoom);
        
        const updatedRooms = rooms.map(room => 
          room.id === currentRoom.id ? updatedRoom : room
        );
        
        setRooms(updatedRooms);
      }
      
      setCurrentQuestionIndex(0);
      
      return true;
    }
    
    return false;
  };

  const value = {
    currentTeam,
    setCurrentTeam,
    currentRoom,
    setCurrentRoom,
    createTeam,
    joinRoom,
    submitAnswer,
    getCurrentLevelProgress,
    getCurrentLevelQuestions,
    advanceLevel,
    leaderboard,
    gameStarted,
    startGame,
    currentQuestionIndex,
    setNextQuestion,
    teamsProgress
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
