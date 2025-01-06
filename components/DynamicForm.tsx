"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { chatSession } from "@/gemini/gemini";
import { Loader } from "lucide-react";

interface DynamicFormProps {
  selectedTemplate?: {
    name: string;
    desc: string;
    category: string;
    icon: string;
    aiPrompt: string;
    slug: string;
    form: {
      label: string;
      field: string;
      name: string;
      required?: boolean;
    }[];
  };
  onGeneration: (aiOutput: string) => void;
}

const DynamicForm = ({ selectedTemplate, onGeneration }: DynamicFormProps) => {
  const [userData, setUserData] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const generateGeminiResponse = async () => {
    setIsLoading(true);
    const finalResponse = await chatSession.sendMessage(
      selectedTemplate?.aiPrompt + userData
    );
    console.log(finalResponse.response.text());
    onGeneration(finalResponse.response.text());
    setIsLoading(false);
  };

  return (
    <div>
      <Card className="flex flex-col justify-center items-start max-w-xl px-2 py-4 gap-4">
        <div className="px-4">
          <Image
            src={selectedTemplate?.icon || "/default-icon.png"}
            alt={selectedTemplate?.name || "Logo"}
            width={100}
            height={100}
          />
        </div>
        <div>
          <CardHeader>
            <CardTitle className="text-3xl text-indigo-600">
              {selectedTemplate?.name}
            </CardTitle>
            <CardDescription className="text-lg">
              {selectedTemplate?.desc}
            </CardDescription>
          </CardHeader>
        </div>
        <CardContent>
          <form>
            <div className="flex flex-col justify-center items-start gap-10">
              {selectedTemplate?.form.map((item) =>
                item.field === "input" ? (
                  <div
                    key={item.name}
                    className="flex flex-col justify-center items-start gap-2 w-[500px]"
                  >
                    <Label className="text-xl font-bold">{item.label}</Label>
                    <Input
                      className="w-full"
                      placeholder="Enter Here"
                      onChange={(e) => setUserData(e.target.value + "\n")}
                    ></Input>
                  </div>
                ) : (
                  <div
                    key={item.name}
                    className="flex flex-col justify-center items-start gap-2"
                  >
                    <Label className="text-xl font-bold">{item.label}</Label>
                    <Textarea
                      className="w-[500px] h-28"
                      placeholder="Type your message here."
                      onChange={(e) => setUserData(e.target.value + "\n")}
                    />
                  </div>
                )
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 font-bold"
            onClick={generateGeminiResponse}
            disabled={isLoading}
          >
            {isLoading && <Loader className="animate-spin" />}
            Generate Content
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DynamicForm;
