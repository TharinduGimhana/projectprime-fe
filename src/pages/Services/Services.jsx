import React from "react";
import "../Css/Services/Services.css";
import { BackgroundMainService } from "./BackgroundMainService";
import { ServiceWidget } from "./ServiceWidget";

import serviceContents from '../../assets/contents/services'

export const Services = () => {
  
  return (
    <div>
      <BackgroundMainService content={serviceContents.contentBackground} />
      <div className="service-model-main">
        {serviceContents.serviceContent.map((content, index) => (
          <ServiceWidget key={index} serviceContent={content} />
        ))}
      </div>
    </div>
  );
};
