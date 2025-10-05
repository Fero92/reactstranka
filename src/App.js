import React from 'react';
import Header from './components/Header';
import ContentGrid from './components/ContentGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-center">
      <header className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-0 py-10 text-white min-h-screen">
        <Header />
        <ContentGrid />
      </header>
      <Footer />
    </div>
  );
}

export default App;
