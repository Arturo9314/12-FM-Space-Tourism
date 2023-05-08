import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { MainNavbar } from './elements/Navbar'
import './styles/App.css'
import Destination from './components/Destination'
import Crew from './components/Crew'
import Technology from './components/Technology'
import Dashboard from './components/Dashboard'
import homeDesktop from './assets/home/background-home-desktop.jpg'
import homeTablet from './assets/home/background-home-tablet.jpg'
import homeMobile from './assets/home/background-home-mobile.jpg'
import destinationDesktop from './assets/destination/background-destination-desktop.jpg'
import destinationTablet from './assets/destination/background-destination-tablet.jpg'
import destinationMobile from './assets/destination/background-destination-mobile.jpg'
import crewDesktop from './assets/crew/background-crew-desktop.jpg'
import crewTablet from './assets/crew/background-crew-tablet.jpg'
import crewMobile from './assets/crew/background-crew-mobile.jpg'
import technologyDesktop from './assets/technology/background-technology-desktop.jpg'
import technologyTablet from './assets/technology/background-technology-tablet.jpg'
import technologyMobile from './assets/technology/background-technology-mobile.jpg'


export function useBodyData(location){
  const body = document.querySelector('body');
  const viewportWidth = window.innerWidth;
  const vw = viewportWidth <=375 ? 'mobile' :  viewportWidth <= 768 ? 'tablet' : 'desktop'
  let bgBody 
  switch (location) {
    case 'home':
      switch (vw) {
        case 'mobile':
          bgBody = homeMobile  
        break;
        case 'tablet':
          bgBody = homeTablet
        break;
        case 'desktop':
          bgBody = homeDesktop
        break;
        default:
          break;
      }    
    break;
    case 'destination':
      switch (vw) {
        case 'mobile':
          bgBody = destinationMobile  
        break;
        case 'tablet':
          bgBody = destinationTablet
        break;
        case 'desktop':
          bgBody = destinationDesktop
        break;
        default:
          break;
      }
    break;
    case 'crew':
      switch (vw) {
        case 'mobile':
          bgBody = crewMobile  
        break;
        case 'tablet':
          bgBody = crewTablet
        break;
        case 'desktop':
          bgBody = crewDesktop
        break;
        default:
          break;
      }    
    break;
    case 'technology':
      switch (vw) {
        case 'mobile':
          bgBody = technologyMobile  
        break;
        case 'tablet':
          bgBody = technologyTablet
        break;
        case 'desktop':
          bgBody = technologyDesktop
        break;
        default:
          break;
      }
    break;
    default:
      break;
  }
  return {body, bgBody, viewportWidth}
}

function App() {
  return (
  <>
    <MainNavbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/explore/' element={<Dashboard/>}>
        <Route index element={<Navigate to='/explore/moon'/>}/>
        <Route path=':name'element={<Destination/>}/>
      </Route>
      <Route path='/crew-members/' element={<Dashboard/>}>
        <Route index element={<Navigate to='/crew-members/commander'/>}/>
        <Route path=':role' element={<Crew/>}/>
      </Route>
      <Route path='/technology/' element={<Dashboard/>}>
        <Route index element={<Navigate to='/technology/launch_vehicle'/>}/>
        <Route path=':techName' element={<Technology/>}/>
      </Route>
      <Route path='*' element={<Navigate to='/'/>} />
    </Routes>
  </>
  )
}

export default App
