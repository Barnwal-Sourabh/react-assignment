import React from 'react'
import './Home.scss'
import Navigation from '../components/Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import Body from '../components/Body/Body'

function Home() {
  const items=['HOME','ELECTRONICS','BOOKS','MUSIC','MOVIES','CLOTHING','GAMES','FURNITURE','ELECTRONICS','TRAVEL','BOTANICAL','CATEGORY NAME']
  return (
    <main>
      <Navigation items={items}/>
      <Body />
    </main>
  )
}

export default Home