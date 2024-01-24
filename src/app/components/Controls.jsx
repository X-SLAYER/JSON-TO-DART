import React, { useEffect, useState } from "react";

export default function Controls({ onControlChange }) {
  const [controls, setControls] = useState({
    genJson: false,
    genCopyWith: false,
    genToString: false,
    genJsonKeys: false,
    useNumForNumber: false,
    useSerializable: false,
    useEquatable: false,
    useDefaultValue: false,
    useRequiredFields: false,
  });

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    console.log(id, checked);
    setControls((prevControls) => {
      const newControls = { ...prevControls, [id]: checked };
      onControlChange(newControls);
      return newControls;
    });
  };

  useEffect(() => {
    onControlChange(controls);
  }, []);

  return (
    <div className="mb-4">
      <div id="check-group" className="flex flex-wrap -mx-2">
        <div className="flex flex-col w-full px-2 sm:w-1/2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              id="gen-json"
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
              id="gen-cpy"
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
              id="gen-ts"
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
              id="gen-key"
              onClick={handleCheckboxChange}
            />
            <span>Generate JSON keys</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              id="use-num"
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
              id="use-serializable"
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
              id="use-equatable"
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
              id="use-default-value"
              onClick={handleCheckboxChange}
            />
            <span>Use default value </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              id="use-required-fields"
              onClick={handleCheckboxChange}
            />
            <span>Use required fields</span>
          </label>
        </div>
      </div>
    </div>
  );
}
