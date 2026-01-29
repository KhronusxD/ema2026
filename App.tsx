import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Features } from './components/Features';
import { Timeline } from './components/Timeline';
import { Values } from './components/Values';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ministry-base text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Manifesto />
        <Features />
        <Timeline />
        <Values />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;