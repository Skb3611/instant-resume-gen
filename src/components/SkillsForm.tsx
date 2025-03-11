
import React, { useState } from "react";
import { Skill } from "@/lib/resumeTypes";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

interface SkillsFormProps {
  skills: Skill[];
  updateSkills: (skills: Skill[]) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ skills, updateSkills }) => {
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() === "") return;
    
    const skillToAdd: Skill = {
      id: uuidv4(),
      name: newSkill.trim(),
    };
    
    updateSkills([...skills, skillToAdd]);
    setNewSkill("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleRemoveSkill = (id: string) => {
    updateSkills(skills.filter((skill) => skill.id !== id));
  };

  return (
    <Card className="w-full mb-6 overflow-hidden animate-slide-up border-0 neo-morphism">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="newSkill" className="text-sm font-medium">
              Add Skills
            </Label>
            <div className="flex items-center space-x-2">
              <Input
                id="newSkill"
                placeholder="JavaScript, React, UX Design, etc."
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={handleKeyDown}
                className="transition-all-200 focus:ring-2 focus:ring-offset-1"
              />
              <Button
                type="button"
                onClick={handleAddSkill}
                size="icon"
                className="transition-all-200"
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add Skill</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full transition-all-200 animate-fade-in group hover:bg-gray-200"
              >
                <span className="text-sm">{skill.name}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill.id)}
                  className="text-gray-400 rounded-full hover:text-red-500 transition-all-200 opacity-0 group-hover:opacity-100"
                >
                  <X className="h-3.5 w-3.5" />
                  <span className="sr-only">Remove {skill.name}</span>
                </button>
              </div>
            ))}
            {skills.length === 0 && (
              <p className="text-sm text-gray-500 italic">
                Add your skills to highlight your expertise
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsForm;
