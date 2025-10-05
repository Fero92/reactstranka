import React from 'react';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import ContactSection from './ContactSection';

const ContentGrid = () => {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:p-5">
      <AboutSection />
      <FeaturesSection />
      <ContactSection />
    </div>
  );
};

export default ContentGrid;
