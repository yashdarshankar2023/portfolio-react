import "./index.css";
import Navbar from './components/navbar';
import Home from "./components/home"
import Experience from "./components/experience"
import Project from "./components/project"
import Skills from "./components/skill"
import Education from "./components/education"
import Footer from './components/footer';


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Experience/>
    <Project/>
    <Skills/>
    <Education/>
    <Footer/>
    
    </>
  );
}

export default App;
