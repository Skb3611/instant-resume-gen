
import React, { useState, useEffect, useRef } from "react";
import { ResumeData, defaultResumeData } from "@/lib/resumeTypes";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";
import {  loadResumeData, saveResumeData } from "@/lib/pdfGenerator";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardTitle, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Download, Save } from "lucide-react";
import { toast } from "sonner";
import { useReactToPrint } from "react-to-print";

import { jsPDF } from "jspdf";

const ResumeBuilder: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const isMobile = useIsMobile();
  const handleSave = () => {
    saveResumeData(resumeData);
    toast.success("Resume saved successfully");
  };

  const handleDownload = useReactToPrint({
    contentRef: ref,
    documentTitle: "Resume",
  });
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
      <div className="min-h-screen bg-gray-50 p-4">
        <CardHeader className="text-center px-4 py-6 space-y-2">
          <CardTitle className="text-3xl font-display font-bold">
            Resume Builder
          </CardTitle>
          <CardDescription>
            Create a professional resume in minutes
          </CardDescription>
        </CardHeader>

        <Tabs defaultValue="form" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="form" className="transition-all-200">Editor</TabsTrigger>
            <TabsTrigger value="preview" className="transition-all-200">Preview</TabsTrigger>
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="text-center px-4 py-6 border-b border-gray-100 bg-white shadow-sm">
        <h1 className="text-3xl font-display font-bold text-gray-900">
          Resume Builder
        </h1>
        <p className="text-gray-500 mt-1">
          Create a professional resume in minutes
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
        <div className="border-r border-gray-100 bg-white overflow-y-auto">
          <ResumeForm
            resumeData={resumeData}
            updateResumeData={updateResumeData}
          />
          <div className="sticky bottom-0 p-4 bg-white border-t border-gray-100 flex space-x-4 shadow-sm z-10">
            <Button
              variant="outline"
              className="flex-1 space-x-2 transition-all-200"
              onClick={handleSave}
            >
              <Save className="h-4 w-4" />
              <span>Save</span>
            </Button>
            <Button
              className="flex-1 space-x-2 transition-all-200"
              onClick={()=>handleDownload()}
            >
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </Button>
          </div>
        </div>

        <div className="bg-gray-50 p-6 overflow-y-auto">
          <ResumePreview resumeData={resumeData} ref={ref} />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;