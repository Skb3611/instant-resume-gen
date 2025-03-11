
import React from "react";
import { Project } from "@/lib/resumeTypes";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusCircle, Trash2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

interface ProjectsFormProps {
  projects: Project[];
  updateProjects: (projects: Project[]) => void;
}

const ProjectsForm: React.FC<ProjectsFormProps> = ({
  projects,
  updateProjects,
}) => {
  const handleAddProject = () => {
    const newProject: Project = {
      id: uuidv4(),
      name: "",
      description: "",
      technologies: "",
      link: "",
    };
    updateProjects([...projects, newProject]);
  };

  const handleRemoveProject = (id: string) => {
    updateProjects(projects.filter((project) => project.id !== id));
  };

  const handleUpdateProject = (
    id: string,
    field: keyof Project,
    value: string
  ) => {
    updateProjects(
      projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    );
  };

  return (
    <Card className="w-full mb-6 overflow-hidden animate-slide-up border-0 neo-morphism">
      <CardContent className="p-6">
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative space-y-4 pt-4 animate-fade-in"
            >
              {index > 0 && <Separator className="my-6" />}
              <div className="absolute right-0 top-0">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveProject(project.id)}
                  className="text-gray-500 hover:text-red-500 transition-all-200"
                >
                  <Trash2 className="h-5 w-5" />
                  <span className="sr-only">Remove Project</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor={`projectName-${project.id}`}
                    className="text-sm font-medium"
                  >
                    Project Name
                  </Label>
                  <Input
                    id={`projectName-${project.id}`}
                    placeholder="Project Name"
                    value={project.name}
                    onChange={(e) =>
                      handleUpdateProject(project.id, "name", e.target.value)
                    }
                    className="transition-all-200 focus:ring-2 focus:ring-offset-1"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor={`projectDescription-${project.id}`}
                    className="text-sm font-medium"
                  >
                    Description
                  </Label>
                  <Textarea
                    id={`projectDescription-${project.id}`}
                    placeholder="Describe your project..."
                    value={project.description}
                    onChange={(e) =>
                      handleUpdateProject(
                        project.id,
                        "description",
                        e.target.value
                      )
                    }
                    rows={3}
                    className="resize-none transition-all-200 focus:ring-2 focus:ring-offset-1"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor={`technologies-${project.id}`}
                      className="text-sm font-medium"
                    >
                      Technologies Used
                    </Label>
                    <Input
                      id={`technologies-${project.id}`}
                      placeholder="React, Node.js, MongoDB"
                      value={project.technologies || ""}
                      onChange={(e) =>
                        handleUpdateProject(
                          project.id,
                          "technologies",
                          e.target.value
                        )
                      }
                      className="transition-all-200 focus:ring-2 focus:ring-offset-1"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor={`projectLink-${project.id}`}
                      className="text-sm font-medium"
                    >
                      Project Link (Optional)
                    </Label>
                    <Input
                      id={`projectLink-${project.id}`}
                      placeholder="https://github.com/username/project"
                      value={project.link || ""}
                      onChange={(e) =>
                        handleUpdateProject(project.id, "link", e.target.value)
                      }
                      className="transition-all-200 focus:ring-2 focus:ring-offset-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            className="w-full mt-4 flex items-center justify-center space-x-2 transition-all-200 hover:bg-gray-50"
            onClick={handleAddProject}
          >
            <PlusCircle className="h-4 w-4" />
            <span>Add Project</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsForm;
