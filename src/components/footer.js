import React from 'react'
import "../styles/footerstyles.css"
import { FaHome, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa"
import { FiMail } from "react-icons/fi"


const footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="left">
                    <div className="leftFooterIcon">
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} /> Sharda nagar, Nanded, India - 431605
                    </div>
                    <div>
                    </div>
                    <div className='leftFooterIcon'>
                        <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />9518399661
                    </div>
                    <div className='leftFooterIcon'>
                        <FiMail size={25} style={{ color: "white", marginRight: "2rem" }} />yashhdarshankar@gmail.com
                    </div>
                </div>

                <div className="right">
                    <h2>About me</h2>
                    <p>Hello, I'm Yash Darshankar, a skilled web and software developer studying at MGM's College of Engineering. I have expertise in both web development and software development, covering front-end and back-end technologies. I'm currently seeking job opportunities to apply my skills and contribute to a company's success.I'm eager to grow as a developer and learn from experienced professionals. I'm confident in my abilities and excited to take on new challenges in the industry.  </p>
                    <div className='rightFooterIcon'>
                        <a href='https://www.linkedin.com/in/yash-darshankar-00b782227'><FaLinkedin size={50} style={{ color: "white", marginRight: "2rem" }} /></a>
                        <a href='https://www.linkedin.com/in/yash-darshankar-00b782227'><FaInstagram size={50} style={{ color: "white", marginRight: "2rem" }} /></a>
                        <a href="mailto:yashhdarshankar@gmail.com"><FiMail size={50} style={{ color: "white", marginRight: "2rem" }} /></a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default footer