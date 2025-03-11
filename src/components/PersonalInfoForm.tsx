
import React from "react";
import { PersonalInfo } from "@/lib/resumeTypes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  updatePersonalInfo: (field: keyof PersonalInfo, value: string) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  personalInfo,
  updatePersonalInfo,
}) => {
  return (
    <Card className="w-full mb-6 overflow-hidden animate-slide-up border-0 neo-morphism">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={personalInfo.name}
              onChange={(e) => updatePersonalInfo("name", e.target.value)}
              className="transition-all-200 focus:ring-2 focus:ring-offset-1"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm font-medium">
              Address
            </Label>
            <Input
              id="address"
              placeholder="123 Main St, City, State, ZIP"
              value={personalInfo.address}
              onChange={(e) => updatePersonalInfo("address", e.target.value)}
              className="transition-all-200 focus:ring-2 focus:ring-offset-1"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={personalInfo.email}
                onChange={(e) => updatePersonalInfo("email", e.target.value)}
                className="transition-all-200 focus:ring-2 focus:ring-offset-1"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone
              </Label>
              <Input
                id="phone"
                placeholder="(123) 456-7890"
                value={personalInfo.phone}
                onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                className="transition-all-200 focus:ring-2 focus:ring-offset-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website" className="text-sm font-medium">
              Website/Portfolio
            </Label>
            <Input
              id="website"
              placeholder="https://yourwebsite.com"
              value={personalInfo.website}
              onChange={(e) => updatePersonalInfo("website", e.target.value)}
              className="transition-all-200 focus:ring-2 focus:ring-offset-1"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoForm;
