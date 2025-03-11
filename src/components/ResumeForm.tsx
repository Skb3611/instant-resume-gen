
import React from "react";
import { ResumeData } from "@/lib/resumeTypes";
import PersonalInfoForm from "./PersonalInfoForm";
import WorkExperienceForm from "./WorkExperienceForm";
import EducationForm from "./EducationForm";
import ProjectsForm from "./ProjectsForm";
import SkillsForm from "./SkillsForm";
import { Button } from "@/components/ui/button";
import { Download, Save } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { generatePDF, saveResumeData } from "@/lib/pdfGenerator";
import { useToast } from "@/hooks/use-toast";

interface ResumeFormProps {
  resumeData: ResumeData;
  updateResumeData: (data: ResumeData) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({
  resumeData,
  updateResumeData,
}) => {
  const { toast } = useToast();

  const updatePersonalInfo = (field: string, value: string) => {
    updateResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value,
      },
    });
  };

  const updateWorkExperiences = (experiences: typeof resumeData.workExperiences) => {
    updateResumeData({
      ...resumeData,
      workExperiences: experiences,
    });
  };

  const updateEducation = (education: typeof resumeData.education) => {
    updateResumeData({
      ...resumeData,
      education,
    });
  };

  const updateProjects = (projects: typeof resumeData.projects) => {
    updateResumeData({
      ...resumeData,
      projects,
    });
  };

  const updateSkills = (skills: typeof resumeData.skills) => {
    updateResumeData({
      ...resumeData,
      skills,
    });
  };

  const handleSave = () => {
    saveResumeData(resumeData);
    toast({
      title: "Resume Saved",
      description: "Your resume data has been saved successfully.",
    });
  };

  const handleDownload = () => {
    generatePDF(resumeData, "resume-preview-content");
  };

  return (
    <div className="resume-form h-full flex flex-col overflow-hidden">
      <div className="p-4 sm:p-6 space-y-4 flex-1 overflow-y-auto hide-scrollbar">
        <Card className="border-0 shadow-sm overflow-hidden animate-fade-in">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="w-full grid grid-cols-5 rounded-none">
              <TabsTrigger value="personal" className="rounded-t-lg transition-all-200">
                Personal
              </TabsTrigger>
              <TabsTrigger value="experience" className="rounded-t-lg transition-all-200">
                Work
              </TabsTrigger>
              <TabsTrigger value="education" className="rounded-t-lg transition-all-200">
                Education
              </TabsTrigger>
              <TabsTrigger value="projects" className="rounded-t-lg transition-all-200">
                Projects
              </TabsTrigger>
              <TabsTrigger value="skills" className="rounded-t-lg transition-all-200">
                Skills
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="p-0 m-0">
              <PersonalInfoForm
                personalInfo={resumeData.personalInfo}
                updatePersonalInfo={updatePersonalInfo}
              />
            </TabsContent>

            <TabsContent value="experience" className="p-0 m-0">
              <WorkExperienceForm
                workExperiences={resumeData.workExperiences}
                updateWorkExperience={updateWorkExperiences}
              />
            </TabsContent>

            <TabsContent value="education" className="p-0 m-0">
              <EducationForm
                education={resumeData.education}
                updateEducation={updateEducation}
              />
            </TabsContent>

            <TabsContent value="projects" className="p-0 m-0">
              <ProjectsForm
                projects={resumeData.projects}
                updateProjects={updateProjects}
              />
            </TabsContent>

            <TabsContent value="skills" className="p-0 m-0">
              <SkillsForm
                skills={resumeData.skills}
                updateSkills={updateSkills}
              />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
      
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
          onClick={handleDownload}
        >
          <Download className="h-4 w-4" />
          <span>Download PDF</span>
        </Button>
      </div>
    </div>
  );
};

export default ResumeForm;
