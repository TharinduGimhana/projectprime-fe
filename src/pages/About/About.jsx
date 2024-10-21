import React from "react";
import "../Css/About/About.css";
import { BackgroundMainAbout } from "./BackgroundMainAbout";
import { AboutModelMain } from "./AboutModelMain";
import { MissionWidget } from "./MissionWidget";
import { MissionWidgetVal } from "./MissionWidgetVal";
import { AboutValuesWidget } from "./AboutValuesWidget";

import aboutContent from "../../assets/contents/about";

export const About = () => {
  return (
    <div>
      <BackgroundMainAbout content={aboutContent.contentBackground} />
      <div className="about-over-flow">
        <div className="about-model-main">
          <AboutModelMain data={aboutContent.ContentMain} />
        </div>
        <MissionWidget Content={aboutContent.ContentAbout} />
        <MissionWidgetVal Content={aboutContent.ContentAboutVal} />
        {aboutContent.ContentValues.map((ContentValues, index) => (
          <AboutValuesWidget Content={ContentValues} />
        ))}
      </div>
    </div>
  );
};
