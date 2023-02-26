import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Kurser from "./pages/Kurser";
import Udtagelser from "./pages/Udtagelser";
import BilledGalleri from "./pages/BilledGalleri";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/udtagelser" element={<Udtagelser />} />
        <Route path="/kurser" element={<Kurser />} />
        <Route path="/billedgalleri" element={<BilledGalleri />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
