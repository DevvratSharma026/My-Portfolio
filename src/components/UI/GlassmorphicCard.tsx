import React, { ReactNode } from 'react';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'teal' | 'pink' | 'none';
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({ 
  children, 
  className = '',
  glowColor = 'none'
}) => {
  const getGlowClass = () => {
    switch (glowColor) {
      case 'blue':
        return 'before:bg-blue-500 before:opacity-20';
      case 'purple':
        return 'before:bg-purple-500 before:opacity-20';
      case 'teal':
        return 'before:bg-teal-500 before:opacity-20';
      case 'pink':
        return 'before:bg-pink-500 before:opacity-20';
      default:
        return 'before:hidden';
    }
  };

  return (
    <div 
      className={`
        relative backdrop-blur-lg bg-space-800 bg-opacity-50
        border border-space-600 rounded-lg shadow-lg
        overflow-hidden
        light:bg-white light:bg-opacity-80 light:border-gray-200
        ${className}
        before:absolute before:inset-0 before:rounded-lg before:filter before:blur-xl 
        before:transform before:scale-105 before:-z-10 ${getGlowClass()}
      `}
    >
      {children}
    </div>
  );
};

export default GlassmorphicCard;