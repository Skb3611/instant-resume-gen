
// TypeScript types for resume data

export interface PersonalInfo {
  name: string;
  address: string;
  email: string;
  phone: string;
  website: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string;
  achievements: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  graduationYear: string;
  score: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies?: string;
  link?: string;
}

export interface Skill {
  id: string;
  name: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  workExperiences: WorkExperience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
}

export const defaultResumeData: ResumeData = {
  personalInfo: {
    name: "",
    address: "",
    email: "",
    phone: "",
    website: ""
  },
  workExperiences: [],
  education: [],
  projects: [],
  skills: []
};
