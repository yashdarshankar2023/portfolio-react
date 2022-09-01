import "./navbarstyles.css"
import {Link} from "react-router-dom"
import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"

const Navbar = () => {
  const[click,setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color,setColor] = useState(false); 
  const HomeScroll = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  const ProjectScroll = () =>{
    window.scrollTo({
      top: 700, 
      behavior: 'smooth'
    });
  };
  const SkillScroll = () =>{
    window.scrollTo({
      top: 1880, 
      behavior: 'smooth'
    });
  };
  const EducationScroll = () =>{
    window.scrollTo({
      top: 3000, 
      behavior: 'smooth'
    });
  };
  const changeColor = () =>{
    if(window.scrollY >=1){
        setColor(true);
    
    }else{
        setColor(false);
    }
  };
  const Resume = () =>{
    fetch('SamplePDF.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'SamplePDF.pdf';
          alink.click();
      })
  })
  }
  window.addEventListener('scroll',changeColor)
  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "navmenu active":"navmenu"}>
            <li>
                <a onClick={HomeScroll}>Home</a>
            </li>
            
            <li>
        
                <a onClick={ProjectScroll}>Project</a>
            </li>
            
            <li>
                <a onClick={SkillScroll}>Skills</a>
            </li>
            
            <li>
                <a onClick={EducationScroll}>Education</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/11pv1225pBjwLrZ8eBiAs8FfhMxtrBHcg/view?usp=sharing" download="Yash_Darshankar">Resume</a>
            </li>
            <li>
            <a href="mailto:yashhdarshankar@gmail.com">Email me</a>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:"white"}}/>) : (<FaBars size={20} style={{color:"white"}}/>)}
            
            

        </div>
    </div>
  )
}

export default Navbar;