import LandingPage from "./components/LandingPage";
import Navbar from "./components/NavBar";
import ProjectsPage from "./components/ProjectsPage";
import SideBar from "./components/SideBar";
import SkillsPage from "./components/SkillsPage";



function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <div className="scroll-smooth">
      <Navbar />
      <SideBar />
      <LandingPage />
      <ProjectsPage />
      {/* <SkillsPage /> */}
    </div>
  );
}

export default App;
