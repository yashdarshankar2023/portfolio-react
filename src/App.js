import "./index.css";
import Home from "./routes/home"
import Project from "./routes/project"
import Skills from "./routes/skill"
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
