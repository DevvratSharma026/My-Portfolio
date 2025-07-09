import React from 'react';
import { 
  Blocks, 
  FileJson, 
  Cpu, 
  Database, 
  GitBranch, 
  Wifi, 
  Palette, 
  Gauge, 
  MonitorSmartphone,
  LayoutGrid,
  FileCode,
  Server,
  Box,
  Wrench
} from 'lucide-react';
import GlassmorphicCard from '../UI/GlassmorphicCard';
import SkillMeter from '../UI/SkillMeter';
import SectionTitle from '../UI/SectionTitle';

const SkillsSection: React.FC = () => {
  const frontendSkills = [
    { name: 'React', icon: <Blocks />, color: 'text-blue-500' },
    { name: 'Next.js', icon: <LayoutGrid />, color: 'text-blue-400' },
    { name: 'Tailwind CSS', icon: <FileCode />, color: 'text-blue-600' },
    { name: 'JavaScript', icon: <FileJson />, color: 'text-blue-500' },
    { name: 'TypeScript', icon: <Cpu />, color: 'text-blue-400' },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <Server />, color: 'text-green-500' },
    { name: 'Express', icon: <Box />, color: 'text-green-600' },
    { name: 'MongoDB', icon: <Database />, color: 'text-green-500' },
    { name: 'PostgreSQL', icon: <Database />, color: 'text-green-400' },
    { name: 'RESTful APIs', icon: <Wrench />, color: 'text-green-600' },
  ];

  const otherSkills = [
    { name: 'Git', icon: <GitBranch />, color: 'text-purple-500' },
    { name: 'WebSockets', icon: <Wifi />, color: 'text-purple-600' },
    { name: 'UI/UX Design', icon: <Palette />, color: 'text-purple-400' },
    { name: 'Performance', icon: <Gauge />, color: 'text-purple-500' },
    { name: 'Responsive Design', icon: <MonitorSmartphone />, color: 'text-purple-600' },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="My technical expertise and proficiency in various technologies"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="skill-category">
            <GlassmorphicCard className="p-6" glowColor="blue">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold text-space-100 inline-block">
                  <span className="text-gradient-blue">Frontend</span>
                </h3>
                <div className="h-0.5 w-16 bg-blue-500 mx-auto mt-2"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {frontendSkills.map((skill) => (
                  <SkillMeter
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </GlassmorphicCard>
          </div>
          
          <div className="skill-category">
            <GlassmorphicCard className="p-6" glowColor="teal">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold text-space-100 inline-block">
                  <span className="text-gradient-green">Backend</span>
                </h3>
                <div className="h-0.5 w-16 bg-green-500 mx-auto mt-2"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {backendSkills.map((skill) => (
                  <SkillMeter
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </GlassmorphicCard>
          </div>
          
          <div className="skill-category">
            <GlassmorphicCard className="p-6" glowColor="purple">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold text-space-100 inline-block">
                  <span className="text-gradient-purple">Tools & Others</span>
                </h3>
                <div className="h-0.5 w-16 bg-purple-500 mx-auto mt-2"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {otherSkills.map((skill) => (
                  <SkillMeter
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;