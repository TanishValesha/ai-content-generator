"use client";

import React from "react";
import { Sparkles, Menu } from "lucide-react";
import Link from "next/link";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { user } = useUser();
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
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </Link>
                {user ? (
                  <div className="flex items-center space-x-2">
                    <UserButton />
                    <div className="hidden sm:block text-xs">
                      <p className="text-gray-400">Welcome Back</p>
                      <p className="font-bold">{user.fullName}</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-white font-bold px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                    <SignInButton mode="modal" />
                  </div>
                )}

                {/* <Link
                  href={"/dashboard"}
                  className="text-white font-bold px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500"
                >
                  Get Started
                </Link> */}
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
