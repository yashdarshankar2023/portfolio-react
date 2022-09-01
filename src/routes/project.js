import React from 'react'
import "../components/project.css"

const project = () => {
  return (
    <div className='Project_Container'>
      <br/>
      <h1>Projects</h1>
      <div className='cardbox'>
        <div className='cards'>
          <h4>Project1</h4>
          <p>This is Project1 and here are it's specifications and this is card1 and link is provided below</p>
          <a href="https://yashdarshankar2023.github.io/chatroom/" target="_parent"><button>Click here !</button></a>
        </div>
      <div className='cards'>
          <h4>Project2</h4>
          <p>This is project2 and here are it's specifications and this is card1 and link is provided below</p>
          <a href="https://yashdarshankar2023.github.io/chatroom/" target="_parent"><button>Click here !</button></a>
      </div>        
      <div className='cards'>
          <h4>Project3</h4>
          <p>This is Project3 and here are it's specifications and this is card1 and link is provided below</p>
          <a href="https://yashdarshankar2023.github.io/chatroom/" target="_parent"><button>Click here !</button></a>
        </div>

        
      </div>

    </div>
  )
}

export default project