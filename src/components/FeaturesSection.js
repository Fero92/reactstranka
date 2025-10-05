import React from 'react';

const FeaturesSection = () => {
  const features = [
    "Responzívny dizajn",
    "Moderný vzhľad", 
    "Jednoduchá štruktúra",
    "Pripravené na rozšírenie"
  ];

  return (
    <section className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 transition-transform duration-300 hover:-translate-y-2">
      <h2 className="text-white text-2xl font-semibold mb-4">
        Funkcie
      </h2>
      <ul className="text-left pl-5 space-y-2 opacity-90 leading-relaxed">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturesSection;
