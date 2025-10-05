import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 transition-transform duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
      <h2 className="text-white text-2xl font-semibold mb-4">
        Kontakt
      </h2>
      <p className="leading-relaxed opacity-90">
        Ak máte otázky, neváhajte sa ozvať!
      </p>
      <div className="mt-4 p-3 bg-white/20 rounded-lg">
        <p className="text-sm opacity-90">
          📧 Email: info@example.com
        </p>
        <p className="text-sm opacity-90 mt-1">
          📱 Tel: +421 123 456 789
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
