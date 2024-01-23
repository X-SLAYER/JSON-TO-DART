"use client";

import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

const ProgrammingEditor = () => {
  return (
    <div className="flex flex-row w-4/5 gap-10 p-4 mx-auto mt-3">
      <section className="flex-grow" style={{ height: "80vh" }}>
        <Editor readOnly={false} language="javascript" />
      </section>
      <section className="flex-grow" style={{ height: "80vh" }}>
        <Editor language="java" readOnly={true} />
      </section>
    </div>
  );
};

export default ProgrammingEditor;
