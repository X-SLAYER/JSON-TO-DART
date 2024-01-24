"use client";

import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

const ProgrammingEditor = () => {
  return (
    <div className="flex flex-row w-4/5 gap-10 p-4 mx-auto mt-3">
      <div className="flex-grow" style={{ height: "80vh" }}>
        <Editor readOnly={false} language="json5" />
      </div>
      <div className="flex-grow" style={{ height: "80vh" }}>
        <Editor language="dart" readOnly={false} />
      </div>
    </div>
  );
};

export default ProgrammingEditor;
