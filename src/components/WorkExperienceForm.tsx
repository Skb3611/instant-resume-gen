
import React from "react";
import { WorkExperience } from "@/lib/resumeTypes";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { PlusCircle, Trash2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

interface WorkExperienceFormProps {
  workExperiences: WorkExperience[];
  updateWorkExperience: (experiences: WorkExperience[]) => void;
}

const WorkExperienceForm: React.FC<WorkExperienceFormProps> = ({
  workExperiences,
  updateWorkExperience,
}) => {
  const handleAddExperience = () => {
    const newExperience: WorkExperience = {
      id: uuidv4(),
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      current: false,
      responsibilities: "",
      achievements: "",
    };
    updateWorkExperience([...workExperiences, newExperience]);
  };

  const handleRemoveExperience = (id: string) => {
    updateWorkExperience(workExperiences.filter((exp) => exp.id !== id));
  };

  const handleUpdateExperience = (
    id: string,
    field: keyof WorkExperience,
    value: string | boolean
  ) => {
    updateWorkExperience(
      workExperiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  return (
    <Card className="w-full mb-6 overflow-hidden animate-slide-up border-0 neo-morphism">
      <CardContent className="p-6">
        <div className="space-y-6">
          {workExperiences.map((experience, index) => (
            <div
              key={experience.id}
              className="relative space-y-4 pt-4 animate-fade-in"
            >
              {index > 0 && <Separator className="my-6" />}
              <div className="absolute right-0 top-0">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveExperience(experience.id)}
                  className="text-gray-500 hover:text-red-500 transition-all-200"
                >
                  <Trash2 className="h-5 w-5" />
                  <span className="sr-only">Remove Experience</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor={`company-${experience.id}`}
                    className="text-sm font-medium"
                  >
                    Company
                  </Label>
                  <Input
                    id={`company-${experience.id}`}
                    placeholder="Company Name"
                    value={experience.company}
                    onChange={(e) =>
                      handleUpdateExperience(
                        experience.id,
                        "company",
                        e.target.value
                      )
                    }
                    className="transition-all-200 focus:ring-2 focus:ring-offset-1"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor={`role-${experience.id}`}
                    className="text-sm font-medium"
                  >
                    Role/Position
                  </Label>
                  <Input
                    id={`role-${experience.id}`}
                    placeholder="Software Engineer"
                    value={experience.role}
                    onChange={(e) =>
                      handleUpdateExperience(
                        experience.id,
                        "role",
                        e.target.value
                      )
                    }
                    className="transition-all-200 focus:ring-2 focus:ring-offset-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor={`startDate-${experience.id}`}
                    className="text-sm font-medium"
                  >
                    Start Date
                  </Label>
                  <Input
                    id={`startDate-${experience.id}`}
                    placeholder="MM/YYYY"
                    value={experience.startDate}
                    onChange={(e) =>
                      handleUpdateExperience(
                        experience.id,
                        "startDate",
                        e.target.value
                      )
                    }
                    className="transition-all-200 focus:ring-2 focus:ring-offset-1"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor={`endDate-${experience.id}`}
                      className="text-sm font-medium"
                    >
                      End Date
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`current-${experience.id}`}
                        checked={experience.current}
                        onCheckedChange={(checked) =>
                          handleUpdateExperience(
                            experience.id,
                            "current",
                            checked === true
                          )
                        }
                      />
                      <Label
                        htmlFor={`current-${experience.id}`}
                        className="text-sm text-gray-500"
                      >
                        Current
                      </Label>
                    </div>
                  </div>
                  <Input
                    id={`endDate-${experience.id}`}
                    placeholder="MM/YYYY"
                    value={experience.endDate}
                    onChange={(e) =>
                      handleUpdateExperience(
                        experience.id,
                        "endDate",
                        e.target.value
                      )
                    }
                    disabled={experience.current}
                    className="transition-all-200 focus:ring-2 focus:ring-offset-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor={`responsibilities-${experience.id}`}
                  className="text-sm font-medium"
                >
                  Responsibilities
                </Label>
                <Textarea
                  id={`responsibilities-${experience.id}`}
                  placeholder="Describe your responsibilities..."
                  value={experience.responsibilities}
                  onChange={(e) =>
                    handleUpdateExperience(
                      experience.id,
                      "responsibilities",
                      e.target.value
                    )
                  }
                  rows={3}
                  className="resize-none transition-all-200 focus:ring-2 focus:ring-offset-1"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor={`achievements-${experience.id}`}
                  className="text-sm font-medium"
                >
                  Achievements
                </Label>
                <Textarea
                  id={`achievements-${experience.id}`}
                  placeholder="List your key achievements..."
                  value={experience.achievements}
                  onChange={(e) =>
                    handleUpdateExperience(
                      experience.id,
                      "achievements",
                      e.target.value
                    )
                  }
                  rows={3}
                  className="resize-none transition-all-200 focus:ring-2 focus:ring-offset-1"
                />
              </div>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            className="w-full mt-4 flex items-center justify-center space-x-2 transition-all-200 hover:bg-gray-50"
            onClick={handleAddExperience}
          >
            <PlusCircle className="h-4 w-4" />
            <span>Add Work Experience</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkExperienceForm;
