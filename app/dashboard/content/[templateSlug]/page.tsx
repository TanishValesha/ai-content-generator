import DynamicForm from "@/components/DynamicForm";
import React from "react";
import templates from "@/components/Templates";
import OutputDisplay from "@/components/OutputDisplay";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface FormProp {
  params: {
    templateSlug: string;
  };
}

const ContentPage = ({ params }: FormProp) => {
  const selectedTemplate = templates.find(
    (item) => item.slug === params.templateSlug
  );
  return (
    <div>
      <Button className="bg-indigo-600 hover:bg-indigo-700 font-bold my-4">
        <Link
          href="/dashboard"
          className="flex gap-2 justify-center items-center"
        >
          <ArrowLeft /> <span>Back</span>
        </Link>
      </Button>
      <div className="flex justify-center items-center gap-10 p-4">
        <div className="w-[50%] ml-12">
          <DynamicForm selectedTemplate={selectedTemplate} />
        </div>
        <Card>
          <OutputDisplay />
        </Card>
      </div>
    </div>
  );
};

export default ContentPage;