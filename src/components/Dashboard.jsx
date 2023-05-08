import React, { useEffect } from 'react'
import '../styles/Sections.css'
import { Outlet, useParams } from 'react-router-dom'
import { menu } from '../data/getData'
import { useBodyData } from '../App'

export default function Dashboard() {

  const {name, role, techName} = useParams()
  const title = name ? menu[1].text : role ? menu[2].text : techName ? menu[3].text : null;
  const index = name ? menu[1].id   : role ? menu[2].id   : techName ? menu[3].id :null;
  const {viewportWidth} = useBodyData('destination')
  const number = viewportWidth <=375 ? 11.75 : viewportWidth > 1440 ? 5.75 : 8.75

  useEffect(()=>{
    if(title){
      const titleId = document.getElementById('title')
      titleId.style.width = `${title.length+number}ch`
      titleId.style.animation = `typing 3s steps(${title.length}), blink .5s infinite step-end alternate`
    }else{
      const titleId = document.getElementById('title')
      titleId.style.animation = ''
    }
  }
  ,[title])

  return (
    <section className='sections-page'>
        <header id='sections-header'>
            <h2 id='title' className='heading5'>{title}</h2>
            <strong className='heading5 bold'>{index}</strong>
        </header>
        <Outlet/>
    </section>
  )
}
