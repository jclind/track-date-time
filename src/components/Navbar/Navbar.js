import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import './Navbar.scss'

const Navbar = () => {
  const { user } = useAuth()

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'></div>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          {user ? (
            <div className='link'>Logout</div>
          ) : (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
