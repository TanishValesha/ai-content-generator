"use client";

import * as React from "react";
import { templates } from "@/components/Templates";
import TemplateCard from "@/components/TemplateCard";
import { Search } from "@/components/Search";

const Dashboard = () => {
  const [searchValue, setSearchValue] = React.useState("");

  let searchTemplates = templates;

  if (searchValue !== "") {
    searchTemplates = templates.filter((template) =>
      template.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
  return (
    <div className="flex flex-col gap-4 p-2">
      <Search onSearch={setSearchValue} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchTemplates.map((template) => (
          <TemplateCard key={template.slug} template={template} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
