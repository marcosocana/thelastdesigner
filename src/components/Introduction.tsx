
import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 animate-slide-up">
      <div className="brutalist-box">
        <h1 className="brutalist-title mb-8">EL GRAN RETO DEL DISAINER</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 uppercase">Sobre el Quiz</h2>
            
            <div className="brutalist-wireframe mb-6">
              <h3 className="text-xl font-bold mb-2">Estructura</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>10 rounds con 10 preguntas cada uno</li>
                <li>Cada round debe completarse para desbloquear el siguiente</li>
                <li>Cuenta atrás al inicio de cada round (3, 2, 1, ¡GO!)</li>
                <li>Sistema de puntuación basado en velocidad y precisión</li>
                <li>Puntuación máxima de 1000 puntos por round</li>
              </ul>
            </div>
            
            <div className="brutalist-wireframe mb-6">
              <h3 className="text-xl font-bold mb-2">Reglas</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cada pregunta tiene 4 opciones con una única respuesta correcta</li>
                <li>Las respuestas más rápidas obtienen más puntos</li>
                <li>Los equipos deben iniciar los rounds simultáneamente para competir</li>
                <li>Al final se muestra una tabla resumen con todos los puntos acumulados</li>
              </ul>
            </div>
            
            <Link to="/quiz" className="brutalist-btn block text-center uppercase mt-8">
              ¡Comenzar el Reto!
            </Link>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4 uppercase">Nosotros</h2>
            
            <p className="mb-4">
              <strong>Marcos Ocaña Talavera</strong> es un diseñador con amplia experiencia en el campo del diseño gráfico y digital.
            </p>
            
            <p className="mb-4">
              Especializado en diseño de interfaces y experiencia de usuario, Marcos ha trabajado en diversos proyectos innovadores que combinan funcionalidad y estética.
            </p>
            
            <p className="mb-4">
              <a href="https://www.linkedin.com/in/marcosocana/" target="_blank" rel="noopener noreferrer" className="brutalist-border px-3 py-1 inline-block hover:bg-black hover:text-white transition-colors">
                Perfil de LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
