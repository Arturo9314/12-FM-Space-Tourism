import data from './data.json'

const menu = [{id: '00',menuName: 'home', text:'Welcome',defaultName: '/'}, {id: '01',menuName: 'destination', text:'Pick your destination', defaultName: 'explore'}, {id: '02', menuName: 'crew', text:'Meet your crew' ,defaultName: 'crew-members'}, {id: '03',menuName: 'technology', text:'SPACE LAUNCH 101', defaultName: 'technology'}]

const destinations = data.destinations
const crew = data.crew
const tech = data.technology

export {destinations, crew, tech, menu}