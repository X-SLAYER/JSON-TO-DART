import React, { useEffect, useState } from "react";

export default function Controls({ onControlChange }) {
  const initialState = {
    genJson: false,
    genCopyWith: false,
    genToString: false,
    genJsonKeys: false,
    useNumForNumber: false,
    useSerializable: false,
    useEquatable: false,
    useDefaultValue: false,
    useRequiredFields: false,
  };

  const loadSavedSettings = () => {
    try {
      const saved = localStorage.getItem("controlsSettings");
      return saved ? JSON.parse(saved) : initialState;
    } catch (error) {
      console.error("Failed to load settings from localStorage", error);
      return initialState;
    }
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setControls({
      ...controls,
      [id]: checked,
    });
  };

  const [controls, setControls] = useState(loadSavedSettings);

  useEffect(() => {
    localStorage.setItem("controlsSettings", JSON.stringify(controls));
    onControlChange(controls);
  }, [controls, onControlChange]);

  return (
    <div className="mb-2">
      <div id="check-group" className="flex flex-wrap -mx-2">
        <div className="flex flex-col w-full px-2 sm:w-1/2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              id="genJson"
              checked={controls.genJson}
              onClick={handleCheckboxChange}
            />
            <span>
              Generate <span className="font-mono">toJson</span> method
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox "
              checked={controls.genCopyWith}
              id="genCopyWith"
              onClick={handleCheckboxChange}
            />
            <span>
              Generate <span className="font-mono">copyWith</span> method
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              checked={controls.genToString}
              id="genToString"
              onClick={handleCheckboxChange}
            />
            <span>
              Generate <span className="font-mono">toString</span> method
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              checked={controls.genJsonKeys}
              id="genJsonKeys"
              onClick={handleCheckboxChange}
            />
            <span>Generate JSON keys</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              checked={controls.useNumForNumber}
              id="useNumForNumber"
              onClick={handleCheckboxChange}
            />
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
              checked={controls.useSerializable}
              id="useSerializable"
              onClick={handleCheckboxChange}
            />
            <span>
              Use <span className="font-mono">JSONSerializable</span>
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              checked={controls.useEquatable}
              id="useEquatable"
              onClick={handleCheckboxChange}
            />
            <span>
              Use <span className="font-mono">Equatable</span>
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              checked={controls.useDefaultValue}
              id="useDefaultValue"
              onClick={handleCheckboxChange}
            />
            <span>Use default value </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              checked={controls.useRequiredFields}
              id="useRequiredFields"
              onClick={handleCheckboxChange}
            />
            <span>Use required fields</span>
          </label>
        </div>
      </div>
    </div>
  );
}
