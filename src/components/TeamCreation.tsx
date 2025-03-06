
import React, { useState, useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const TeamCreation = () => {
  const { createTeam, joinRoom } = useQuiz();
  
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");
  const [memberCount, setMemberCount] = useState(1);
  const [memberNames, setMemberNames] = useState<string[]>([""]);
  const [teamLogo, setTeamLogo] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [isReconnecting, setIsReconnecting] = useState(false);
  
  // Check for saved session data
  useEffect(() => {
    const savedSession = localStorage.getItem("quizSession");
    if (savedSession) {
      try {
        const session = JSON.parse(savedSession);
        if (session.teamName && session.password) {
          setTeamName(session.teamName);
          setPassword(session.password);
          setIsReconnecting(true);
        }
      } catch (error) {
        console.error("Error parsing saved session:", error);
      }
    }
  }, []);
  
  const handleMemberCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value);
    if (count > 0 && count <= 10) {
      setMemberCount(count);
      
      // Update member names array length
      if (count > memberNames.length) {
        // Add empty names
        setMemberNames([...memberNames, ...Array(count - memberNames.length).fill("")]);
      } else {
        // Remove excess names
        setMemberNames(memberNames.slice(0, count));
      }
    }
  };
  
  const handleMemberNameChange = (index: number, name: string) => {
    const updatedNames = [...memberNames];
    updatedNames[index] = name;
    setMemberNames(updatedNames);
  };
  
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setTeamLogo(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      // Validate first step
      if (teamName.trim() === "" || password.trim() === "") {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Por favor, completa todos los campos obligatorios"
        });
        return;
      }
      setStep(2);
    } else {
      // Validate second step
      if (memberNames.some(name => name.trim() === "")) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Por favor, ingresa el nombre de todos los miembros"
        });
        return;
      }
      
      // Save session data for reconnection
      localStorage.setItem("quizSession", JSON.stringify({
        teamName,
        password
      }));
      
      // Create the team
      createTeam(teamName, memberNames, teamLogo, password);
      
      toast({
        title: "¡Equipo creado con éxito!",
        description: "Te has unido a la sala."
      });
    }
  };
  
  const handleReconnect = () => {
    // Attempt to rejoin the room with saved credentials
    const room = joinRoom(password);
    
    if (room) {
      toast({
        title: "Reconexión exitosa",
        description: "Has vuelto a unirte a tu sala anterior."
      });
    } else {
      setIsReconnecting(false);
      localStorage.removeItem("quizSession");
      toast({
        variant: "destructive",
        title: "Error al reconectar",
        description: "No se pudo encontrar la sala anterior. Por favor, crea un nuevo equipo."
      });
    }
  };
  
  const handleCancelReconnect = () => {
    setIsReconnecting(false);
    setTeamName("");
    setPassword("");
    localStorage.removeItem("quizSession");
  };
  
  const isStepOneValid = teamName.trim() !== "" && password.trim() !== "";
  const isStepTwoValid = memberNames.every(name => name.trim() !== "");
  
  // Show reconnection UI if we have detected a previous session
  if (isReconnecting) {
    return (
      <div className="my-8 max-w-md mx-auto animate-fade-in">
        <div className="brutalist-box">
          <h2 className="text-2xl font-bold mb-6 uppercase">Sesión anterior detectada</h2>
          
          <div className="space-y-4 mb-6">
            <p>Parece que ya tenías un equipo en una sala.</p>
            <div className="brutalist-border p-3">
              <p><strong>Equipo:</strong> {teamName}</p>
              <p><strong>Contraseña de sala:</strong> {password}</p>
            </div>
            <p>¿Quieres volver a unirte a esta sala con tu equipo?</p>
          </div>
          
          <div className="flex gap-4">
            <Button
              onClick={handleReconnect}
              className="brutalist-btn flex-1"
            >
              Reconectar
            </Button>
            <Button
              onClick={handleCancelReconnect}
              className="brutalist-btn-secondary flex-1"
            >
              Crear nuevo equipo
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="my-8 max-w-md mx-auto animate-fade-in">
      <div className="brutalist-box">
        <h2 className="text-2xl font-bold mb-6 uppercase">
          {step === 1 ? "Crear Equipo" : "Añadir Miembros"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 ? (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-bold">Nombre del Equipo *</label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="brutalist-input"
                    placeholder="Ingresa el nombre de tu equipo"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-1 font-bold">Contraseña de Sala *</label>
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="brutalist-input"
                    placeholder="Contraseña para unirse a una sala"
                    required
                  />
                  <p className="text-xs mt-1">
                    Los equipos con la misma contraseña estarán en la misma sala.
                  </p>
                </div>
                
                <div>
                  <label className="block mb-1 font-bold">Logo del Equipo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="brutalist-input"
                  />
                  {teamLogo && (
                    <div className="mt-2 brutalist-border p-2 w-24 h-24">
                      <img
                        src={teamLogo}
                        alt="Logo del equipo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
              
              <button
                type="submit"
                className={`brutalist-btn w-full ${!isStepOneValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!isStepOneValid}
              >
                Siguiente
              </button>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-bold">Número de Miembros</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={memberCount}
                    onChange={handleMemberCountChange}
                    className="brutalist-input"
                  />
                </div>
                
                {memberNames.map((name, index) => (
                  <div key={index}>
                    <label className="block mb-1 font-bold">
                      Miembro {index + 1} *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => handleMemberNameChange(index, e.target.value)}
                      className="brutalist-input"
                      placeholder={`Nombre del Miembro ${index + 1}`}
                      required
                    />
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="brutalist-btn-secondary flex-1"
                >
                  Atrás
                </button>
                <button
                  type="submit"
                  className={`brutalist-btn flex-1 ${!isStepTwoValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!isStepTwoValid}
                >
                  Crear Equipo
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default TeamCreation;
