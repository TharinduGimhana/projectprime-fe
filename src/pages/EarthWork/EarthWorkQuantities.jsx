import React from "react";
import '../Css/EarthWork/EarthWorkQuantities.css'
import { BackgroundMainEarth } from "./BackgroundMainEarth";
import { HeaderWidget } from "./HeaderWidget";
import { TopWidgetEarth } from "./TopWidgetEarth";

import earthWorkContent from '../../assets/contents/earthWorks'

export const EarthWorkQuantities = () => {

  return (
    <div>
      <BackgroundMainEarth content={earthWorkContent.contentBackground}/>
      <div className="earth-work-main-widget">
        <HeaderWidget header={earthWorkContent.header} />
        <TopWidgetEarth earthWorksData={earthWorkContent.earthWorksData} image={earthWorkContent.imageTop.image} />
        <TopWidgetEarth earthContent={earthWorkContent.earthContent} image={earthWorkContent.imageTop.image} />
      </div>
    </div>
  );
};
