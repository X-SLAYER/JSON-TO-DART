import { useState } from "react";

export const useCodeEditors = () => {
  const [jsonCode, setJsonCode] = useState("");
  const [generateDartClass, setDartClass] = useState("");

  const processAndSetCode = (code) => {
    setDartClass(code);
  };

  return {
    jsonCode,
    setJsonCode,
    processAndSetCode,
    generateDartClass,
  };
};
