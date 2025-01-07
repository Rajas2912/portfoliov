import Front_banner from "./FrontPage/Front_banner";
import Mainnavbar from "./Components/Mainnavbar";
import Main_Banner from "./FrontPage/Main_Banner";
import App12 from "./Components/App12";
import RotatingText from "./Components/RotatingText";
import { RevealLinks } from "./Components/RevealLinks";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Use BrowserRouter instead of Router
import ResumePage from "./ResumePage/ResumePage";
import ResumeMain from "./ResumePage/Resume_Main";
import Certificate from "./Certifications/Certificate";

function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter to wrap your Routes */}
      <Routes>
        <Route path="/" element={<Main_Banner />} />
        <Route path="/resume" element={<ResumeMain />} />
        <Route path="/certifications" element={<Certificate></Certificate>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;