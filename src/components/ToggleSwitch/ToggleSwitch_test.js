import React, {useState} from "react";
import "../ToggleSwitch/ToggleSwitch.css";

const ToggleSwitch = () => {
  const [currentTemperatureUnit, handleToggleSwitchChange] = useState("C")

  const handleSwitch = (e) => {
    if (currentTemperatureUnit === "C") handleToggleSwitchChange("F");
    if (currentTemperatureUnit === "F") handleToggleSwitchChange("C");
  };

  return (
    <label className="switch">
      <input type="checkbox" className="switchBox" onChange={handleSwitch} />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p className={`switch-temp-F ${currentTemperatureUnit === 'F' && "switch__active"}`}>F</p>
      <p className={`switch-temp-C ${currentTemperatureUnit === 'C' && "switch__active"}`}>C</p>
    </label>
  );
};

export default ToggleSwitch;
