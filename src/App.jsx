import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { MainNavbar } from './elements/Navbar'
import './styles/App.css'
import Destination from './components/Destination'
import Crew from './components/Crew'
import Technology from './components/Technology'
import Dashboard from './components/Dashboard'

export function useBodyData(location){
  const body = document.querySelector('body');
  const viewportWidth = window.innerWidth;
  const vw = viewportWidth <=375 ? 'mobile' :  viewportWidth <= 768 ? 'tablet' : 'desktop'
  const bgBody = `src/assets/${location}/background-${location}-${vw}.jpg`
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
