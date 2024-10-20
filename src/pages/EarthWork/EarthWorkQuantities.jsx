import React from "react";
import '../Css/EarthWork/EarthWorkQuantities.css'
import { BackgroundMainEarth } from "./BackgroundMainEarth";
import { HeaderWidget } from "./HeaderWidget";
import { TopWidgetEarth } from "./TopWidgetEarth";
import image from "../../assets/Images/EarthworksQuantites/image.jpg";
import imageone from "../../assets/Images/EarthworksQuantites/image-1.jpg";

export const EarthWorkQuantities = () => {
  const earthWorksData = [
    "BULK EARTHWORKS ANALYSIS FOR ROAD AND SITE PREPARATION",
    "CLEAR, GRUB, AND TOPSOIL STRIPPING TO PREP SITES FOR CONSTRUCTION",
    "SITE IMPROVEMENT VOLUMES TO MEASURE ENHANCED AREAS",
    "COMPARATIVE AREA QUANTITIES FOR PRECISE MATERIAL PLANNING",
    "PROPOSED HAUL ROADS FOR EFFICIENT MATERIAL TRANSPORT PLANNING",
  ];

  const earthContent = {
    title: "BULK EARTHWORKS MODELS",
    content:
      "Specializing in bulk earthworks models designed to make large-scale excavation and grading projects run smoothly. With years of hands-on experience, we create models that help optimize material movement and keep site preparation efficient. Whether it's leveling a site or tackling complex cut- and-fill work, our models bring the precision needed to get the job done right",
    image: imageone,
  };

  const header = [
    "HERE ARE SOME OF THE EARTHWORKS ",
    "QUANTITIES COMMONLY PROVIDED:",
  ];

  return (
    <div>
      <BackgroundMainEarth />
      <div className="earth-work-main-widget">
        <HeaderWidget header={header} />
        <TopWidgetEarth earthWorksData={earthWorksData} image={image} />
        <TopWidgetEarth earthContent={earthContent} image={image} />
      </div>
    </div>
  );
};
