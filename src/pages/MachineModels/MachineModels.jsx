import React from "react";
import "../Css/MachineModels/MachineModels.css";
import { BackgroundMainMachine } from "./BackgroundMainMachine";
import { ControlModelWidget } from "./ControlModelWidget";
import image from "../../assets/Images/MachineModels/image.jpg";
import imagetwo from "../../assets/Images/MachineModels/image-1.jpg";
import imagethree from "../../assets/Images/MachineModels/image-2.jpg";
import imagefour from "../../assets/Images/MachineModels/image-3.jpg";
import imagefive from "../../assets/Images/MachineModels/image-4.jpg";

export const MachineModels = () => {
  const data = [
    {
      title: "BULK EARTHWORKS MODELS",
      content:
        "Specializing in bulk earthworks models designed to make large-scale excavation and grading projects run smoothly. With years of hands-on experience, we create models that help optimize material movement and keep site preparation efficient. Whether it's leveling a site or tackling complex cut- and-fill work, our models bring the precision needed to get the job done right",
      image: image,
    },
    {
      title: "RESIDENTIAL SUBDIVISION CIVIL MODELS",
      content:
        "Residential civil projects are at the core of our machine control model services. Leveraging years of specialized experience, we build models with exceptional accuracy and attention to detail. Whether it's a residential subdivision or a complex commercial site, our team is equipped to deliver models that meet the highest standards, ensuring precision and efficiency for any project",
      image: imagetwo,
    },
    {
      title: "SITE UTILITY MACHINE MODELS",
      content:
        "Our site utility machine models cover all essential services, including drainage, sewer, and other utilities, to keep your project moving smoothly. With our experience in building accurate models for complex site infrastructure, we make it easier to plan and execute utility installations with precision. Whether you're working on drainage systems, sewer lines, or general services, our models provide the detail and reliability you need for efficient, hassle-free installations",
      image: imagethree,
    },
    {
      title: "RETAINING WALL EXCAVATION MODELS",
      content:
        "Retaining wall excavation models are crafted to deliver accuracy and efficiency, even in challenging terrain. Designed with precise details for cut and fill requirements, these models streamline the excavation process, reducing material waste and optimizing project timelines. From foundation trenches to complex wall configurations, these models provide reliable data essential for constructing durable and stable retaining walls",
      image: imagefour,
    },
    {
      title: "HEAVY HIGHWAY MACHINE CONTROL MODELS",
      content:
        "Heavy highway machine control models are developed to meet the demands of large-scale road construction projects. With precise grading, alignment, and elevation data, these models support efficient and accurate work on highways, interchanges, and major roadways. Built to ensure consistency and reliability, these models are ideal for complex grading, cut-and-fill balancing, and other critical tasks involved in highway construction",
      image: imagefive,
    },
  ];

  return (
    <div>
      <BackgroundMainMachine />
      <div className="machine-model-main">
        {data.map((content, index) => (
          <ControlModelWidget data={content} />
        ))}
      </div>
    </div>
  );
};
