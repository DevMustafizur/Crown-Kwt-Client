import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import MobileBNav from './components/MobileBNav'

const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <MobileBNav />
    </>
  )
}

export default Layout