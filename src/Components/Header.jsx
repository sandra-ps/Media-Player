import React from 'react'
import { Navbar,Container } from 'react-bootstrap'

function Header() {
  return (
    <Navbar className="bg-info">
    <Container>
      <Navbar.Brand href="#home" className='fw-Bolder' style={{color:'white',fontSize:'25px'}}>
      <i class="fa-solid fa-cloud-arrow-up fa-beat me-2"></i>
        Media Player
      </Navbar.Brand>
    </Container>
  </Navbar>

);
}
 

export default Header