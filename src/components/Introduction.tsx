
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const Introduction = () => {
  const { t } = useLanguage();
  
  return <div className="max-w-4xl mx-auto my-12 animate-slide-up">
      <div className="brutalist-box">
          <p className="brutalist-title mb-4 text-center text-2xl">{t('welcome')}</p>
        
        <div className="mx-auto max-w-2xl">
         <div className="brutalist-wireframe mb-8 p-6">
          {/* Imagen SVG después del texto */}
          <img src="/APP.svg" alt="The Last Designer" className="mt-6 w-1600 mx-auto" />
          <p className="text-lg mb-6"> </p>
          <p className="text-lg mb-6">{t('year')}</p>

          <p className="mb-4">
            {t('description1')}
          </p>

          <p className="mb-4 font-bold">{t('description2')}</p>

          <p className="mb-4">
            {t('description3')}
          </p>

          <p className="mb-4">{t('description4')}</p>

          <p className="font-bold mt-6 text-base">{t('readyForChallenge')}</p>
        </div>
          
          <h2 className="text-2xl font-bold mb-4 uppercase">{t('rules')}</h2>
          
          <div className="brutalist-wireframe mb-6">
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('rule1')}</li>
              <li>{t('rule2')}</li>
              <li>{t('rule3')}</li>
              <li>{t('rule4')}</li>
              <li>{t('rule5')}</li>
            </ul>
          </div>
          
          <Link to="/quiz" className="brutalist-btn block text-center uppercase mt-8">{t('saveTheWorld')}</Link>
        </div>
      </div>
    </div>;
};
export default Introduction;
