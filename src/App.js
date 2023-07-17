import "./index.css";
import Home from "./components/home"
import Experience from "./components/experience"
import Project from "./components/project"
import Skills from "./components/skill"
import Navbar from './components/navbar';
import Footer from './components/footer';
import Education from "./components/education"

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <br/>
    <Experience/>
    <br/>
    <Project/>
    <br/>
    <Skills/>
    <Education/>
    <Footer/>
    
    </>
  );
}

export default App;
