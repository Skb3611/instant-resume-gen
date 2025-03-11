
import React from "react";
import { ResumeData } from "@/lib/resumeTypes";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Folder,
  Award,
} from "lucide-react";

interface ResumePreviewProps {
  resumeData: ResumeData;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData }) => {
  const { personalInfo, workExperiences, education, projects, skills } =
    resumeData;

  return (
    <div
      id="resume-preview-content"
      className="resume-preview bg-white shadow-sm rounded-lg overflow-hidden min-h-full flex flex-col max-w-full relative animate-fade-in"
    >
      <div className="flex flex-col p-8 pb-6 border-b">
        <h1 className="text-3xl font-bold text-gray-900 mb-1 animate-slide-up">
          {personalInfo.name || "Your Name"}
        </h1>

        <div className="flex flex-wrap gap-y-2 gap-x-6 mt-4 text-sm text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center space-x-2 animate-slide-up">
              <Mail className="h-4 w-4 text-gray-400" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center space-x-2 animate-slide-up">
              <Phone className="h-4 w-4 text-gray-400" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.address && (
            <div className="flex items-center space-x-2 animate-slide-up">
              <MapPin className="h-4 w-4 text-gray-400" />
              <span>{personalInfo.address}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center space-x-2 animate-slide-up">
              <Globe className="h-4 w-4 text-gray-400" />
              <span>{personalInfo.website}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-8 flex-1 overflow-y-auto">
        {workExperiences.length > 0 && (
          <section className="mb-8 animate-slide-up">
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="h-5 w-5 text-gray-700" />
              <h2 className="text-xl font-semibold text-gray-800">
                Work Experience
              </h2>
            </div>
            <div className="space-y-6">
              {workExperiences.map((exp) => (
                <div key={exp.id} className="animate-fade-in">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium text-gray-900">{exp.role}</h3>
                    <span className="text-sm text-gray-500">
                      {exp.startDate}
                      {exp.current
                        ? " - Present"
                        : exp.endDate
                        ? ` - ${exp.endDate}`
                        : ""}
                    </span>
                  </div>
                  <div className="text-gray-700 mb-2">{exp.company}</div>
                  {exp.responsibilities && (
                    <div className="mt-2">
                      <div className="text-sm text-gray-900 font-medium mb-1">
                        Responsibilities:
                      </div>
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        {exp.responsibilities}
                      </p>
                    </div>
                  )}
                  {exp.achievements && (
                    <div className="mt-2">
                      <div className="text-sm text-gray-900 font-medium mb-1">
                        Achievements:
                      </div>
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        {exp.achievements}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section className="mb-8 animate-slide-up">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-5 w-5 text-gray-700" />
              <h2 className="text-xl font-semibold text-gray-800">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="animate-fade-in">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium text-gray-900">
                      {edu.institution}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {edu.graduationYear}
                    </span>
                  </div>
                  <div className="text-gray-700 mb-1">{edu.degree}</div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{edu.location}</span>
                    {edu.score && (
                      <span className="text-gray-600">{edu.score}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section className="mb-8 animate-slide-up">
            <div className="flex items-center space-x-2 mb-4">
              <Folder className="h-5 w-5 text-gray-700" />
              <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
            </div>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id} className="animate-fade-in">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium text-gray-900">
                      {project.name}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 whitespace-pre-line">
                    {project.description}
                  </p>
                  {project.technologies && (
                    <div className="mt-2 text-sm text-gray-500">
                      <span className="font-medium">Technologies:</span>{" "}
                      {project.technologies}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {skills.length > 0 && (
          <section className="animate-slide-up">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="h-5 w-5 text-gray-700" />
              <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 animate-fade-in"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </section>
        )}

        {!personalInfo.name &&
          workExperiences.length === 0 &&
          education.length === 0 &&
          projects.length === 0 &&
          skills.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <p className="mb-2 text-lg">Start filling out your resume</p>
              <p className="text-sm">
                Your resume preview will appear here as you type
              </p>
            </div>
          )}
      </div>
    </div>
  );
};

export default ResumePreview;
