import { Sparkles } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center ml-10 sm:ml-0">
      <Sparkles className="h-8 w-8 text-indigo-600" />
      <span className="ml-2 text-xl font-bold text-gray-900">TemplateAI</span>
    </div>
  );
};

export default Logo;
