/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/navbarstyles.css"
import { Link } from "react-router-dom"
import {React,  useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="header header-bg">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "navmenu active" : "navmenu"}>
        <li>
          {/* <a onClick={HomeScroll}>Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Experience">Experience</Link>
        </li>

        <li>

          <Link to="/Project">Project</Link>
        </li>

        <li>
          <Link to="/Skill">Skills</Link>
        </li>

        <li>
          <Link to="/Education">Education</Link>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1duOBQwlO1W4pIxpbjqZz8sgZBwW1rzxy/view?usp=sharing" download="Yash_Darshankar" target="blank">Resume</a>
          
        </li>
        <li>
          <a href="mailto:yashhdarshankar@gmail.com">Email me</a>
        </li>
      </ul>
      <div className="Close-Icon" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "white" }} />) : (<FaBars size={20} style={{ color: "white" }} />)}
      </div>
    </nav>
  )
}

export default Navbar;