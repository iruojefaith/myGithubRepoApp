import React from 'react'
// import { NavLink as Link } from 'react-router-dom';
import '../components/githubcard.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../src/profile-picture.jpg'

function Sidebar() {
  return (
    <div className="repo_container">
    <Navbar className='navigation'>
        <ul>
        <div className='user'>
           <img src={Logo} alt="Logo"  />
        </div>

        <h3>IRUOJE FAITH</h3>
          <Navbar href="#" className='nav_brand'>@iruojefaith</Navbar>

          <Nav className="me-auto">
            <Nav.Link href="#githubcard" className='nav_link'>View Repositries</Nav.Link>
            <Nav.Link href="#features" className='nav_link'>Features</Nav.Link>
            </Nav>
        </ul>

      </Navbar>
    </div>
  )
}

export default Sidebar