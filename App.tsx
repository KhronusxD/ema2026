import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Features } from './components/Features';
import { Teachers } from './components/Teachers';
import { Timeline } from './components/Timeline';
import { Values } from './components/Values';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Trips } from './components/Trips';
import { Methodology } from './components/Methodology';
import { Investment } from './components/Investment';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ministry-base text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Manifesto />
        <Methodology />
        <Features />
        <Trips />
        <Teachers />
        <Timeline />
        <Investment />
        <Values />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;