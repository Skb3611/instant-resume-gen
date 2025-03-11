
import React from "react";
import { Education } from "@/lib/resumeTypes";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusCircle, Trash2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

interface EducationFormProps {
  education: Education[];
  updateEducation: (education: Education[]) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({
  education,
  updateEducation,
}) => {
  const handleAddEducation = () => {
    const newEducation: Education = {
      id: uuidv4(),
      institution: "",
      degree: "",
      location: "",
      graduationYear: "",
      score: "",
    };
    updateEducation([...education, newEducation]);
  };

  const handleRemoveEducation = (id: string) => {
    updateEducation(education.filter((edu) => edu.id !== id));
  };

  const handleUpdateEducation = (
    id: string,
    field: keyof Education,
    value: string
  ) => {
    updateEducation(
      education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  return (
    <Card className="w-full mb-6 overflow-hidden animate-slide-up border-0 neo-morphism">
      <CardContent className="p-6">
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="relative space-y-4 pt-4 animate-fade-in"
            >
              {index > 0 && <Separator className="my-6" />}
              <div className="absolute right-0 top-0">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveEducation(edu.id)}
                  className="text-gray-500 hover:text-red-500 transition-all-200"
                >
                  <Trash2 className="h-5 w-5" />
                  <span className="sr-only">Remove Education</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor={`institution-${edu.id}`}
                    className="text-sm font-medium"
                  >
                    Institution
                  </Label>
                  <Input
                    id={`institution-${edu.id}`}
                    placeholder="University/College Name"
                    value={edu.institution}
                    onChange={(e) =>
                      handleUpdateEducation(
                        edu.id,
                        "institution",
                        e.target.value
                      )
                    }
                    className="transition-all-200 focus:ring-2 focus:ring-offset-1"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor={`degree-${edu.id}`}
                    className="text-sm font-medium"
                  >
                    Degree
                  </Label>
                  <Input
                    id={`degree-${edu.id}`}
                    placeholder="Bachelor of Science in Computer Science"
                    value={edu.degree}
                    onChange={(e) =>
                      handleUpdateEducation(edu.id, "degree", e.target.value)
                    }
                    className="transition-all-200 focus:ring-2 focus:ring-offset-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label
                    htmlFor={`location-${edu.id}`}
                    className="text-sm font-medium"
                  >
                    Location
                  </Label>
                  <Input
                    id={`location-${edu.id}`}
                    placeholder="City, Country"
                    value={edu.location}
                    onChange={(e) =>
                      handleUpdateEducation(edu.id, "location", e.target.value)
                    }
                    className="transition-all-200 focus:ring-2 focus:ring-offset-1"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor={`graduationYear-${edu.id}`}
                    className="text-sm font-medium"
                  >
                    Graduation Year
                  </Label>
                  <Input
                    id={`graduationYear-${edu.id}`}
                    placeholder="YYYY"
                    value={edu.graduationYear}
                    onChange={(e) =>
                      handleUpdateEducation(
                        edu.id,
                        "graduationYear",
                        e.target.value
                      )
                    }
                    className="transition-all-200 focus:ring-2 focus:ring-offset-1"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor={`score-${edu.id}`}
                    className="text-sm font-medium"
                  >
                    Score/GPA
                  </Label>
                  <Input
                    id={`score-${edu.id}`}
                    placeholder="3.8/4.0"
                    value={edu.score}
                    onChange={(e) =>
                      handleUpdateEducation(edu.id, "score", e.target.value)
                    }
                    className="transition-all-200 focus:ring-2 focus:ring-offset-1"
                  />
                </div>
              </div>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            className="w-full mt-4 flex items-center justify-center space-x-2 transition-all-200 hover:bg-gray-50"
            onClick={handleAddEducation}
          >
            <PlusCircle className="h-4 w-4" />
            <span>Add Education</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationForm;
