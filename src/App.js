import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { EarthWorkQuantities } from "./pages/EarthWorkQuantities";
import { MachineModels } from "./pages/MachineModels";
import { Services } from "./pages/Services";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}></Route>
          <Route path="/earth-work-quantities" element={<EarthWorkQuantities/>}></Route>
          <Route path="/machine-models" element={<MachineModels/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
