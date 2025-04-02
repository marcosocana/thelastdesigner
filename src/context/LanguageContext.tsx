
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'en';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

// All translations organized by language and key
const translations: Translations = {
  es: {
    welcome: "Bienvenidx, te estábamos esperando.",
    year: "Año 2077.",
    description1: "La IA lo ha arrasado todo. Las interfaces ahora son frías, carentes de alma. Son réplicas unas de otras. La creatividad ha sido sustituida por patrones genéricos y decisiones automatizadas. La humanidad ha olvidado lo que es el buen diseño… excepto una persona.",
    description2: "Tú.",
    description3: "Eres el último diseñador. La única esperanza para restaurar la esencia del diseño en un mundo dominado por lo artificial. Pero demostrar tu valía no será fácil: 10 rondas, 100 preguntas, un solo destino.",
    description4: "Si fallas, el diseño morirá para siempre. Si triunfas, aún tendremos esperanza.",
    readyForChallenge: "¿Estás listo para el desafío?",
    rules: "REGLAS",
    rule1: "Hay 10 rounds con 10 preguntas cada uno. 100 puntos por pregunta como máximo",
    rule2: "Cada pregunta tiene 4 opciones con 1 única respuesta correcta",
    rule3: "Cada round tiene una temática y debe completarse para desbloquear el siguiente",
    rule4: "Sistema de puntuación basado en aciertos y velocidad al responder",
    rule5: "Debes acertar más de 70 preguntas para salvar el diseño",
    saveTheWorld: "¡SALVAR AL MUNDO!",
    manifesto: "Manifiesto",
    copyright: "Todos los derechos reservados",
  },
  en: {
    welcome: "Welcome, we've been waiting for you.",
    year: "Year 2077.",
    description1: "AI has swept everything away. Interfaces are now cold, soulless. They are replicas of each other. Creativity has been replaced by generic patterns and automated decisions. Humanity has forgotten what good design is... except for one person.",
    description2: "You.",
    description3: "You are the last designer. The only hope to restore the essence of design in a world dominated by the artificial. But proving your worth won't be easy: 10 rounds, 100 questions, one destiny.",
    description4: "If you fail, design will die forever. If you succeed, we still have hope.",
    readyForChallenge: "Are you ready for the challenge?",
    rules: "RULES",
    rule1: "There are 10 rounds with 10 questions each. Maximum 100 points per question",
    rule2: "Each question has 4 options with only 1 correct answer",
    rule3: "Each round has a theme and must be completed to unlock the next one",
    rule4: "Scoring system based on correct answers and response speed",
    rule5: "You must get more than 70 questions right to save design",
    saveTheWorld: "SAVE THE WORLD!",
    manifesto: "Manifesto",
    copyright: "All rights reserved",
  }
};

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
