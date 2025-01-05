"use client";

import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-background">
      <div className="flex items-center ml-10 md:ml-0">
        <Sparkles className="h-8 w-8 text-indigo-600" />
        <span className="ml-2 text-xl font-bold text-gray-900">TemplateAI</span>
      </div>
    </header>
  );
}
