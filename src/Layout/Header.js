import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Header(props) {
  const userLoggedIn =
  <>
    <button class="btn btn-outline-primary" style={{marginRight:"1em"}}>Dashboard</button>
    <button class="btn btn-outline-secondary" >Logout</button>
  </>
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">Crypto Exchange</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about-us">About Us </Nav.Link>
          {props.isUserLoggedIn ? userLoggedIn : <Nav.Link href="#login">Login</Nav.Link>}
        </Nav>
      </Container>
    </Navbar>

  );
}