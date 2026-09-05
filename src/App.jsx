import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBento from './components/FeaturesBento';
import DspStudio from './components/DspStudio';
import AiDjSandbox from './components/AiDjSandbox';
import CommandsExplorer from './components/CommandsExplorer';
import LeaderboardSection from './components/LeaderboardSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="shadow-music-app">
      <Navbar />
      <main>
        <Hero />
        <FeaturesBento />
        <DspStudio />
        <AiDjSandbox />
        <CommandsExplorer />
        <LeaderboardSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
