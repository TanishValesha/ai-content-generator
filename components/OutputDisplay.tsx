"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";

// Dynamically import the Editor component
const Editor = dynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  { ssr: false }
);

const OutputDisplay = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef: any = useRef(null);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-3">
        <h1 className="text-2xl text-indigo-600 py-4 px-2 font-bold">
          Your Result
        </h1>
        <Button className="bg-indigo-600 hover:bg-indigo-700 font-bold">
          <Copy />
          Copy
        </Button>
      </div>
      <Editor
        initialValue="Your result will be displayed here..."
        previewStyle="vertical"
        height="600px"
        initialEditType="sadasd"
        useCommandShortcut={true}
        ref={editorRef}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
      />
    </div>
  );
};

export default OutputDisplay;
