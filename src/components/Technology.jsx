import React, { useEffect } from 'react'
import { TechnologyNavbar } from '../elements/Navbar'
import '../styles/Technology.css'
import { Navigate, useParams } from 'react-router-dom'
import { tech } from '../data/getData'
import { useBodyData } from '../App'
import launchVehicleP from '../assets/technology/image-launch-vehicle-portrait.jpg'
import launchVehicleL from '../assets/technology/image-launch-vehicle-landscape.jpg'
import spaceportP from '../assets/technology/image-spaceport-portrait.jpg'
import spaceportL from '../assets/technology/image-spaceport-landscape.jpg'
import spaceCapsuleP from '../assets/technology/image-space-capsule-portrait.jpg'
import spaceCapsuleL from '../assets/technology/image-space-capsule-landscape.jpg'
export default function Technology() {
    
  const {techName}=useParams()
  const {body, bgBody, viewportWidth} = useBodyData('technology')  
  const index = tech.findIndex((e)=>(e.name.toLowerCase()===techName.replace(/_/g, " ")))
  const {name, description}= index<0?{}: tech[index]

  useEffect(()=>{
    body.style.backgroundImage = `url(${bgBody})` 
  }, [])


  return (
    <article className='tech-container'>
      {index<0? <Navigate to='/technology'/> : 
      <>
      <aside id='tech-details'>
        <TechnologyNavbar/>
        <div id='tech-data' className='tech-info'>
          <TechnologyInfo name={name} description={description}/>
        </div>
      </aside>
      <TechnologyImg viewportWidth={viewportWidth} name={name} description={description}/>
      </>
      }
    </article>
  )
}


function TechnologyInfo({name, description}) {
  return (
    <>
    <header className='tech-header'>
      <h3 className='heading3'>{name}</h3>
      <p className='nav-text'>THE TERMINOLOGY…</p>
    </header>
    <p className='tech-description'>{description}</p>
    </>
  )
}


function TechnologyImg({viewportWidth, name, description}) {
  const techImg = viewportWidth<768 ?
      name === 'Launch vehicle' ?
        launchVehicleL :
      name === 'Spaceport'?
        spaceportL : spaceCapsuleL
    : name === 'Launch vehicle' ?
        launchVehicleP :
      name === 'Spaceport'?
        spaceportP : spaceCapsuleP

  return (
    <figure id='tech-img'>
        <img src={techImg} alt={description}></img>
    </figure>
  )
}


