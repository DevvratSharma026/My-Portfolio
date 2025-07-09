import React from 'react';
import { Code, Globe, Rocket } from 'lucide-react';
import GlassmorphicCard from '../UI/GlassmorphicCard';
import SectionTitle from '../UI/SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about my journey and passion for web development"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <GlassmorphicCard className="p-6" glowColor="purple">
            <div className="text-center mb-4">
              <div className="w-16 h-16 mx-auto bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center">
                <Code className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-space-100 mt-4">Web Developer</h3>
            </div>
            <p className="text-space-300 text-center">
              Passionate about crafting clean, efficient code that translates into seamless user experiences.
              I specialize in modern frameworks and AI integration for innovative solutions.
            </p>
          </GlassmorphicCard>
          
          <GlassmorphicCard className="p-6" glowColor="blue">
            <div className="text-center mb-4">
              <div className="w-16 h-16 mx-auto bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center">
                <Rocket className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-space-100 mt-4">Problem Solver</h3>
            </div>
            <p className="text-space-300 text-center">
              I approach challenges with analytical thinking and leverage AI technologies.
              Every problem is an opportunity to innovate and create smarter solutions.
            </p>
          </GlassmorphicCard>
          
          <GlassmorphicCard className="p-6" glowColor="teal">
            <div className="text-center mb-4">
              <div className="w-16 h-16 mx-auto bg-teal-500 bg-opacity-20 rounded-full flex items-center justify-center">
                <Globe className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-space-100 mt-4">Tech Explorer</h3>
            </div>
            <p className="text-space-300 text-center">
              Continuously exploring new technologies and AI advancements to enhance development capabilities.
              Focused on creating intelligent and efficient web solutions.
            </p>
          </GlassmorphicCard>
        </div>
        
        <div className="mt-16">
          <GlassmorphicCard className="p-6 md:p-8" glowColor="blue">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-space-100 mb-4">
                  <span className="text-gradient-blue">My Journey</span>
                </h3>
                <p className="text-space-300 mb-4">
                  I'm a web developer and problem solver Graduate in B.Tech-IT from 
                  Dr. Akhilesh Das Gupta Institute of Professional Studies (2021-25).
                </p>
                <p className="text-space-300">
                  My passion lies in building intelligent, performant web applications using modern technologies
                  and AI integration. I'm constantly exploring new frameworks, AI tools, and design patterns to
                  create smarter and more efficient digital experiences.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-space-600 pl-4">
                  <h3 className="text-xl font-semibold text-space-100 mb-2">Education</h3>
                  <div className="mb-4">
                    <h4 className="text-space-200">B.Tech - Information Technology</h4>
                    <p className="text-space-400 text-sm">Dr. Akhilesh Das Gupta Institute of Professional Studies</p>
                    <p className="text-space-500 text-xs">2021 - 2025</p>
                  </div>
                </div>
                
                <div className="border-l-2 border-space-600 pl-4">
                  <h3 className="text-xl font-semibold text-space-100 mb-2">Interests</h3>
                  <ul className="text-space-300 list-disc list-inside">
                    <li>AI-Powered Web Development</li>
                    <li>Intelligent UI/UX Design</li>
                    <li>Performance Optimization</li>
                    <li>AI Integration in Web Apps</li>
                  </ul>
                </div>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;