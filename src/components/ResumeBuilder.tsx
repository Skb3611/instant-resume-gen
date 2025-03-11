
import React, { useState, useEffect } from "react";
import { ResumeData, defaultResumeData } from "@/lib/resumeTypes";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";
import { loadResumeData } from "@/lib/pdfGenerator";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardTitle, CardDescription, CardHeader } from "@/components/ui/card";

const ResumeBuilder: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const isMobile = useIsMobile();

  useEffect(() => {
    const savedData = loadResumeData();
    if (savedData) {
      setResumeData(savedData);
    }
  }, []);

  const updateResumeData = (data: ResumeData) => {
    setResumeData(data);
  };

  if (isMobile) {
    return (
      <div className="min-h-screen bg-[#141821] p-4">
        <CardHeader className="text-center px-4 py-6 space-y-2">
          <CardTitle className="text-3xl font-display font-bold text-gray-100">
            Resume Builder
          </CardTitle>
          <CardDescription className="text-gray-400">
            Create a professional resume in minutes
          </CardDescription>
        </CardHeader>
        
        <Tabs defaultValue="form" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4 bg-[#1A1F2C]">
            <TabsTrigger value="form" className="transition-all-200 data-[state=active]:bg-[#222632] data-[state=active]:text-gray-100">
              Editor
            </TabsTrigger>
            <TabsTrigger value="preview" className="transition-all-200 data-[state=active]:bg-[#222632] data-[state=active]:text-gray-100">
              Preview
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="form" className="p-0 m-0">
            <ResumeForm
              resumeData={resumeData}
              updateResumeData={updateResumeData}
            />
          </TabsContent>
          
          <TabsContent value="preview" className="p-0 m-0 min-h-[85vh]">
            <ResumePreview resumeData={resumeData} />
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#141821] flex flex-col">
      <div className="text-center px-4 py-6 border-b border-gray-800 bg-[#1A1F2C] shadow-sm">
        <h1 className="text-3xl font-display font-bold text-gray-100">
          Resume Builder
        </h1>
        <p className="text-gray-400 mt-1">
          Create a professional resume in minutes
        </p>
      </div>
      
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
        <div className="border-r border-gray-800 bg-[#1A1F2C] overflow-y-auto">
          <ResumeForm
            resumeData={resumeData}
            updateResumeData={updateResumeData}
          />
        </div>
        
        <div className="bg-[#141821] p-6 overflow-y-auto">
          <ResumePreview resumeData={resumeData} />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
