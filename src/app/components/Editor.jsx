"use client";
import { useEffect, useRef, useState } from "react";

import AceEditor from "react-ace";

// Import themes
import "ace-builds/src-noconflict/theme-dracula";

// Import languages
import "ace-builds/src-noconflict/mode-json5";
import "ace-builds/src-noconflict/mode-dart";

// Additonal editor settings tools
import "ace-builds/src-noconflict/ext-language_tools";

// Additional the beautify extension
import { js_beautify } from "js-beautify";

const Editor = ({ readOnly = false, language = "java", onChange, value }) => {
  const editorRef = useRef(null);

  const handlePaste = (event) => {
    if (language !== "json5") return;
    try {
      event.preventDefault();
      const text = (event.clipboardData || window.clipboardData).getData(
        "text"
      );
      const beautifiedText = js_beautify(text, {
        indent_size: 4,
        space_in_empty_paren: true,
        e4x: true,
      });
      const editor = editorRef.current.editor;
      editor.setValue(beautifiedText, -1);
    } catch (error) {}
  };

  useEffect(() => {
    const textInput = editorRef.current.editor.textInput.getElement();
    textInput.addEventListener("paste", handlePaste);
    return () => {
      textInput.removeEventListener("paste", handlePaste);
    };
  }, []);

  return (
    <div className="flex flex-col items-center flex-grow h-full">
      <AceEditor
        ref={editorRef}
        mode={language}
        theme={"dracula"}
        fontSize={15}
        value={value}
        defaultValue={value}
        onChange={onChange}
        name={`editor-${language}`}
        showGutter={true}
        highlightActiveLine={true}
        readOnly={readOnly}
        style={{
          width: "100%",
          height: "100%",
        }}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 4,
        }}
      />
    </div>
  );
};

export default Editor;
