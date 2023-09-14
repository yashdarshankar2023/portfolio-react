import "./index.css";
import {React} from 'react';
import Home from "./components/home"
import Experience from "./components/experience"
import Project from "./components/project"
import Skills from "./components/skill"
import Education from "./components/education"



function App() {
  return (
    <>
    <Home/>
    <Experience/>
    <Project/>
    <Skills/>
    <Education/>
    </>
  );
}

export default App;
