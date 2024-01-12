import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation({ Toggle }) {
  return (
    <Navbar expand="lg" className=" bg-white">
      <Container fluid>
        <Navbar.Brand href="#home" className="d-md-block d-none">
          Dashboard
        </Navbar.Brand>
        <Navbar.Brand
          className="navbar-brand d-block d-md-none"
          onClick={() => Toggle()}
        >
          <i className="bi bi-justify"></i>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white">
            <Nav.Link className="active" href="#home">
              <i className="bi bi-search me-3"></i>Search
            </Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
