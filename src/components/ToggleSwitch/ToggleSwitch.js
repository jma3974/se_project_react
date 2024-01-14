import * as React from "react";
import "../ToggleSwitch/ToggleSwitch.css";

const ToggleSwitch = () => {
  const [checkedFarenheit, setCheckedF] = React.useState(false);
  const [checkedCelcius, setCheckedC] = React.useState(false);

  const handleSwitchF = () => {
    setCheckedF(!checkedFarenheit);
  };

  const handleSwitchC = () => {
    setCheckedC(!checkedCelcius);
  };

  return (
    <div>
      <Checkbox label="F" value={checkedFarenheit} onChange={handleSwitchF} />

      <Checkbox label="C" value={checkedCelcius} onChange={handleSwitchC} />
    </div>
  );
};
const Checkbox = ({ label, value, onChange }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        id={`react-switch-new`}
        className="toggleSwitch__checkbox"
      />

      <label className="toggleSwitch__label" htmlFor={`react-switch-new`}>
      <span className="toggleSwitch__button" />{label}
      
      </label>
    </>
  );
};

export default ToggleSwitch;
