import React from 'react';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import ContactSection from './ContactSection';

const ContentGrid = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 md:px-6 lg:px-8">
      <AboutSection />
      <FeaturesSection />
      <ContactSection />
    </div>
  );
};

export default ContentGrid;
