import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import SpaceBackground from './components/Layout/SpaceBackground';
import Header from './components/Layout/Header';
import HeroSection from './components/Sections/HeroSection';
import AboutSection from './components/Sections/AboutSection';
import SkillsSection from './components/Sections/SkillsSection';
import ProjectsSection from './components/Sections/ProjectsSection';
import CertificationsSection from './components/Sections/CertificationsSection';
import ContactSection from './components/Sections/ContactSection';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-space-900 text-space-100 overflow-hidden">
        <SpaceBackground />
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;