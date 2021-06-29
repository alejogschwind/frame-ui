import React from "react";

import {
  SwitchWrapper,
  Input,
  Slider
} from "./styles";

const Switch = ({ isToggled, onToggle }) => {

  return (
    <SwitchWrapper>
      <Input type="checkbox" checked={isToggled} />
      <Slider className="slider" onClick={onToggle} />
    </SwitchWrapper>
  );
};

export default Switch;