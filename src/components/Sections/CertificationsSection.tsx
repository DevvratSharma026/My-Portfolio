import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Download } from 'lucide-react';
import GlassmorphicCard from '../UI/GlassmorphicCard';
import SectionTitle from '../UI/SectionTitle';
import data_science_certificate from '../../../dist/assets/data_science.png'
import Gen_AI_certificate from '../../../dist/assets/Gen_Ai.png'

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

const CertificationsSection: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Data Science",
      issuer: "IBM",
      date: "August 2023",
      image: data_science_certificate,
      link: "https://drive.google.com/file/d/17MnjZtK2YdppkEziXi2iAgokm8IWiKt5/view?usp=sharing"
    },
    {
      id: 2,
      title: "Generative AI",
      issuer: "AWS",
      date: "April 2025",
      image: Gen_AI_certificate,
      link: "https://drive.google.com/file/d/1DMKR1bf94W_Gs1J7yudZnhKj0_YP5_5m/view?usp=sharing"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Certifications" 
          subtitle="Professional certifications and courses I've completed"
        />
        
        <div className="relative max-w-4xl mx-auto">
          <GlassmorphicCard className="p-4 md:p-6" glowColor="purple">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src={certificates[currentIndex].image} 
                    alt={certificates[currentIndex].title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="absolute top-2 right-2 flex space-x-2">
                  <a 
                    href={certificates[currentIndex].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-space-800 bg-opacity-75 text-space-200 hover:text-space-100 transition-colors"
                    aria-label="View certificate"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a 
                    href={certificates[currentIndex].link} 
                    download
                    className="p-2 rounded-full bg-space-800 bg-opacity-75 text-space-200 hover:text-space-100 transition-colors"
                    aria-label="Download certificate"
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </div>
                
                <div className="absolute left-4 right-4 bottom-4 z-10">
                  <div className="flex justify-between">
                    <button 
                      onClick={prevCertificate}
                      className="p-2 rounded-full bg-space-800 bg-opacity-75 text-space-200 hover:text-space-100 transition-colors"
                      aria-label="Previous certificate"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={nextCertificate}
                      className="p-2 rounded-full bg-space-800 bg-opacity-75 text-space-200 hover:text-space-100 transition-colors"
                      aria-label="Next certificate"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="mb-1 text-sm text-purple-400 uppercase tracking-wider font-medium">
                  {certificates[currentIndex].issuer}
                </div>
                <h3 className="text-2xl font-semibold text-space-100 mb-3">
                  {certificates[currentIndex].title}
                </h3>
                <p className="text-space-300 mb-6">
                  Completed in {certificates[currentIndex].date}
                </p>
                
                <div className="space-y-3">
                  <p className="text-space-400 text-sm">
                    This certification validates my skills and knowledge in {certificates[currentIndex].title.toLowerCase()}, 
                    covering key concepts, best practices, and practical applications.
                  </p>
                  
                  <div className="flex space-x-3 mt-6">
                    <a 
                      href={certificates[currentIndex].link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium 
                      transition-colors text-sm flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center space-x-2">
              {certificates.map((cert, index) => (
                <button
                  key={cert.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-purple-500' : 'bg-space-600'
                  }`}
                  aria-label={`Go to certificate ${index + 1}`}
                />
              ))}
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;