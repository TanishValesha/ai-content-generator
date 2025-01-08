import React from "react";
import {
  ChevronRight,
  History,
  Home,
  ReceiptText,
  Settings,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";
import AnimatedGradientText from "./ui/animated-gradient-text";
import useCounterStore from "@/credits/store";
import { Card } from "./ui/card";

const SideBarContent = ({
  pathname,
  setIsOpen,
}: {
  pathname: string;
  setIsOpen?: (open: boolean) => void;
}) => {
  const sidebarItems = [
    { title: "Home", href: "/dashboard", icon: Home },
    { title: "History", href: "/dashboard/analytics", icon: History },
    { title: "Billing", href: "/dashboard/customers", icon: ReceiptText },
    { title: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const { getCredits } = useCounterStore();
  const credits = getCredits();
  const progressPercentage = (credits / 10000) * 100;

  return (
    <div className="flex h-full flex-col border-r bg-background">
      <div className="p-6">
        <div className="flex items-center">
          <Sparkles className="h-8 w-8 text-indigo-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">
            TemplateAI
          </span>
        </div>
      </div>
      <div className="flex-1">
        <nav className="flex flex-col gap-2 p-4">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen?.(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-md transition-colors",
                  isActive
                    ? "bg-indigo-600 text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Icon className="h-6 w-6" />
                {item.title}
              </Link>
            );
          })}
        </nav>{" "}
      </div>
      <div className="p-3 mb-10">
        <Card className="p-4 py-6 mb-4 flex flex-col justify-center items-start gap-4 w-full bg-indigo-500 text-white">
          <p className="font-bold">Credits</p>
          <div className="w-full flex flex-col justify-center items-start gap-2">
            <Progress value={progressPercentage} className="w-[100%]" />
            <h1 className="font-bold">{credits}/10,000 credits used</h1>
          </div>
        </Card>
        <div className="z-10 flex items-center justify-center">
          <AnimatedGradientText>
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Upgrade Your Plan
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </div>
      </div>
    </div>
  );
};

export default SideBarContent;
