import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center relative">
      <h2 className="text-3xl md:text-4xl font-bold text-space-100 inline-block">
        <span className="text-gradient-blue">{title}</span>
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
      </h2>
      {subtitle && (
        <p className="text-space-300 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-blue-500 opacity-60"></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-purple-500 opacity-60"></div>
    </div>
  );
};

export default SectionTitle;