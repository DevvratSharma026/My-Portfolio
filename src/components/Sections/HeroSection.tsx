import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import GlassmorphicCard from '../UI/GlassmorphicCard';

const HeroSection: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!typingRef.current) return;
    
    const phrases = [
      'Web Developer',
      'Problem Solver',
      'UI/UX Enthusiast',
      'Tech Explorer'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
        }
        typingSpeed = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
        }
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end of word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before typing next word
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const typingTimeout = setTimeout(type, 1000);
    
    return () => clearTimeout(typingTimeout);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Space elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-block relative">
            <div className="text-sm uppercase tracking-widest text-space-400 mb-2 animate-fadeIn">
              <span className="text-glow-green">SYSTEM</span>/<span className="text-glow-blue">PORTFOLIO</span>/<span className="text-glow-purple">LOADED</span>
            </div>
            <GlassmorphicCard className="p-6 md:p-10" glowColor="blue">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-space-100">Devvrat Sharma</span>
              </h1>
              <div className="flex justify-center items-center h-8">
                <span className="text-glow-blue mr-2">&lt;</span>
                <span ref={typingRef} className="text-gradient-blue text-xl md:text-2xl"></span>
                <span className="text-glow-blue animate-blink ml-1">|</span>
                <span className="text-glow-blue ml-2">/&gt;</span>
              </div>
              <p className="text-space-300 mt-6 max-w-lg mx-auto leading-relaxed text-base md:text-lg">
                 Passionate Web and Software Developer with strong skills in full-stack development, AI, and generative AI. Experienced in building responsive web
 apps using modern frameworks like MERN, Next.js, and Tailwind CSS. Skilled in integrating AI models and crafting effective prompts to create
 intelligent, user-focused solutions.
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <a 
                  href="#projects" 
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium 
                  hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
                >
                  Explore My Work
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 rounded-lg border border-space-500 text-space-200 font-medium 
                  hover:bg-space-700 hover:text-space-100 transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
            </GlassmorphicCard>
          </div>
          
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a 
              href="#about" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-space-800 bg-opacity-50 
              border border-space-600 text-space-300 hover:text-space-100 transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;