import React, { useEffect } from 'react'
import {DestinationNavbar} from '../elements/Navbar'
import '../styles/Destination.css'
import { destinations } from '../data/getData'
import { useBodyData } from '../App'
import { Navigate, useParams } from 'react-router-dom'
import moon from '../assets/destination/image-moon.webp'
import mars from '../assets/destination/image-mars.webp'
import europa from '../assets/destination/image-europa.webp'
import titan from '../assets/destination/image-titan.webp'

export default function Destination() {
  const {name} = useParams()
  const {body, bgBody} = useBodyData('destination')
  const index = destinations.findIndex((e)=>(e.name.toLowerCase()===name.toLowerCase()))
  const { name: placeName, description, distance, travel} = index<0 ? {} :destinations[index]
  
  useEffect(()=>{
    body.style.backgroundImage = `url(${bgBody})`
    const timeoutId = setTimeout(()=>{
      const el = document.getElementById('destination-img')
      const height = el.clientHeight
      const width = el.clientWidth
      el.addEventListener('mousemove', (event)=>{
        const {layerX, layerY} = event
        const yRotation = ((layerX - width / 2) / width) * 20
        const xRotation = ((layerY - height / 2) / height)*20
        const str = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
        el.style.transform = str
      })
      el.addEventListener('mouseout', ()=>{
        el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
      })
    }, 500);
    return ()=>clearTimeout(timeoutId)
  },[])
  
  return (
    <article className='destination-container'>{
      index<0? <Navigate to='/explore'/> : 
      <>
      <DestinationImg placeName={placeName}/>
      <aside id='destination-details'>
          <DestinationNavbar/>
          <DestinationInfo placeName={placeName} description={description} distance={distance} travel={travel}/>
      </aside>
      </>
    }
    </article>
  )
}

function DestinationInfo({placeName, description, distance, travel}) {
  
  return (
    <>
    <div className='destination-info'>
      <h3 id='title-place' className='heading2'>{placeName}</h3>
      <p>{description}</p>
    </div>
    <footer className='destination-footer'>
    <div>
      <h4 className='subheading2'>Avg. distance</h4>
      <p className='heading5'>{distance}</p>
    </div>
    <div>
      <h4 className='subheading2'>Est. travel time</h4>
      <p className='heading5'>{travel}</p>
    </div>
    </footer>
    </>
  )
}

function DestinationImg({placeName}){
  const placeImg = placeName === 'Moon' ? moon : placeName === 'Mars' ? mars : placeName === 'Europa' ? europa : titan
  return (
    <figure id='destination-img'>
      <img src={placeImg} alt={`Witout description of ${placeName}`}/>
    </figure>
  )
}



