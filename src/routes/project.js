import React from 'react'
import "../components/project.css"

const project = () => {
  return (
    <div className='Project_Container'>
      <br/>
      <h1>Projects</h1>
      <div className='cardbox'>
        <div className='cards'>
          <h4>Chatroom</h4>
          <p>It is a realtime chatroom . For the project to work properly open this link on two different tabs (or computers)and use different usernames .<br/><br/><br/><br/><br/></p>
          <a href="https://yashdarshankar2023.github.io/chatroom/" target="_parent"><button>Click here !</button></a>
        </div>
      <div className='cards'>
          <h4>Linear Search Simulation</h4>
          <p>This project shows the concept of linear search through a simulation,I have used HTML, CSS, Javascript for this project.<br/><br/><br/><br/><br/></p>
          <a href="https://yashdarshankar2023.github.io/linearsearch_simulation/" target="_parent"><button>Click here !</button></a>
      </div>        
      <div className='cards'>
          <h4>Login/Registration form</h4>
          <p>It is a login/registeration form , In which nodejs,mongodb is used.<br/><br/><br/><br/><br/><br/><br/></p>
          <a href="https://sleepy-river-41131.herokuapp.com/" target="_parent"><button>Click here !</button></a>
        </div>

        
      </div>

    </div>
  )
}

export default project