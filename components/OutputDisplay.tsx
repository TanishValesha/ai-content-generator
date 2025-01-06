"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";

// Dynamically import the Editor component
const Editor = dynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  { ssr: false }
);

interface OutputProps {
  aiOutput: string;
}

const OutputDisplay = ({ aiOutput }: OutputProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef = useRef<any>(null);
  console.log(aiOutput);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      editorInstance.setMarkdown(aiOutput || "");
    }
    console.log("useEffect");
  }, [aiOutput]);

  const handleCopy = () => {
    const editorInstance = editorRef.current?.getInstance();
    const markdown = editorInstance?.getMarkdown();
    if (markdown) {
      navigator.clipboard.writeText(markdown).then(() => {
        alert("Content copied to clipboard!");
      });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-3">
        <h1 className="text-2xl text-indigo-600 py-4 px-2 font-bold">
          Your Result
        </h1>
        <Button
          className="bg-indigo-600 hover:bg-indigo-700 font-bold flex items-center gap-2"
          onClick={handleCopy}
        >
          <Copy />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will be displayed here..."
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
      />
    </div>
  );
};

export default OutputDisplay;
