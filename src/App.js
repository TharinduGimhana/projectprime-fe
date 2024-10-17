import "./App.css";
import Header from "./components/Header/Header";
import NavbarPanel from "./components/Navbar/NavbarPanel";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home/Home";
import { EarthWorkQuantities } from "./pages/EarthWorkQuantities";
import { MachineModels } from "./pages/MachineModels";
import { Services } from "./pages/Services";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavbarPanel />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/earth-work-quantities"
            element={<EarthWorkQuantities />}
          ></Route>
          <Route path="/machine-models" element={<MachineModels />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
