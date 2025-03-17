import React from "react";
import { Link } from "react-router-dom";
const Introduction = () => {
  return <div className="max-w-4xl mx-auto my-12 animate-slide-up">
      <div className="brutalist-box">
        <h1 className="brutalist-title mb-8 text-center text-4xl">BIENVENIDX. TE ESTÁBAMOS ESPERANDO.</h1>
        
        <div className="mx-auto max-w-2xl">
         <div className="brutalist-wireframe mb-8 p-6">
  <p className="text-lg mb-6">Año 2077.</p>

  <p className="mb-4">
    La IA lo ha arrasado todo. Las interfaces son frías, carentes de alma. Son réplicas unas de otras. La creatividad ha sido sustituida por patrones genéricos y decisiones automatizadas. La humanidad ha olvidado lo que es el buen diseño… excepto una persona.
  </p>

  <p className="mb-4 font-bold">Tú.</p>

  <p className="mb-4">
    Eres el último diseñador. La única esperanza para restaurar la esencia del diseño en un mundo dominado por lo artificial. Pero demostrar tu valía no será fácil: 10 rondas, 100 preguntas, un solo destino.
  </p>

  <p className="mb-4">Si fallas, el diseño morirá para siempre. Si triunfas, tendremos esperanza.</p>

  <p className="font-bold mt-6 text-base">¿Estás listo para el desafío?</p>

  {/* Imagen SVG después del texto */}
  <img src="/APP.svg" alt="The Last Designer" className="mt-6 w-1600 mx-auto" />
        </div>
          
          <h2 className="text-2xl font-bold mb-4 uppercase">REGLAS</h2>
          
          <div className="brutalist-wireframe mb-6">
            <ul className="list-disc pl-5 space-y-1">
              <li>Hay 10 rounds con 10 preguntas cada uno. 100 puntos por pregunta</li>
              <li>Cada pregunta tiene 4 opciones con una única respuesta correcta</li>
              <li>Cada round tiene una temática y debe completarse para desbloquear el siguiente</li>
              <li>Sistema de puntuación basado en aciertos y velocidad al responder</li>
              <li>Debes acertar más de 70 preguntas para salvar el diseño</li>
            </ul>
          </div>
          
          <Link to="/quiz" className="brutalist-btn block text-center uppercase mt-8">¡SALVAR AL MUNDO!</Link>
        </div>
      </div>
    </div>;
};
export default Introduction;