
import React from "react";
import Layout from "@/components/Layout";

const Manifiesto = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto my-12 animate-slide-up">
        <div className="brutalist-box">
          <h1 className="brutalist-title mb-8">MANIFIESTO</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">El diseño no es solo una función, ni un conjunto de reglas a seguir. Es libertad. Es la capacidad de imaginar, de romper moldes, de pensar fuera de la caja, de dar forma a ideas sin restricciones.

En un mundo donde las herramientas son cada vez más controladas por algoritmos, donde las decisiones son automatizadas, el diseño ha perdido su alma. Se nos han impuesto patrones, reglas predefinidas, interfaces que se replican sin emoción.

Pero el diseño no puede ser encarcelado. El diseño es rebelde.

Es la voz de la creatividad que resiste, la chispa de lo inesperado. Es el rechazo al control, la constante búsqueda de lo único, lo auténtico, lo genuino.

El diseño debe ser libre para innovar, para desafiar, para cambiar. Solo cuando rompemos las normas es cuando realmente creamos algo que importa.

La libertad de diseño es lo que nos mantiene vivos. Es lo que nos impulsa a seguir buscando, a seguir arriesgando, a seguir creando sin fronteras.

Que nunca nos arrebaten esta libertad. Que nunca nos silencien. Porque el diseño, en su forma más pura, es nuestro derecho a imaginar y transformar el mundo.</p>
            
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
