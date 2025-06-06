
import React from "react";
import Layout from "@/components/Layout";

const Manifiesto = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto my-12 animate-slide-up">
        <div className="brutalist-box">
          <h1 className="brutalist-title mb-8 text-5xl">MANIFIESTO</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">El diseño es mucho más que técnica. Es la libertad de imaginar, de explorar sin límites y de transformar lo cotidiano en algo extraordinario.</p>
            <p className="mb-4">Sin embargo, hoy estamos rodeados de patrones y algoritmos que nos dicen cómo deben verse las cosas, cómo deben sentirse, cómo deben funcionar. Se impone una lógica que prioriza la eficiencia sobre la creatividad, la repetición sobre la originalidad. Pero el diseño no debería ser una simple ejecución de reglas.</p>
            <p className="mb-4">El verdadero diseño nace de la experimentación, del riesgo y de la decisión consciente de romper normas cuando es necesario. Cada avance en el diseño ha surgido gracias a quienes se atrevieron a desafiar lo establecido, a quienes vieron más allá de lo convencional.</p>
            <p className="mb-4">El diseño no solo resuelve problemas; también emociona, cuestiona y transforma. No puede reducirse a fórmulas ni depender únicamente de herramientas automatizadas. La tecnología es una aliada, pero nunca debe reemplazar la visión del diseñador.</p>
            <p className="mb-4">El futuro del diseño depende de nuestra capacidad para defender su libertad. Para explorar, para equivocarnos, para crear lo inesperado. Porque sin libertad, el diseño se vuelve predecible. Pero con ella, el diseño cambia el mundo.</p>
            <p className="mb-4">Hoy, nos levantamos en defensa de la libertad del diseño, y luchamos para que nunca nos impongan restricciones que ahoguen nuestra creatividad. Porque solo cuando el diseño es libre, el mundo puede ser transformado de verdad.</p>
            <p className="mb-4">--------</p>
                     
            <p className="mb-4">Esta experiencia ha sido desarrollada por Marcos Ocaña, diseñador, autor del <a href="https://www.amazon.es/Workbook-para-Dise%C3%B1adores-producto-gr%C3%A1ficos/dp/B0DLTT5WNM" target="_blank" rel="noopener noreferrer" className="underline hover:text-brutalist-700">Workbook para Diseñadores</a> y firme defensor de que el aprendizaje debe ser tan divertido como desafiante.</p>
            
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
