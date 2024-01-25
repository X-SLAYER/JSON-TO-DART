import React from "react";

export default function ClassNameTextfield({ onChange }) {
  return (
    <div>
      <h2 className="mb-2 text-3xl font-bold leading-none tracking-tight text-gray-900 ">
        Class Name
      </h2>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
        placeholder="ClassName"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}
