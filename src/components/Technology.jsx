import React, { useEffect } from 'react'
import { TechnologyNavbar } from '../elements/Navbar'
import '../styles/Technology.css'
import { Navigate, useParams } from 'react-router-dom'
import { tech } from '../data/getData'
import { useBodyData } from '../App'

export default function Technology() {
    
  const {techName}=useParams()
  const {body, bgBody, viewportWidth} = useBodyData('technology')  
  const index = tech.findIndex((e)=>(e.name.toLowerCase()===techName.replace(/_/g, " ")))
  const {name, images, description}= index<0?{}: tech[index]
  const techImg = index<0?'': `src/${viewportWidth>768?images.portrait.slice(2):images.landscape.slice(2)}`
  

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
      <TechnologyImg techImg={techImg} description={description}/>
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


function TechnologyImg({techImg, description}) {
  return (
    <figure id='tech-img'>
        <img src={techImg} alt={description}></img>
    </figure>
  )
}


