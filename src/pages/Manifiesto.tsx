
import React from "react";
import Layout from "@/components/Layout";

const Manifiesto = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto my-12 animate-slide-up">
        <div className="brutalist-box">
          <h1 className="brutalist-title mb-8">MANIFIESTO</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">Diseñar no es solo cuestión de talento, es un reto constante, un juego de lógica, creatividad y estrategia. El Diseñathon ha sido creado para poner a prueba tus conocimientos, desafiarte y, sobre todo, para que aprendas y te diviertas en equipo.</p>
            
            <p className="mb-4">Aquí no hay gurús, solo diseñadores dispuestos a demostrar lo que saben y a descubrir lo que aún les queda por aprender. Cada pregunta es una batalla, cada nivel un nuevo desafío, y solo los mejores equipos alcanzarán la cima.</p>
            
            <p className="mb-4">Esta experiencia ha sido desarrollada por Marcos Ocaña, diseñador, autor del Workbook para Diseñadores y firme defensor de que el aprendizaje debe ser tan divertido como desafiante.</p>
            
            <p className="mb-4">
              <a href="https://www.linkedin.com/in/marcosocana/" target="_blank" rel="noopener noreferrer" className="brutalist-border px-3 py-1 inline-block hover:bg-black hover:text-white transition-colors">
                Perfil de LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Manifiesto;
