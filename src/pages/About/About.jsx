import React from "react";
import { BackgroundMainAbout } from "./BackgroundMainAbout";
import { AboutModelMain } from "./AboutModelMain";
import { MissionWidget } from "./MissionWidget";
import { MissionWidgetVal } from "./MissionWidgetVal";
import { AboutValuesWidget } from "./AboutValuesWidget";
import imageSix from "../../assets/Images/About/image-6.jpg";
import imageAbout from "../../assets/Images/About/image.jpg";
import imageOne from "../../assets/Images/About/image-1.jpg";
import imageTwo from "../../assets/Images/About/image-2.jpg";
import imageThree from "../../assets/Images/About/image-3.jpg";
import imageFour from "../../assets/Images/About/image-4.jpg";
import imageFive from "../../assets/Images/About/image-5.jpg";

export const About = () => {
  const ContentMain = {
    title:
      "WE WORK WITH CONTRACTORS AND CONSTRUCTION COMPANIES ACROSS AUSTRALIA, ENSURING THAT THEIR PROJECTS ARE BUILT ON SOLID DATA, ACCURACY, AND COMPLIANCE WITH INDUSTRY STANDARDS.",
    content:
      "Our services focus on helping our clients streamline processes, reduce costly errors, and maintain adherence to local and national regulations. Whether it's tendering assistance or end-of-project documentation, we provide solutions that help businesses stay on track and on budget.",
    image: imageSix,
  };

  const ContentAbout = {
    title: "OUR MISSION",
    topContent:
      "Our mission is to empower civil construction companies with accurate, data-driven solutions that drive precision and efficiency. We aim to be the trusted partner for projects across Australia, supporting our clients in delivering high-quality outcomes on time and within budget.",
    image: imageAbout,
  };

  const ContentAboutVal = {
    title: "OUR VALUES",
  };

  const ContentValues = [
    {
      title: "ACCURACY",
      content:
        "We believe in delivering precise data and insights that form the backbone of successful construction projects. Our commitment to accuracy helps reduce errors and ensures that every decision is based on solid information.",
      image: imageOne,
      isImageRight: true,
    },
    {
      title: "INNOVATION",
      content:
        "Leveraging the latest technology in Machine Control systems like Trimble, Topcon, Leica, and Unicontrol, we constantly push the boundaries of what's possible in construction surveying and modeling.",
      image: imageTwo,
      isImageRight: false,
    },
    {
      title: "RELIABILITY",
      content:
        "With over 15 years of experience in large-scale projects, our clients can count on us to deliver on time and meet the highest industry standards, including A-Spec, D-Spec, and Water Corporation WCX standards.",
      image: imageThree,
      isImageRight: true,
    },
    {
      title: "CLIENT CENTRED",
      content:
        "We prioritize our clients' needs by offering tailored solutions that align with their unique project requirements. From the initial tender to the final as-built documentation, our focus is always on helping clients succeed.",
      image: imageFour,
      isImageRight: false,
    },
    {
      title: "COMPLIANCE",
      content:
        "We ensure all of our services meet the regulatory requirements set by organizations like Main Roads WA, guaranteeing that your projects are fully compliant with local standards.",
      image: imageFive,
      isImageRight: true,
    },
  ];

  return (
    <div>
      <BackgroundMainAbout />
      <div className="about-model-main">
        <AboutModelMain data={ContentMain} />
      </div>
      <MissionWidget Content={ContentAbout} />
      <MissionWidgetVal Content={ContentAboutVal} />
      {ContentValues.map((ContentValues, index) => (
        <AboutValuesWidget Content={ContentValues} />
      ))}
    </div>
  );
};
