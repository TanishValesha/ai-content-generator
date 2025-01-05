import React from "react";
import { History, Home, ReceiptText, Settings, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
    </div>
  );
};

export default SideBarContent;
