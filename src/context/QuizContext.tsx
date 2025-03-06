
import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { QuizContextType, Team, Room, Question, QuizLevel } from "@/types";
import { questions } from "@/data/questions";

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

  // Load state from localStorage on mount
  useEffect(() => {
    const storedTeam = localStorage.getItem("currentTeam");
    const storedRoom = localStorage.getItem("currentRoom");
    const storedRooms = localStorage.getItem("rooms");
    
    if (storedTeam) setCurrentTeam(JSON.parse(storedTeam));
    if (storedRoom) setCurrentRoom(JSON.parse(storedRoom));
    if (storedRooms) setRooms(JSON.parse(storedRooms));
  }, []);

  // Save state to localStorage on change
  useEffect(() => {
    if (currentTeam) localStorage.setItem("currentTeam", JSON.stringify(currentTeam));
    if (currentRoom) {
      localStorage.setItem("currentRoom", JSON.stringify(currentRoom));
      
      // Update leaderboard when room changes
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
  }, [currentTeam, currentRoom, rooms]);

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

    // Check if a room with this password exists
    let room = rooms.find(r => r.password === password);
    
    if (room) {
      // Add team to existing room
      const updatedRoom = {
        ...room,
        teams: [...room.teams, newTeam],
      };
      
      setCurrentRoom(updatedRoom);
      
      // Update rooms list
      const updatedRooms = rooms.map(r => 
        r.id === room!.id ? updatedRoom : r
      );
      
      setRooms(updatedRooms);
    } else {
      // Create new room with this password
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
    if (room && currentTeam) {
      // Add current team to this room
      const updatedRoom = {
        ...room,
        teams: [...room.teams, currentTeam],
      };
      
      setCurrentRoom(updatedRoom);
      
      // Update rooms list
      const updatedRooms = rooms.map(r => 
        r.id === room.id ? updatedRoom : r
      );
      
      setRooms(updatedRooms);
      return updatedRoom;
    }
    return null;
  };

  const submitAnswer = (questionId: number, answerIndex: number): boolean => {
    if (!currentTeam) return false;

    // Find the question
    const question = questions.find(q => q.id === questionId);
    if (!question) return false;

    // Check if answer is correct
    const isCorrect = question.correctAnswer === answerIndex;
    
    // Update team score and completed questions
    if (currentTeam) {
      const level = question.level;
      
      // Mark question as completed regardless of correctness
      const updatedCompletedQuestions = {
        ...currentTeam.completedQuestions,
        [level]: [...currentTeam.completedQuestions[level], questionId]
      };
      
      // Update score only if correct
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
      
      // Update team in current room
      if (currentRoom) {
        const updatedRoomTeams = currentRoom.teams.map(team => 
          team.id === currentTeam.id ? updatedTeam : team
        );
        
        const updatedRoom = {
          ...currentRoom,
          teams: updatedRoomTeams,
        };
        
        setCurrentRoom(updatedRoom);
        
        // Update room in rooms list
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
    
    // Need at least 20 correct answers to advance
    if (correct < 20) return false;
    
    const currentLevel = currentTeam.currentLevel;
    let nextLevel: QuizLevel | null = null;
    
    if (currentLevel === "beginner") {
      nextLevel = "intermediate";
    } else if (currentLevel === "intermediate") {
      nextLevel = "advanced";
    } else {
      // Already at highest level
      return false;
    }
    
    if (nextLevel) {
      const updatedTeam = {
        ...currentTeam,
        currentLevel: nextLevel,
      };
      
      setCurrentTeam(updatedTeam);
      
      // Update team in current room
      if (currentRoom) {
        const updatedRoomTeams = currentRoom.teams.map(team => 
          team.id === currentTeam.id ? updatedTeam : team
        );
        
        const updatedRoom = {
          ...currentRoom,
          teams: updatedRoomTeams,
        };
        
        setCurrentRoom(updatedRoom);
        
        // Update room in rooms list
        const updatedRooms = rooms.map(room => 
          room.id === currentRoom.id ? updatedRoom : room
        );
        
        setRooms(updatedRooms);
      }
      
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
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
