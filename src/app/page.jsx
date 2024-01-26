"use client";

import dynamic from "next/dynamic";
import AppBar from "./components/AppBar";
import Controls from "./components/Controls";
import { useState } from "react";
import { useCodeEditors } from "./hooks/CodeHook";
import ClassNameTextfield from "./components/ClassNameTextfield";
import { runQuickType } from "./utils";

const Editor = dynamic(() => import("./components/Editor"), { ssr: false });

const ProgrammingEditor = () => {
  const [controlsData, setControlsData] = useState({});
  const [dartClassName, setDartClassName] = useState("");

  const { setJsonCode, jsonCode, processAndSetCode, generateDartClass } =
    useCodeEditors();

  const handleControlChange = (newControls) => {
    setControlsData(newControls);
  };

  const generateCode = () => {
    if (!dartClassName) {
      alert("Please enter a class name");
      return;
    }
    runQuickType(dartClassName, jsonCode, controlsData)
      .then((output) => {
        processAndSetCode(output);
      })
      .catch((err) => {
        alert(err);
      });
    processAndSetCode(jsonCode);
  };

  return (
    <div>
      <AppBar />
      <div className="flex flex-row mx-4">
        <div className="flex flex-col flex-grow w-3/6 p-4 mx-auto mt-3">
          <ClassNameTextfield onChange={setDartClassName} />
          <Controls onControlChange={handleControlChange} />
          <div className="flex-grow" style={{ height: "55vh" }}>
            <Editor readOnly={false} language="json5" onChange={setJsonCode} />
          </div>
          <button
            onClick={generateCode}
            type="button"
            className="mt-3 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Generate
          </button>
        </div>

        <div className="flex flex-col flex-grow w-4/5 p-4 mx-auto mt-3">
          <h2 className="mb-3 text-4xl font-bold leading-none tracking-tight text-center text-gray-900">
            Output
          </h2>
          <div className="flex-grow">
            <Editor language="dart" readOnly={true} value={generateDartClass} />
          </div>
          <button
            onClick={() => {
              const cb = navigator.clipboard;
              cb.writeText(generateDartClass);
            }}
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
