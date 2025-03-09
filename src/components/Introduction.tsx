
import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 animate-slide-up">
      <div className="brutalist-box">
        <h1 className="brutalist-title mb-8">THE LAST DESIGNER</h1>
        
        <div className="mx-auto max-w-2xl">
          <div className="brutalist-wireframe mb-8 p-6">
            <p className="text-lg mb-6">Año 2077.</p>
            
            <p className="mb-4">La IA lo ha arrasado todo. Las interfaces son frías, carentes de alma. La creatividad ha sido sustituida por patrones genéricos y decisiones automatizadas. La humanidad ha olvidado lo que es el buen diseño… excepto una persona.</p>
            
            <p className="mb-4 font-bold">Tú.</p>
            
            <p className="mb-4">Eres el último diseñador. La única esperanza para restaurar la esencia del diseño en un mundo dominado por lo artificial. Pero demostrar tu valía no será fácil: 10 rondas, 100 preguntas, un solo destino.</p>
            
            <p className="mb-4">Si fallas, el diseño morirá para siempre. Si triunfas, aún hay esperanza.</p>
            
            <p className="text-xl font-bold mt-6">¿Estás listo para el desafío?</p>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 uppercase">Estructura</h2>
          
          <div className="brutalist-wireframe mb-6">
            <ul className="list-disc pl-5 space-y-1">
              <li>10 rounds con 10 preguntas cada uno</li>
              <li>Cada round tiene una temática diferente</li>
              <li>Cada round debe completarse para desbloquear el siguiente</li>
              <li>Cuenta atrás al inicio de cada round (3, 2, 1, ¡GO!)</li>
              <li>Sistema de puntuación basado en velocidad y precisión</li>
              <li>Puntuación máxima de 1000 puntos por round</li>
              <li>Debes acertar más de 70 preguntas para salvar el diseño</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 uppercase">Temáticas</h2>
          
          <div className="brutalist-wireframe mb-6 p-4">
            <ol className="list-decimal pl-5 space-y-1">
              <li>Fundamentos de UX</li>
              <li>UI y Diseño Visual</li>
              <li>Design Systems</li>
              <li>Research y Data-Driven Design</li>
              <li>UX Writing & Microcopy</li>
              <li>Mobile UX y Responsive Design</li>
              <li>Prototipado y Herramientas</li>
              <li>Diseño Inclusivo y Accesibilidad</li>
              <li>Heurísticas y Evaluación UX</li>
              <li>Negocio y Estrategia de Producto</li>
            </ol>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 uppercase">Reglas</h2>
          
          <div className="brutalist-wireframe mb-6">
            <ul className="list-disc pl-5 space-y-1">
              <li>Cada pregunta tiene 4 opciones con una única respuesta correcta</li>
              <li>Las respuestas más rápidas obtienen más puntos</li>
              <li>Los equipos deben iniciar los rounds para competir</li>
              <li>Al final se muestra una tabla resumen con todos los puntos acumulados</li>
              <li>Para salvar el diseño, debes acertar al menos 70 preguntas</li>
            </ul>
          </div>
          
          <Link to="/quiz" className="brutalist-btn block text-center uppercase mt-8">
            ¡Aceptar el Desafío!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
