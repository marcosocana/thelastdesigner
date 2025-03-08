
import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 animate-slide-up">
      <div className="brutalist-box">
        <h1 className="brutalist-title mb-8">DISEÑATHON</h1>
        
        <div className="text-center">
          <Link to="/quiz" className="brutalist-btn block mx-auto uppercase text-xl py-4 px-8 mt-8 max-w-md">
            ¡Comenzar el Reto!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
