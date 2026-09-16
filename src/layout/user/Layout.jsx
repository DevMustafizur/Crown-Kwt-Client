import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      this is user layout
      <Outlet />
    </>
  )
}

export default Layout