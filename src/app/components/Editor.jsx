"use client";

import AceEditor from "react-ace";

// Import themes
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";

// Import languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";

// Additonal editor settings tools
import "ace-builds/src-noconflict/ext-language_tools";

const Editor = ({ readOnly = false, language = "java" }) => {
  const onChange = (newValue) => {};

  return (
    <div className="flex flex-col items-center flex-grow h-full">
      <AceEditor
        mode={language}
        theme={"dracula"}
        fontSize={16}
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
