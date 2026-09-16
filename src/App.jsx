import React from 'react'
import { Outlet } from 'react-router'

import Subnav from './components/layout/subnav/Subnav.jsx'
import Navbar from './components/layout/navigation/Navbar.jsx'

const App = () => {

  return (
    <>
      <Subnav />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}



export default App