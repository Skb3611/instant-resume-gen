
import React from 'react';
import ResumeBuilder from '@/components/ResumeBuilder';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#141821]">
      <title>Professional Resume Builder</title>
      <meta name="description" content="Create a professional resume with our easy-to-use builder" />
      <ResumeBuilder />
    </div>
  );
};

export default Index;
