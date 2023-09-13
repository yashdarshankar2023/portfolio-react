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
    <section className='Project_Container'>
      <h1>Projects</h1>
      <div className='college_course'>
        <div className='project_box'>
          <div className='projectPara'>
          <h4>Portal for occupancy of beds in Hospital</h4>
          <li>Developed a hospital bed availability portal using the MERN stack (MongoDB,Express.js, React.js, Node.js).</li>
          <li>Centered around frontend development with React.js to create an intuitive user interface.</li>
          <li>Integrated an interactive chatbot for enhanced user experience.</li>
          <li>Established data communication using Node.js and Express.js for seamless backend integration.</li>
          <li>Utilized Render platform for scalable deployment and hosting. Resulted in a user-friendly portal for efficient management of hospital bed availability.</li>
          </div>
          
          <button className="projectbtn" onClick={redirectToProject1} >View</button>

        </div>
        <div className='project_box2'>
          <div className='projectPara'>
          <h4>Web Scraping and Crawling</h4>
          <li>I developed a web scraping and crawling project using Python and Google Colab.</li>
          <li>Scraped data from websites such as W3Schools, IMDb, and Wikipedia.</li>
          <li>Leveraged automation to efficiently extract valuable information for analysis and utilization.</li>
          <li>Empowered data collection and analysis for various purposes through this Python-based project on web scraping and crawling.</li>
          </div>
          <button className="projectbtn" onClick={redirectToProject2} >View</button>
        </div>
      </div>

    </section>
  )
}

export default project

