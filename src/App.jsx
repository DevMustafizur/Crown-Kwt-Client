import React from 'react'
import { Outlet } from 'react-router'

import Navbar from './components/layout/navbar/Navbar.jsx'
import Footer from './components/layout/footer/Footer.jsx'
import MobileNav from './components/layout/MobileBottomNav/mobileNav.jsx'

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
      
      <MobileNav />
      <Footer />
    </>
  )
}

// LOGGED OUT
// Home | Cart | Wishlist | Sign In | More

// LOGGED IN
// Home | Cart | Wishlist | Profile | More

// Logged in
// Logo | Search | Cart | Wishlist | Account | Language

// Account খুললে:

// Account
// ├── My Profile
// ├── My Orders
// ├── My Addresses
// ├── Payment Methods
// ├── Notifications
// ├── Settings
// └── Logout
// Logged out
// Logo | Search | Cart | Wishlist | Sign In | Language

export default App