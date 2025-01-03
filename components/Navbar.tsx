import React from "react";
import { Sparkles, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header>
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                TemplateAI
              </span>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </a>
                <a href="#about" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
                <button className="text-white font-bold px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600">
                  Get Started
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
