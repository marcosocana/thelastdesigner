
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-1 uppercase font-bold hover:underline"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4" />
      <span>{language === 'es' ? 'ES / EN' : 'EN / ES'}</span>
    </button>
  );
};

export default LanguageSwitcher;
