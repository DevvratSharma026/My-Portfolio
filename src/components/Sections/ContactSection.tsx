import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, Eye, Download } from 'lucide-react';
import GlassmorphicCard from '../UI/GlassmorphicCard';
import SectionTitle from '../UI/SectionTitle';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/devvratsharma026',
      icon: <Github className="h-5 w-5" />, 
      color: 'text-gray-400 hover:text-white',
      bgColor: 'bg-gray-500 bg-opacity-20'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/devvrat-sharma/',
      icon: <Linkedin className="h-5 w-5" />, 
      color: 'text-blue-400 hover:text-blue-300',
      bgColor: 'bg-blue-500 bg-opacity-20'
    },
    {
      name: 'Email',
      url: 'mailto:devsharma.pcm.2003@gmail.com',
      icon: <Mail className="h-5 w-5" />, 
      color: 'text-green-400 hover:text-green-300',
      bgColor: 'bg-green-500 bg-opacity-20'
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Let's Connect" 
          subtitle="Ready to collaborate? Let's build something amazing together"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <GlassmorphicCard className="p-6 md:p-8" glowColor="blue">
            <h3 className="text-2xl font-semibold text-space-100 mb-6">
              <span className="text-gradient-blue">Send me a message</span>
            </h3>
            
            <form
              action="https://formsubmit.co/devsharma.pcm.2003@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-space-300 mb-2 text-sm font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-space-800 border border-space-600 rounded-lg px-4 py-3 text-space-200 \
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all \
                    placeholder-space-500 glow-input"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-space-300 mb-2 text-sm font-medium">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-space-800 border border-space-600 rounded-lg px-4 py-3 text-space-200 \
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all \
                    placeholder-space-500 glow-input"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-space-300 mb-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-space-800 border border-space-600 rounded-lg px-4 py-3 text-space-200 \
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all \
                  placeholder-space-500 glow-input"
                  placeholder="Project collaboration, job opportunity, etc."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-space-300 mb-2 text-sm font-medium">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-space-800 border border-space-600 rounded-lg px-4 py-3 text-space-200 \
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all \
                  placeholder-space-500 glow-input resize-none"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                ></textarea>
              </div>

              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_replyto" value={formData.email} />
              <input type="hidden" name="_subject" value={formData.subject} />
              <input type="hidden" name="_template" value="table" />

              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300
                bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-lg`}
              >
                <span className="flex items-center">
                  <Send className="h-4 w-4 mr-2" />
                  Send Email
                </span>
              </button>

              {/* Resume Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300
                  border border-space-500 text-space-200 hover:bg-space-700 hover:text-space-100 hover:border-space-400"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Resume
                </a>
                <a
                  href="/resume.pdf"
                  download="Devvrat_Sharma_Resume.pdf"
                  className="mt-6 w-full py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300
                  bg-gradient-to-r from-teal-600 to-green-600 text-white hover:from-teal-700 hover:to-green-700 hover:shadow-lg"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </div>
            </form>
          </GlassmorphicCard>

          {/* Social Links */}
          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            <GlassmorphicCard className="p-6 md:p-8" glowColor="purple">
              <h3 className="text-2xl font-semibold text-space-100 mb-6">
                <span className="text-gradient-purple">Get in touch</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-500 bg-opacity-20 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-space-200 font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:devsharma.pcm.2003@gmail.com" 
                      className="text-space-400 hover:text-purple-400 transition-colors break-all"
                    >
                      devsharma.pcm.2003@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 bg-opacity-20 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Linkedin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-space-200 font-medium mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/devvrat-sharma/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-space-400 hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/devvratsharma
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-500 bg-opacity-20 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Github className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="text-space-200 font-medium mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/devvratsharma026" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-space-400 hover:text-gray-400 transition-colors"
                    >
                      github.com/devvratsharma
                    </a>
                  </div>
                </div>
              </div>
            </GlassmorphicCard>
            
            {/* Social Media Quick Links */}
            <GlassmorphicCard className="p-6" glowColor="teal">
              <h3 className="text-xl font-semibold text-space-100 mb-4">
                <span className="text-gradient-green">Connect on Social</span>
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg ${social.bgColor} ${social.color} transition-all duration-300 
                    hover:scale-110 hover:shadow-lg group`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-space-400 text-sm mt-4">
                Follow me for updates on my latest projects and tech insights!
              </p>
            </GlassmorphicCard>
            
            {/* Quick Response Promise */}
            <GlassmorphicCard className="p-6" glowColor="blue">
              <h3 className="text-lg font-semibold text-space-100 mb-3">
                <span className="text-gradient-blue">Quick Response</span>
              </h3>
              <p className="text-space-300 text-sm mb-3">
                I typically respond to messages within 24 hours. For urgent matters, feel free to reach out on LinkedIn.
              </p>
              <div className="flex items-center text-green-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available for new opportunities
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;