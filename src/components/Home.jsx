import React, { useEffect } from 'react'
import '../styles/Home.css'
import HomeBTN from '../elements/buttons/HomeBTN'
import { useBodyData } from '../App'

export default function Home() {
  
  const {body, bgBody} = useBodyData('home')

  useEffect(()=>{
    body.style.backgroundImage = `url(${bgBody})`
  }, [])

  return (
    <section className='home-page'>
        <article id='home-info'>
            <header id='home-header'>
              <h1 className='heading1'>SPACE</h1>
              <p className='heading5'>SO, YOU WANT TO TRAVEL TO</p>
            </header>
            <p className='home-description'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </article>
        <aside className='home-btn-container'>
            <HomeBTN/>
        </aside>
    </section>
  )
}