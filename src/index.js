import {React} from 'react';
import App from './App.js';

import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

import Experience from "./components/experience.js";
import Project from "./components/project.js";
import Skills from "./components/skill.js";
import Education from "./components/education.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";




import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
          <Route path='/' index element={<App />} />
          <Route path='*' index element={<App />} />
          <Route path="Experience" element={<Experience />} />
          <Route path="Project" element={<Project />} />
          <Route path="Skill" element={<Skills />} />
          <Route path="Education" element={<Education />} />
          
          
          
    
        
      </Routes>
      <Footer/>
    </BrowserRouter >

);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.js';

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <App />
// );