import frameone from "../../assets/Images/Services/Frame117.jpg";
import frametwo from "../../assets/Images/Services/Frame118.jpg";
import framethree from "../../assets/Images/Services/Frame119.jpg";
import frameprime from "../../assets/Images/Services/Frameprime.png";

const contentBackground = {
  lineOne: "SERVICES",
  button: "CHECK PRICING",
};

const serviceContent = [
  {
    title: "SITE READY",
    topContent:
      "This service focuses on preparing your site for construction with precise, data-driven solutions. We ensure your site is ready to move forward with confidence, backed by accurate measurements and verified data.",
    button: "LEARN MORE",
    leftTitle: "Pre-Construction",
    leftContent: `
      <p><b><u>Initial Site Survey:</u></b> Conduct a comprehensive initial survey to establish accurate baselines before construction begins.</p>
      <p><b><u>Existing Surface Checks & Verification:</u></b> Verify the existing surface conditions to ensure consistency and accuracy in planning.</p>
    `,
    middleTitle: "Tender Assistance",
    middleContent: `<p><b><u>Volumes and Quantity Checks:</u></b> Ensure that your tender submissions are backed by accurate and detailed volume and quantity calculations, minimizing risk and maximizing competitiveness.</p>`,
    image: frameone,
  },
  {
    title: "CONSTRUCT READY",
    topContent:
      "Our Construct Ready service ensures that your designs are not only accurate but also optimized for seamless integration into the construction process. We support your project with advanced modelling and verification services that keep things on track from start to finish.",
    button: "LEARN MORE",
    leftTitle: "Design Verification & Models",
    leftContent: `
      <p><b><u>Digital Design Verification:</u></b> Double-check and verify digital designs to prevent errors during construction.</p>
      <p><b><u>Clash Detection for Services:</u></b> Identify and resolve any potential clashes in service placements before they become on-site issues.</p>
    `,
    middleTitle: "Site Services",
    middleContent: `<p><b><u>GPS Base Station & Rover Hire:</u></b>  Offer equipment hire services including GPS base
      stations and rovers for precise location tracking.</p>
      <p><b><u>Machine Guidance Support:</u></b> Provide ongoing support for machine guidance systems, ensuring they function optimally throughout the project.</p>`,
    image: frametwo,
  },
  {
    title: "CLAIM READY",
    topContent:
      "Our Claim Ready service ensures that your end-of-month and project completion claims are accurate, timely, and fully supported by the necessary data. We help you stay on top of your reporting requirements with ease.",
    button: "LEARN MORE",
    leftTitle: "End of Month",
    leftContent: `
      <p><b><u>Progressive Site Surveys:</u></b> Conduct ongoing site surveys to document progress and ensure all data is current.</p>
      <p><b>Progress Quantities & Volumes:</u></b>  Accurately calculate and document quantities and volumes for inclusion in monthly claims.</p>
    `,
    image: framethree,
  },
  {
    title: "PRIME READY",
    topContent:
      "Prime Ready is your solution for ensuring that all survey data aligns with design data, offering streamlined reporting and comprehensive as-constructed documentation.",
    button: "LEARN MORE",
    leftTitle: "Conformance",
    leftContent: `
      <p><b><u>Verification of Survey Data to IFC Design Data:</u></b> Verify that all survey data matches the final IFC (Issued for Construction) design data, ensuring compliance and accuracy.</p>
      <p><b><u>Streamlined Reporting:</u></b> Offer clear and concise reporting to make project reviews and approvals straightforward.</p>
    `,
    middleTitle: "As-Constructed/As-Built",
    middleContent: `<p><b><u>Final Site Survey:</u></b>  Perform a final site survey to capture the as-constructed state of the project.</p>
      <p><b><u>Drafting Services:</u></b> Provide detailed drafting services to create accurate as-constructed drawings.</p>
      <p><b><u>Finalized Quantities & Volumes:</u></b> Finalize all quantities and volumes for submission in the as-constructed documentation, ensuring all data is complete and accurate.</p>`,
    image: frameprime,
    isPrime: true,
  },
];

const serviceContents = {
  serviceContent,
  contentBackground,
};

export default serviceContents;
