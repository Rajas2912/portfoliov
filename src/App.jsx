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
import Project_page from "./ProjectsPage/Project_page";
import About_Main from "./AboutPage/About_Main";
import FrontPage from "./Temp_components/FrontPage";
import Temp12 from "./FramerMotion/Temp12";
import Temp_3 from "./Temp_components/Temp_3";
import VerticalCardScroll from "./FramerMotion/VerticalCardScroll";
import Contact_Page from "./ContactMe/ContactPage";
import ContactPage from "./ContactMe/ContactPage";

function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter to wrap your Routes */}
      <Routes>
        <Route path="/" element={<Main_Banner></Main_Banner>} />
        <Route path="/framerCard" element={<FrontPage></FrontPage>} />
        {/* <Route path="/tempframer" element={<Temp12></Temp12>} />
        <Route path="/smooth" element={<Temp_3></Temp_3>} /> */}
        {/* <Route path="/vertical" element={<VerticalCardScroll></VerticalCardScroll>} /> */}
        <Route path="/contact" element={<ContactPage></ContactPage>} />
        <Route path="/resume" element={<ResumeMain />} />
        <Route path="/certifications" element={<Certificate></Certificate>} />
        <Route path="/projects" element={<Project_page></Project_page>} />
        <Route path="/about" element={<About_Main></About_Main>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;