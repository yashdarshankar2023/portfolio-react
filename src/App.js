import "./index.css";
import Home from "./components/home"
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
    <Project/>
    <Skills/>
    <Education/>
    <Footer/>
    
    </>
  );
}

export default App;
