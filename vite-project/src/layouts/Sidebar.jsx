import React from 'react'

import { Link } from "react-router-dom";
import '../components/githubcard.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../src/profile-picture.jpg'

function Sidebar() {
  return (
    <div className="repo_container">
    <Navbar className='navigation'>
        <ul>
        <div className='profile-picture'>
           <img src={Logo} alt="Iruoje Faith Picture" />
        </div>


        <Navbar href="#" className='nav_brand'>
        <h3>IRUOJE FAITH</h3>

        @iruojefaith
        </Navbar>

          <Nav className="me-auto">
            <Nav.Link className='nav_link'>
            <Link to={"1"}>Goto Repository</Link>
            </Nav.Link>
            <Nav.Link  className="nav_link">
            <Link to={-1}>Back</Link>
            </Nav.Link>
            </Nav>
        </ul>

      </Navbar>
    </div>
  )
}

export default Sidebar