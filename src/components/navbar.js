import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './navbar.css'

function Navigation(){
  return (

    <Navbar collapseOnSelect className="nav-bg" expand="lg" variant="light">
  <Container>
  <Navbar.Brand href="#home">IRAM LIU</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto nav-text" >
      <Nav.Link href="#about" className="nav-button">ABOUT</Nav.Link>
      <Nav.Link href="#projects" className="nav-button">PROJECTS</Nav.Link>
      <Nav.Link href="https://drive.google.com/file/d/1wMrYmMl4VbM7EHmpm2gYMlgnfk_-gjax/view?usp=sharing" className="nav-button">RESUME</Nav.Link>
      <Nav.Link href="#contact" className="nav-button">CONTACT</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
  export default Navigation