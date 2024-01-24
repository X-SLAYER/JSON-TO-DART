"use client";

import AceEditor from "react-ace";

// Import themes
import "ace-builds/src-noconflict/theme-dracula";

// Import languages
import "ace-builds/src-noconflict/mode-json5";
import "ace-builds/src-noconflict/mode-dart";

// Additonal editor settings tools
import "ace-builds/src-noconflict/ext-language_tools";

const Editor = ({ readOnly = false, language = "java" }) => {
  const onChange = (newValue) => {};

  return (
    <div className="flex flex-col items-center flex-grow h-full">
      <AceEditor
        mode={language}
        theme={"dracula"}
        fontSize={15}
        onChange={onChange}
        name={`editor-${language}`}
        readOnly={readOnly}
        style={{
          width: "100%",
          height: "100%",
        }}
         editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default Editor;
