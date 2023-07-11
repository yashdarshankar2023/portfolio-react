/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/navbarstyles.css"
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
  const ExperienceScroll = () =>{
    window.scrollTo({
      top: 700, 
      behavior: 'smooth'
    });
  };
  const ProjectScroll = () =>{
    window.scrollTo({
      top: 1400, 
      behavior: 'smooth'
    });
  };
  const SkillScroll = () =>{
    window.scrollTo({
      top: 2200, 
      behavior: 'smooth'
    });
  };
  const EducationScroll = () =>{
    window.scrollTo({
      top: 2900, 
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
                <a onClick={ExperienceScroll}>Experience</a>
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
              <a href="https://drive.google.com/file/d/1FvdLCNRHZ4FMF4nMuFBIVY_qzEZ49Sh6/view?usp=sharing" download="Yash_Darshankar" target="blank">Resume</a>
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