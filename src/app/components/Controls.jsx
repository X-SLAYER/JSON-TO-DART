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
    requiredProperties: false,
    useFreezed: false,
    useHive: false,
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
              id="generateToJson"
              checked={controls.generateToJson}
              onClick={handleCheckboxChange}
            />
            <span>
              Generate{" "}
              <span className="font-mono font-bold text-blue-600">
                toJson/FromJson
              </span>{" "}
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox "
              checked={controls.generateCopyWith}
              id="generateCopyWith"
              onClick={handleCheckboxChange}
            />
            <span>
              Generate{" "}
              <span className="font-mono font-bold text-blue-600">
                copyWith
              </span>{" "}
              method
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              checked={controls.generateToString}
              id="generateToString"
              onClick={handleCheckboxChange}
            />
            <span>
              Generate{" "}
              <span className="font-mono font-bold text-blue-600">
                toString
              </span>{" "}
              method
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              checked={controls.finalProperties}
              id="finalProperties"
              onClick={handleCheckboxChange}
            />
            <span>Make all properties final</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              checked={controls.useNum}
              id="useNum"
              onClick={handleCheckboxChange}
            />
            <span>
              Use{" "}
              <span className="font-mono font-bold text-blue-600">num</span>{" "}
              type for number
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
              Use{" "}
              <span className="font-mono font-bold text-blue-600">
                JSONSerializable
              </span>
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
              Use{" "}
              <span className="font-mono font-bold text-blue-600">
                Equatable
              </span>
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              checked={controls.useFreezed}
              id="useFreezed"
              onClick={handleCheckboxChange}
            />
            <span>
              Use{" "}
              <span className="font-mono font-bold text-blue-600">Freezed</span>
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              checked={controls.useHive}
              id="useHive"
              onClick={handleCheckboxChange}
            />
            <span>
              Use{" "}
              <span className="font-mono font-bold text-blue-600">HIVE</span>
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="settings-checkbox"
              checked={controls.requiredProperties}
              id="requiredProperties"
              onClick={handleCheckboxChange}
            />
            <span>Use required fields</span>
          </label>
        </div>
      </div>
    </div>
  );
}
