import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">News</Navbar.Brand>
        <Nav className="ml-auto">
          {/* <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#features">Work</Nav.Link> */}
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;
