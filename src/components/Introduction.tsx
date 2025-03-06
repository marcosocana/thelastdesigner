
import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 animate-slide-up">
      <div className="brutalist-box">
        <h1 className="brutalist-title mb-8">EL GRAN RETO DEL DISAINER</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 uppercase">Sobre el Creador</h2>
            <div className="mb-4 brutalist-border p-2 max-w-xs">
              {/* Placeholder image - replace with actual image of Marcos */}
              <div className="w-full h-60 bg-brutalist-100 flex items-center justify-center">
                <span className="text-lg font-mono">[FOTO DE MARCOS]</span>
              </div>
            </div>
            
            <p className="mb-4">
              <strong>Marcos Ocaña Talavera</strong> es un diseñador con amplia experiencia en el campo del diseño gráfico y digital.
            </p>
            
            <p className="mb-4">
              Especializado en diseño de interfaces y experiencia de usuario, Marcos ha trabajado en diversos proyectos innovadores que combinan funcionalidad y estética.
            </p>
            
            <p className="mb-4">
              <a 
                href="https://www.linkedin.com/in/marcosocana/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="brutalist-border px-3 py-1 inline-block hover:bg-black hover:text-white transition-colors"
              >
                Perfil de LinkedIn
              </a>
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4 uppercase">Sobre el Quiz</h2>
            
            <div className="brutalist-wireframe mb-6">
              <h3 className="text-xl font-bold mb-2">Niveles</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Principiante</li>
                <li>Medio</li>
                <li>Avanzado</li>
              </ul>
              <p className="text-sm mt-2">
                Cada nivel contiene 25 preguntas sobre diseño.
              </p>
            </div>
            
            <div className="brutalist-wireframe mb-6">
              <h3 className="text-xl font-bold mb-2">Reglas</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Para avanzar al siguiente nivel, debes acertar al menos 20 preguntas</li>
                <li>Cada pregunta tiene 4 opciones con una única respuesta correcta</li>
                <li>Los equipos en la misma sala compiten entre sí</li>
              </ul>
            </div>
            
            <Link 
              to="/quiz" 
              className="brutalist-btn block text-center uppercase mt-8"
            >
              ¡Comenzar el Reto!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
