import React, { useEffect } from 'react'
import { CrewNavbar } from '../elements/Navbar'
import '../styles/Crew.css'
import { Navigate, useParams } from 'react-router-dom'
import { crew } from '../data/getData'
import { useBodyData } from '../App'
import commander from '../assets/crew/image-douglas-hurley.webp'
import missionSpecialist from '../assets/crew/image-mark-shuttleworth.webp'
import pilot from '../assets/crew/image-victor-glover.webp'
import flightEngineer from '../assets/crew/image-anousheh-ansari.webp'

export default function Crew() {

  const {role} = useParams()
  const {body, bgBody} = useBodyData('crew')
  const index = crew.findIndex((e)=>(e.role.toLowerCase()===role.replace(/_/g, " ")))
  const { name, role : roleMember, bio } = index<0? {} : crew[index]

  useEffect(()=>{
    body.style.backgroundImage = `url(${bgBody})`
  }, [])

  return (
    <>
    <article className='crew-container'>
        {index<0?<Navigate to='/crew-members' /> :
        <>
        <aside id='crew-details'>
          <CrewMember name={name} roleMember={roleMember} bio={bio}/>
          <CrewNavbar/>   
        </aside>
        <CrewImg roleMember={roleMember} description={bio}/>
        </>
        }
    </article>
    </>
  )
}

function CrewMember({ name, roleMember, bio}) {
  return (
    <div id='crew-data' className='crew-info'>
      <header className='crew-header'>
        <h3 className='heading3'>{name}</h3>
        <p className='heading4'>{roleMember}</p>
      </header>
      <p className='member-description'>{bio}</p>
    </div>    
  )
}

function CrewImg({roleMember, description}) {
  const memberImg = roleMember === 'Commander' ? commander : 
                    roleMember === 'Mission Specialist' ? missionSpecialist :
                    roleMember === 'Pilot' ? pilot : flightEngineer
  return (
    <figure id='crew-img'>
        <img src={memberImg} alt={description} />
    </figure>
  )
}

