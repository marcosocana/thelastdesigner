
import React from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";

const Manifiesto = () => {
  const { language } = useLanguage();
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto my-12 animate-slide-up">
        <div className="brutalist-box">
          <h1 className="brutalist-title mb-8 text-5xl">
            {language === 'es' ? 'MANIFIESTO' : 'MANIFESTO'}
          </h1>
          
          <div className="prose max-w-none">
            {language === 'es' ? (
              <>
                <p className="mb-4">El diseño es mucho más que técnica. Es la libertad de imaginar, de explorar sin límites y de transformar lo cotidiano en algo extraordinario.</p>
                <p className="mb-4">Sin embargo, hoy estamos rodeados de patrones y algoritmos que nos dicen cómo deben verse las cosas, cómo deben sentirse, cómo deben funcionar. Se impone una lógica que prioriza la eficiencia sobre la creatividad, la repetición sobre la originalidad. Pero el diseño no debería ser una simple ejecución de reglas.</p>
                <p className="mb-4">El verdadero diseño nace de la experimentación, del riesgo y de la decisión consciente de romper normas cuando es necesario. Cada avance en el diseño ha surgido gracias a quienes se atrevieron a desafiar lo establecido, a quienes vieron más allá de lo convencional.</p>
                <p className="mb-4">El diseño no solo resuelve problemas; también emociona, cuestiona y transforma. No puede reducirse a fórmulas ni depender únicamente de herramientas automatizadas. La tecnología es una aliada, pero nunca debe reemplazar la visión del diseñador.</p>
                <p className="mb-4">El futuro del diseño depende de nuestra capacidad para defender su libertad. Para explorar, para equivocarnos, para crear lo inesperado. Porque sin libertad, el diseño se vuelve predecible. Pero con ella, el diseño cambia el mundo.</p>
                <p className="mb-4">Hoy, nos levantamos en defensa de la libertad del diseño, y luchamos para que nunca nos impongan restricciones que ahoguen nuestra creatividad. Porque solo cuando el diseño es libre, el mundo puede ser transformado de verdad.</p>
                <p className="mb-4">--------</p>
                          
                <p className="mb-4">Esta experiencia ha sido desarrollada por Marcos Ocaña, diseñador, autor del Workbook para Diseñadores y firme defensor de que el aprendizaje debe ser tan divertido como desafiante.</p>
                
                <p className="mb-4">
                  <a href="https://www.linkedin.com/in/marcosocana/" target="_blank" rel="noopener noreferrer" className="brutalist-border px-3 py-1 inline-block hover:bg-black hover:text-white transition-colors">
                    Perfil de LinkedIn
                  </a>
                </p>
              </>
            ) : (
              <>
                <p className="mb-4">Design is much more than technique. It is the freedom to imagine, to explore without limits and to transform the ordinary into something extraordinary.</p>
                <p className="mb-4">However, today we are surrounded by patterns and algorithms that tell us how things should look, how they should feel, how they should function. A logic that prioritizes efficiency over creativity, repetition over originality is imposed. But design shouldn't be a simple execution of rules.</p>
                <p className="mb-4">True design is born from experimentation, from risk-taking, and from the conscious decision to break norms when necessary. Every advancement in design has come from those who dared to challenge the established, who saw beyond the conventional.</p>
                <p className="mb-4">Design not only solves problems; it also excites, questions, and transforms. It cannot be reduced to formulas or depend solely on automated tools. Technology is an ally, but it should never replace the designer's vision.</p>
                <p className="mb-4">The future of design depends on our ability to defend its freedom. To explore, to make mistakes, to create the unexpected. Because without freedom, design becomes predictable. But with it, design changes the world.</p>
                <p className="mb-4">Today, we rise in defense of design freedom, and we fight so that restrictions that stifle our creativity are never imposed on us. Because only when design is free can the world be truly transformed.</p>
                <p className="mb-4">--------</p>
                          
                <p className="mb-4">This experience has been developed by Marcos Ocaña, designer, author of the Workbook for Designers and strong advocate that learning should be as fun as it is challenging.</p>
                
                <p className="mb-4">
                  <a href="https://www.linkedin.com/in/marcosocana/" target="_blank" rel="noopener noreferrer" className="brutalist-border px-3 py-1 inline-block hover:bg-black hover:text-white transition-colors">
                    LinkedIn Profile
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Manifiesto;
