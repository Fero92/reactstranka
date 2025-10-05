import React, { useState } from 'react';

const AboutSection = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  const resetCount = (e) => {
    e.stopPropagation(); // Zabráni zvýšeniu počítadla pri kliknutí na tlačidlo
    setClickCount(0);
  };

  return (
    <section 
      className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
      onClick={handleClick}
    >
      <h2 className="text-white text-2xl font-semibold mb-4">
        O aplikácii
      </h2>
      <p className="leading-relaxed opacity-90">
        Táto aplikácia je vytvorená pomocou React knižnice. 
        React je JavaScript knižnica na budovanie používateľských rozhraní.
      </p>
      <div className="mt-4 p-3 bg-white/20 rounded-lg">
        <p className="text-white font-semibold">
          Počet kliknutí: <span className="text-yellow-300 text-xl">{clickCount}</span>
        </p>
        <p className="text-sm opacity-80 mt-1">
          Kliknite na túto sekciu pre zvýšenie počítadla!
        </p>
        <button
          onClick={resetCount}
          className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 active:scale-95"
        >
          🔄 Nulovať počítadlo
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
