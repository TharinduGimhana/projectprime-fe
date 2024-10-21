import trimble from "../../assets/Logo/trimble.png";
import topcon from "../../assets/Logo/topcon.png";
import leica from "../../assets/Logo/leica.png";
import Komatsu from "../../assets/Logo/Komatsu.png";
import carlson from "../../assets/Logo/carlson.png";

const contentBackground = {
  lineOne: "CONTROL YOUR",
  lineTwo: `
     <p>MACHINES <span>WITH</span></p>
    `,
  lineThree: "3D GPS MODELS",
};

const bottomWidgetContent = {
  title: `
     <h1>
              THE KEY TO RELIABLE MACHINE CONTROL <br />
              MODELS
            </h1>
    `,
  paraOne:
    "There's a significant difference between a surface crafted by designers in a typical consulting engineering company and one specifically built for machine control by a skilled 3D modeller. Designer-generated surfaces are usually intended for paper plans, which can lead to models that lack the necessary details for use directly in the field. These designs often contain errors or complexities that aren't tailored for modern construction machinery.",
  paraTwo:
    "Project Prime's experienced 3D modellers create machine control models that are accurate, detailed, and ready for on-site implementation. Built with field performance in mind, these models streamline the construction process, reducing downtime and enhancing productivity where it's needed most",
};

const boxComponentContent = [
  {
    title: "Machine Control Model",
    para: "Machine Control Model Solutions delivers your 3D GPS model on time and hassle free",
    button: "Get Quote",
  },
  {
    title: "Earth Works Take-Off",
    para: "Machine Control Model Solutions delivers your 3D GPS model on time and hassle free",
    button: "Get Quote",
  },
  {
    title: "Hire a GPS or Total Station",
    para: "Machine Control Model Solutions delivers your 3D GPS model on time and hassle free",
    button: "Contact Us",
  },
];

const midWidgetConent = {
  title: `<h1>PIONEERING INNOVATIVE SOLUTIONS <br />
           FOR EVERY PROJECT</h1>`,
};

const SmallBoxComponentConent = [
  {
    title: "Site Ready",
    para: " This service focuses on preparing your site for construction with precise, data-driven solutions.",
  },
  {
    title: "Construct Ready",
    para: " We support your project with advanced modelling and verification services.",
  },
  {
    title: "Claim Ready",
    para: " Our Claim Ready service ensures that your project completion claims are accurate.",
  },
];

const greenWidgetContent = {
  title: "Prime Ready",
  para: " This service focuses on preparing your site for construction with precise, data-driven solutions.",
  button: "Learn more",
};

const brandWidgetContent = {
  title: "MACHINE CONTROL MODELS FOR ALL BRANDS",
  trimbleImg: trimble,
  topconImg: topcon,
  leicaImg: leica,
  KomatsuImg: Komatsu,
  carlsonImg: carlson,
};

const homeContent = {
  brandWidgetContent,
  greenWidgetContent,
  SmallBoxComponentConent,
  midWidgetConent,
  boxComponentContent,
  bottomWidgetContent,
  contentBackground,
};

export default homeContent;
