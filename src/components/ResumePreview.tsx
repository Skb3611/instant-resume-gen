
import React, { forwardRef } from "react";
import { ResumeData } from "@/lib/resumeTypes";

interface ResumePreviewProps {
  resumeData: ResumeData;
}

const ResumePreview = forwardRef(({ resumeData }: ResumePreviewProps, ref: React.Ref<HTMLDivElement>) => {
  const { personalInfo, workExperiences, education, projects, skills } = resumeData;

  return (
    <div
      ref={ref}
      id="resume-preview-content"
      className="resume-preview bg-white shadow-sm rounded-lg overflow-hidden min-h-full flex flex-col max-w-full relative animate-fade-in"
    >
      {/* Header with name and contact details */}
      <div className="flex flex-col p-6 pb-2 border-b text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {personalInfo.name || "Your Name"}
        </h1>
        
        <div className="text-sm text-blue-600 mt-1 mb-2">
          {personalInfo.address && (
            <span>{personalInfo.address}</span>
          )}
          {personalInfo.email && personalInfo.address && (
            <span> • </span>
          )}
          {personalInfo.email && (
            <span>{personalInfo.email}</span>
          )}
          {personalInfo.phone && (personalInfo.email || personalInfo.address) && (
            <span> • </span>
          )}
          {personalInfo.phone && (
            <span>{personalInfo.phone}</span>
          )}
          {personalInfo.website && (personalInfo.phone || personalInfo.email || personalInfo.address) && (
            <span> • </span>
          )}
          {personalInfo.website && (
            <span>{personalInfo.website}</span>
          )}
        </div>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        {/* Work Experience Section */}
        {workExperiences.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {workExperiences.map((exp) => (
                <div key={exp.id} className="animate-fade-in">
                  <div className="flex justify-between mb-1">
                    <div>
                      <h3 className="font-bold text-gray-900">{exp.company}</h3>
                      <div className="text-gray-800 italic">{exp.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-900">{exp.current ? "Present" : exp.endDate}</div>
                      <div className="text-gray-800">
                        {exp.startDate && exp.startDate}
                        {exp.startDate && (exp.current || exp.endDate) ? "-" : ""}
                        {exp.current ? "Present" : exp.endDate}
                      </div>
                    </div>
                  </div>
                  
                  {exp.responsibilities && (
                    <div className="mt-2">
                      <h4 className="font-medium mb-1">Responsibilities</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {exp.responsibilities.split('\n').map((item, idx) => (
                          <li key={idx}>{item.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.achievements && (
                    <div className="mt-2">
                      <h4 className="font-medium mb-1">Achievements</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {exp.achievements.split('\n').map((item, idx) => (
                          <li key={idx}>{item.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="animate-fade-in">
                  <div className="flex justify-between mb-1">
                    <div>
                      <h3 className="font-bold text-gray-900">{edu.institution}</h3>
                      <div className="text-gray-800 italic">{edu.degree}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-900">{edu.location}</div>
                      <div className="text-gray-800">{edu.graduationYear}</div>
                    </div>
                  </div>
                  {edu.score && (
                    <div className="text-sm text-gray-700 mt-1">
                      {edu.score}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="animate-fade-in">
                  <h3 className="font-bold text-gray-900">{project.name}</h3>
                  <p className="text-sm text-gray-700 whitespace-pre-line mt-1">
                    {project.description}
                  </p>
                  {project.technologies && (
                    <div className="mt-1 text-sm text-gray-700">
                      <span className="font-medium">Tech: </span>
                      {project.technologies}
                    </div>
                  )}
                  {project.link && (
                    <div className="mt-1 text-sm text-blue-600">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {project.link}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase">
              Skills
            </h2>
            <div className="grid grid-cols-1 gap-y-3">
              {/* Group skills by category */}
              <div className="grid grid-cols-6 gap-2">
                <div className="col-span-1 font-medium text-gray-800">Languages:</div>
                <div className="col-span-5 text-gray-700">
                  {skills.filter(s => s.name).map((skill, idx, arr) => (
                    <React.Fragment key={skill.id}>
                      <span>{skill.name}</span>
                      {idx < arr.length - 1 && <span>, </span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Empty state message */}
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
});

export default ResumePreview;