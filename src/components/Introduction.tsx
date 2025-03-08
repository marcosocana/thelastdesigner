
import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 animate-slide-up">
      <div className="brutalist-box">
        <h1 className="brutalist-title mb-8">DISEÑATHON</h1>
        
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 uppercase">Estructura</h2>
          
          <div className="brutalist-wireframe mb-6">
            <ul className="list-disc pl-5 space-y-1">
              <li>10 rounds con 10 preguntas cada uno</li>
              <li>Cada round debe completarse para desbloquear el siguiente</li>
              <li>Cuenta atrás al inicio de cada round (3, 2, 1, ¡GO!)</li>
              <li>Sistema de puntuación basado en velocidad y precisión</li>
              <li>Puntuación máxima de 1000 puntos por round</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 uppercase">Reglas</h2>
          
          <div className="brutalist-wireframe mb-6">
            <ul className="list-disc pl-5 space-y-1">
              <li>Cada pregunta tiene 4 opciones con una única respuesta correcta</li>
              <li>Las respuestas más rápidas obtienen más puntos</li>
              <li>Los equipos deben iniciar los rounds para competir</li>
              <li>Al final se muestra una tabla resumen con todos los puntos acumulados</li>
            </ul>
          </div>
          
          <Link to="/quiz" className="brutalist-btn block text-center uppercase mt-8">
            ¡Comenzar el Reto!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
