import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import "./home.css"

const NavigationMenu = () => {
  return (
    <Navbar className="me-2 text-white" bg="dark" expand="lg">
      <Navbar.Brand href="/">
        <FontAwesomeIcon icon={faFilm} className="ms-4 me-2 text-white" />
        <span style={{ color: "#0d6efd" }}>Popcorn</span><span style={{ color: "#DC143C" }}>Hub</span>
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="flex-end text-white" id="basic-navbar-nav">
          <Nav
            className="me-auto text-white
                "
          >
            <Nav.Link className="me-2 text-white" href="/movies-coming">
              Coming Soon
            </Nav.Link>
            <Nav.Link className="me-2 text-white" href="/movies-in-theaters">
              Movies in Theaters
            </Nav.Link>
            <Nav.Link className="me-2 text-white" href="/top-rated-india">
              Top Rated Indian Movies
            </Nav.Link>
            <Nav.Link className="me-2 text-white" href="/top-rated-movies">
              Top Rated World Wide Movies
            </Nav.Link>
            <Nav.Link href="/favourite" style={{ color: 'white' }}>Favourites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
