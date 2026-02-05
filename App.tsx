import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Acting from './components/Acting';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-pastel-200 selection:text-pastel-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Acting />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;