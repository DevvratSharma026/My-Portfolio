import React from 'react';
import { Github, Linkedin, Mail, FileText, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      href: "https://github.com/devvratsharma",
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      href: "https://linkedin.com/in/devvratsharma",
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      href: "mailto:devsharma.pcm.2003@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      color: "hover:text-green-400"
    },
    {
      href: "/resume.pdf",
      icon: <FileText className="h-5 w-5" />,
      label: "Resume",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <footer className="bg-space-900 py-12 relative overflow-hidden border-t border-space-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-space-100 text-xl font-bold flex items-center justify-center md:justify-start">
              <span className="text-glow-blue mr-2">&lt;</span>
              <span className="text-gradient-blue">Devvrat Sharma</span>
              <span className="text-glow-blue ml-2">/&gt;</span>
            </h3>
            <p className="text-space-300 mt-2">Web Developer & AI Enthusiast</p>
            <p className="text-space-400 text-sm mt-1">Building intelligent web solutions</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`text-space-300 ${link.color} transition-all duration-300 p-2 rounded-full 
                  hover:bg-space-800 hover:scale-110 group`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-space-400 text-sm flex items-center">
                Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> using React & TailwindCSS
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-space-700 text-center">
          <p className="text-space-400 text-sm">
            &copy; {currentYear} Devvrat Sharma. All rights reserved.
          </p>
          <p className="text-space-500 text-xs mt-2">
            Open to collaborations • Available for freelance projects
          </p>
        </div>
      </div>
      
      {/* Space-themed accents */}
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute top-0 left-1/2 w-16 h-16 bg-green-500 rounded-full filter blur-2xl opacity-5"></div>
    </footer>
  );
};

export default Footer;