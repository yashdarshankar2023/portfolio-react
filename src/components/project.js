import React from 'react'
import "../styles/project.css"

const project = () => {
  const redirectToProject1 = () => {
    window.open('https://hospital-project-bmi1.onrender.com/', '_blank');
  };

  const redirectToProject2 = () => {
    window.open('https://github.com/yashdarshankar2023/Web-scraping-and-crawling.git', '_blank');
  };
  
  return (
    <div className='Project_Container'>
      <br/>
      <h1>Projects</h1>
      <div className='college_course'>
        <div className='project_box'>
          <h4>Portal for occupancy of beds in Hospital</h4>
          &nbsp;<li>Developed a hospital bed availability portal using the MERN stack (MongoDB,Express.js, React.js, Node.js).</li>
          &nbsp;<li>Centered around frontend development with React.js to create an intuitive user interface.</li>
          &nbsp;<li>Integrated an interactive chatbot for enhanced user experience.</li>
          &nbsp;<li>Established data communication using Node.js and Express.js for seamless backend integration.</li>
          &nbsp;<li>Utilized Render platform for scalable deployment and hosting. Resulted in a user-friendly portal for efficient management of hospital bed availability.</li>
          <br/>
          <button className="projectbtn" onClick={redirectToProject1} >View</button>
          
        </div>
      <div className='project_box2'>
      <h4>Web Scraping and Crawling</h4>
          &nbsp;<li>I developed a web scraping and crawling project using Python and Google Colab.</li>
          &nbsp;<li>Scraped data from websites such as W3Schools, IMDb, and Wikipedia.</li>
          &nbsp;<li>Leveraged automation to efficiently extract valuable information for analysis and utilization.</li>
          &nbsp;<li>Empowered data collection and analysis for various purposes through this Python-based project on web scraping and crawling.</li>
          <br/>   <br/>   <br/>   <br/>   <br/>
          <button className="projectbtn" onClick={redirectToProject2} >View</button>
      </div>  
    </div>

    </div>
  )
}

export default project