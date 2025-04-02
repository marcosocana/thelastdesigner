
import React, { useState } from "react";
import { useQuiz } from "@/context/QuizContext";
import { Button } from "@/components/ui/button";

const TeamCreation = () => {
  const { createTeam } = useQuiz();
  
  const [teamName, setTeamName] = useState("");
  const [teamLogo, setTeamLogo] = useState<string | null>(null);
  
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
    
    if (teamName.trim() === "") {
      return;
    }
    
    // Create the team with a single default member
    createTeam(teamName, ["Participante"], teamLogo);
  };
  
  const isFormValid = teamName.trim() !== "";
  
  return (
    <div className="my-8 max-w-md mx-auto animate-fade-in">
      <div className="brutalist-box">
        <h2 className="text-2xl font-bold mb-6 uppercase">
          Crear Equipo
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
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
            className={`brutalist-btn w-full ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!isFormValid}
          >
            Siguiente
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeamCreation;
