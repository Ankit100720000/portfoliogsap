import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import SelectedWorks from './components/SelectedWorks';
import Skills from './components/Skills';
import Journal from './components/Journal';
import Education from './components/Education';
import Explorations from './components/Explorations';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
        e.preventDefault();
        const el = document.querySelector(anchor.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <main className="bg-bg min-h-screen">
          <Hero />
          <SelectedWorks />
          <Skills />
          <Journal />
          <Education />
          <Explorations />
          <Stats />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
