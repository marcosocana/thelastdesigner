
import React from "react";
import { Link } from "react-router-dom";
const Introduction = () => {
  return <div className="max-w-4xl mx-auto my-12 animate-slide-up">
      <div className="brutalist-box">
          <p className="brutalist-title mb-4 text-center text-2xl">Bienvenidx, te estábamos esperando.</p>
        
        <div className="mx-auto max-w-2xl">
         <div className="brutalist-wireframe mb-8 p-6">
  {/* Imagen SVG después del texto */}
  <img src="/APP.svg" alt="The Last Designer" className="mt-6 w-1600 mx-auto" />
            <p className="text-lg mb-6"> </p>
           <p className="text-lg mb-6">Año 2034.</p>

  <p className="mb-4">
    La IA lo ha arrasado todo. Las interfaces ahora son frías, carentes de alma. Son réplicas unas de otras. La creatividad ha sido sustituida por patrones genéricos y decisiones automatizadas. La humanidad ha olvidado lo que es el buen diseño… excepto una persona.
  </p>

  <p className="mb-4 font-bold">Tú.</p>

  <p className="mb-4">
    Eres el último diseñador. La única esperanza para restaurar la esencia del diseño en un mundo dominado por lo artificial. Pero demostrar tu valía no será fácil: 10 rondas, 100 preguntas, un solo destino.
  </p>

  <p className="mb-4">Si fallas, el diseño morirá para siempre. Si triunfas, aún tendremos esperanza.</p>

  <p className="font-bold mt-6 text-base">¿Estás listo para el desafío?</p>

 
        </div>
          
          <h2 className="text-2xl font-bold mb-4 uppercase">REGLAS</h2>
          
          <div className="brutalist-wireframe mb-6">
            <ul className="list-disc pl-5 space-y-1">
              <li>Hay 10 rounds con 10 preguntas cada uno. 100 puntos por pregunta como máximo</li>
              <li>Cada pregunta tiene 4 opciones con 1 única respuesta correcta</li>
              <li>Cada round tiene una temática y debe completarse para desbloquear el siguiente</li>
              <li>Sistema de puntuación basado en aciertos y velocidad al responder</li>
              <li>Debes acertar más de 70 preguntas para salvar el diseño</li>
            </ul>
          </div>
          
          <Link to="/quiz" className="brutalist-btn block text-center uppercase mt-8 mb-8">¡SALVAR AL MUNDO!</Link>
        </div>
      </div>
      
      {/* Nueva caja promocional con fondo amarillo */}
      <div className="brutalist-box mt-8" style={{ backgroundColor: "#F8DE29" }}>
        <div className="mx-auto max-w-2xl py-4">
          <p className="font-bold text-xl mb-4">
            ¡Consigue el Workbook para diseñador Vol. 1 en Amazon y sigue divirtiéndote mientras aprendes diseño!
          </p>
          <a 
            href="https://www.amazon.es/Workbook-para-Dise%C3%B1adores-producto-gr%C3%A1ficos/dp/B0DLTT5WNM" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="brutalist-btn inline-block text-center uppercase mt-2">
            Más información
          </a>
        </div>
      </div>
    </div>;
};
export default Introduction;
