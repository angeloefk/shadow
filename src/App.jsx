import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SimpleFeatures from './components/SimpleFeatures';
import SimpleCommands from './components/SimpleCommands';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

function resolveRoute() {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (
    path === '/terms' || 
    path === '/terms-of-service' || 
    path === '/tos' || 
    hash === '#terms' || 
    hash === '#/terms' || 
    hash === '#terms-of-service'
  ) {
    return 'terms';
  }

  if (
    path === '/privacy' || 
    path === '/privacy-policy' || 
    hash === '#privacy' || 
    hash === '#/privacy' || 
    hash === '#privacy-policy'
  ) {
    return 'privacy';
  }

  return 'home';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(resolveRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      const nextRoute = resolveRoute();
      setCurrentRoute(nextRoute);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (currentRoute === 'terms') {
      document.title = 'Terms of Service | Shadow Music Bot';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentRoute === 'privacy') {
      document.title = 'Privacy Policy | Shadow Music Bot';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.title = 'Shadow Music | The Ultimate Discord Music Bot';
    }
  }, [currentRoute]);

  const navigate = (destination) => {
    let targetPath = destination;
    let nextRoute = 'home';

    if (destination === '/terms' || destination === 'terms') {
      targetPath = '/terms';
      nextRoute = 'terms';
    } else if (destination === '/privacy' || destination === 'privacy') {
      targetPath = '/privacy';
      nextRoute = 'privacy';
    } else {
      targetPath = '/';
      nextRoute = 'home';
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setCurrentRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="shadow-music-app">
      <Navbar currentRoute={currentRoute} onNavigate={navigate} />

      {currentRoute === 'terms' && <TermsOfService onNavigate={navigate} />}
      {currentRoute === 'privacy' && <PrivacyPolicy onNavigate={navigate} />}

      {currentRoute === 'home' && (
        <main>
          <Hero />
          <SimpleFeatures />
          <SimpleCommands />
          <FaqSection />
        </main>
      )}

      <Footer onNavigate={navigate} />
    </div>
  );
}

