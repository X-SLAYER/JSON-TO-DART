"use client";

import dynamic from "next/dynamic";
import AppBar from "../components/AppBar";
import Controls from "../components/Controls";

const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

const ProgrammingEditor = () => {
  return (
    <div>
      <AppBar />
      <div className="flex flex-row mx-4">
        <div className="flex flex-col flex-grow w-3/6 p-4 mx-auto mt-3">
          <Controls />
          <div className="flex-grow" style={{ height: "70vh" }}>
            <Editor readOnly={false} language="json5" />
          </div>
          <button
            type="button"
            className="mt-3 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Generate
          </button>
        </div>

        <div className="flex flex-col flex-grow w-4/5 p-4 mx-auto mt-3">
          <div className="flex-grow" style={{ height: "70vh" }}>
            <Editor language="dart" readOnly={false} />
          </div>
          <button
            type="button"
            className="mt-3 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingEditor;
