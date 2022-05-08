import {Navbar,Button,Form, Nav, NavDropdown, Container} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Login from './Login'
import Profilebulb from './Profilebuble'


const NavUser = () => {
  const user = useSelector(state=> state.authReducer.user)
  const token = localStorage.getItem('token')
    return (
        <div>
          { token && user ?
            <div id='navgloBal'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand>Karhabtek.tn</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      
      <div id='Navelements'>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Acceuil</Nav.Link>
      <Nav.Link as={Link} to='/Occasions'>Occasions</Nav.Link>
    </Nav>
    </div>
    <div>
    <Nav>
      <Profilebulb/>
      
    </Nav>
    </div>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div> 
        :

        <div id='navgloBal'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand>Karhabtek.tn</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      
      <div id='Navelements'>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Acceuil</Nav.Link>
      <Nav.Link as={Link} to='/Occasions'>Occasions</Nav.Link>
      <Nav.Link>Services</Nav.Link>
      <Nav.Link>Contact</Nav.Link>
    </Nav>
    </div>
    <div>
    <Nav>
      <Login/>
      
    </Nav>
    </div>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
        }
    </div>
    )
}

export default NavUser