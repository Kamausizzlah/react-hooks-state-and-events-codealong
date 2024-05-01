import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false) //initial state is false because the button is 'OFF' when first rendered
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white";
  return <button style={{background: color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>; // conditional rendering
}

export default Toggle;
