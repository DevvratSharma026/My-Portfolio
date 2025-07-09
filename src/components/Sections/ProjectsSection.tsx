import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import GlassmorphicCard from '../UI/GlassmorphicCard';
import SectionTitle from '../UI/SectionTitle';
import logo1 from '../../../dist/assets/devtech - image.png'
import logo2 from '../../../dist/assets/market-insight.png'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "DevTech- An EdTech Platform",
      description: "A full-stack Ed-Tech platform where a student can buy differnt courses, one make be a Instructor and make courses and sell it on this, the  payment can be done by RazorPay.",
      image: logo1,
      technologies: ["React", "Node.js", "MongoDB", "Express", "RazorPay"],
      liveUrl: "https://dev-tech-pink.vercel.app/",
      githubUrl: "https://github.com/DevvratSharma026/DevTech-Hosting",
      featured: true
    },
    {
      id: 2,
      title: "Market Insight",
      description: "A web that helps you to see the current price of any stock around the world, it has a AI beta that predicts the bullish and bearish behaviour of the live stock.",
      image: logo2,
      technologies: ["Next.js", "TypeScript"],
      liveUrl: "https://market-insight-topaz.vercel.app/",
      githubUrl: "https://github.com/DevvratSharma026/market-sight-now",
      featured: true
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProjectData = projects[currentProject];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Explore some of my recent work and personal projects"
        />
        
        <div className="max-w-6xl mx-auto">
          <GlassmorphicCard className="p-6 md:p-8" glowColor="blue">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Project Image */}
              <div className="relative group">
                <div className="aspect-[16/10] rounded-lg overflow-hidden bg-space-800">
                  <img 
                    src={currentProjectData.image} 
                    alt={currentProjectData.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent opacity-60"></div>
                </div>
                
                {/* Navigation Arrows */}
                <div className="absolute top-1/2 left-4 right-4 flex justify-between transform -translate-y-1/2">
                  <button 
                    onClick={prevProject}
                    className="p-3 rounded-full bg-space-800 bg-opacity-75 backdrop-blur-sm text-space-200 
                    hover:text-space-100 hover:bg-opacity-90 transition-all duration-300 hover:scale-110"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    onClick={nextProject}
                    className="p-3 rounded-full bg-space-800 bg-opacity-75 backdrop-blur-sm text-space-200 
                    hover:text-space-100 hover:bg-opacity-90 transition-all duration-300 hover:scale-110"
                    aria-label="Next project"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Project Counter */}
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-space-800 bg-opacity-75 backdrop-blur-sm">
                  <span className="text-space-200 text-sm font-medium">
                    {currentProject + 1} / {projects.length}
                  </span>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="flex flex-col justify-center">
                <div className="mb-4">
                  {currentProjectData.featured && (
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500 bg-opacity-20 
                    text-blue-400 rounded-full border border-blue-500 border-opacity-30 mb-3">
                      Featured Project
                    </span>
                  )}
                  <h3 className="text-3xl font-bold text-space-100 mb-3">
                    <span className="text-gradient-blue">{currentProjectData.title}</span>
                  </h3>
                </div>
                
                <p className="text-space-300 mb-6 leading-relaxed">
                  {currentProjectData.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-space-200 font-medium mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProjectData.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm bg-space-700 text-space-300 rounded-full 
                        border border-space-600 hover:border-space-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={currentProjectData.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 
                    text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 
                    flex items-center justify-center hover:shadow-lg hover:scale-105"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    View Live Demo
                  </a>
                  <a 
                    href={currentProjectData.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 rounded-lg border border-space-500 text-space-200 font-medium 
                    hover:bg-space-700 hover:text-space-100 hover:border-space-400 transition-all duration-300 
                    flex items-center justify-center hover:scale-105"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project Indicators */}
            <div className="mt-8 flex justify-center space-x-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-space-600 hover:bg-space-500'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </GlassmorphicCard>
          
          {/* All Projects Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-space-100 mb-8 text-center">
              <span className="text-gradient-purple">All Projects</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <GlassmorphicCard key={project.id} className="p-4 cursor-pointer" glowColor="purple">
                  <div 
                    className="group"
                    onClick={() => setCurrentProject(index)}
                  >
                    <div className="aspect-[16/10] rounded-lg overflow-hidden mb-4">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-space-100 mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-space-400 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex space-x-2">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 text-xs bg-blue-600 hover:bg-blue-700 text-white 
                        rounded-md transition-colors flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 text-xs border border-space-500 text-space-300 
                        hover:bg-space-700 rounded-md transition-colors flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </GlassmorphicCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;