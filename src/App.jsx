import LandingPage from "./components/LandingPage";
import Navbar from "./components/NavBar";
import ProjectsPage from "./components/ProjectsPage";
import SideBar from "./components/SideBar";
import SkillsPage from "./components/SkillsPage";


function App() {


  return (
    <div className="scroll-smooth">
      <Navbar />
      <SideBar />
      <LandingPage />
      <ProjectsPage />
      <SkillsPage />
    </div>
  );
}

export default App;
