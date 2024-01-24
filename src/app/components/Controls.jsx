import React from "react";

export default function Controls({}) {
  return (
    <div className="mb-4">
      <div id="check-group" className="flex flex-wrap -mx-2">
        <div className="flex flex-col w-full px-2 sm:w-1/2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="settings-checkbox" id="gen-json" />
            <span>
              Generate <span className="font-mono">toJson</span> method
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="settings-checkbox " id="gen-cpy" />
            <span>
              Generate <span className="font-mono">copyWith</span> method
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="settings-checkbox" id="gen-ts" />
            <span>
              Generate <span className="font-mono">toString</span> method
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="settings-checkbox" id="gen-key" />
            <span>Generate JSON keys</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="settings-checkbox" id="use-num" />
            <span>
              Always use <span className="font-mono">num</span> type for number
            </span>
          </label>
        </div>

        <div className="flex flex-col w-full px-2 sm:w-1/2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              id="use-serializable"
            />
            <span>
              Use <span className="font-mono">JSONSerializable</span>
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              id="use-equatable"
            />
            <span>
              Use <span className="font-mono">Equatable</span>
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              id="use-default-value"
            />
            <span>Use default value </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              id="use-required-fields"
            />
            <span>Use required fields</span>
          </label>
        </div>
      </div>
    </div>
  );
}
