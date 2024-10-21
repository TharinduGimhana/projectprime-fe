import React from "react";
import "../Css/MachineModels/MachineModels.css";
import { BackgroundMainMachine } from "./BackgroundMainMachine";
import { ControlModelWidget } from "./ControlModelWidget";

import machineModelContent from '../../assets/contents/machinemodels'

export const MachineModels = () => {
 
  return (
    <div>
      <BackgroundMainMachine content={machineModelContent.contentBackground}/>
      <div className="machine-model-main">
        {machineModelContent.machineModelContents.map((content, index) => (
          <ControlModelWidget data={content} />
        ))}
      </div>
    </div>
  );
};
