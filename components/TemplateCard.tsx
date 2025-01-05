import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type TemplateCardProps = {
  template: {
    name: string;
    desc: string;
    category: string;
    icon: string;
    aiPrompt: string;
    slug: string;
    form: (
      | { label: string; field: string; name: string; required: boolean }
      | { label: string; field: string; name: string; required?: undefined }
    )[];
  };
};

const TemplateCard = (template: TemplateCardProps) => {
  return (
    <div>
      <Card className="flex flex-col justify-center items-start max-w-xl px-2 py-4">
        <div className="px-4">
          <Image
            src={template.template.icon}
            alt={template.template.name}
            width={50}
            height={50}
          />
        </div>
        <div>
          <CardHeader>
            <CardTitle>{template.template.name}</CardTitle>
            <CardDescription>{template.template.desc}</CardDescription>
          </CardHeader>
        </div>
        {/* <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
      </Card>
    </div>
  );
};

export default TemplateCard;
