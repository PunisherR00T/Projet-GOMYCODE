import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import '../App.css'
import { setinpt } from "../Redux/Actions/carActions"

 const NavCar = () => {
  
  const [input,setInput] = useState('')
  const dispatch = useDispatch()
     return (
         <div>
                <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      
      <Form className="d-flex" id="forminpt">
        <FormControl
          type="search"
          placeholder="Que cherchez vous ? "
          className="me-2"
          aria-label="Search"
          onChange={(e)=>setInput(e.target.value)}
        />
        <Button variant="outline-success"onClick={()=>dispatch(setinpt(input))}>Rechercher</Button>
       
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
         </div>
     )
 }

 export default NavCar