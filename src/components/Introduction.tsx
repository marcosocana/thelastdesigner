
import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 animate-slide-up">
      <div className="brutalist-box">
        <h1 className="brutalist-title mb-8">THECHALLENGE.DESIGN</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 uppercase">Nosotros</h2>
            <p className="mb-4">
              Diseñar no es solo cuestión de talento, es un reto constante, un juego de lógica, creatividad y estrategia. 
              El Gran Reto del Disainer ha sido creado para poner a prueba tus conocimientos, desafiarte y, sobre todo, 
              para que aprendas y te diviertas en equipo.
            </p>
            
            <p className="mb-4">
              Aquí no hay gurús, solo diseñadores dispuestos a demostrar lo que saben y a descubrir lo que aún les queda 
              por aprender. Cada pregunta es una batalla, cada nivel un nuevo desafío, y solo los mejores equipos alcanzarán la cima.
            </p>
            
            <p className="mb-4">
              Esta experiencia ha sido desarrollada por Marcos Ocaña, diseñador, autor del Workbook para Diseñadores y 
              firme defensor de que el aprendizaje debe ser tan divertido como desafiante.
            </p>
            
            <p className="mb-4">
              <a href="https://www.linkedin.com/in/marcosocana/" target="_blank" rel="noopener noreferrer" className="brutalist-border px-3 py-1 inline-block hover:bg-black hover:text-white transition-colors">
                Perfil de LinkedIn
              </a>
            </p>
          </div>
          
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
                <li>Al final se muestra una tabla resumen con todos los puntos acumulados</li>
                <li>Comparte tu resultado en LinkedIn al finalizar</li>
              </ul>
            </div>
            
            <Link to="/quiz" className="brutalist-btn block text-center uppercase mt-8">
              ¡Comenzar el Reto!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
