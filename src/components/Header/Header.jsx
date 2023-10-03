import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo/nav-logo.png"
import './Header.css';
import { BiSearch } from "react-icons/bi"
import { useState } from 'react';

function Header() {
  // Make Nav sticky when scrolling
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const makeSticky = () => {
    if (window.scrollY >= 90) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  window.addEventListener('scroll', makeSticky);

  return (
    <Navbar expanded={expanded} expand="lg" className={show ? "sticky-top header-bg" : ""}>
      <Container>
        <Navbar.Brand><Link to="/"><img src={logo} alt="Enieco" /></Link></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink
              className="nav-link text-center"
              to="/"
              onClick={() => setExpanded(false)}
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link text-center color"
              to="/about"
              onClick={() => setExpanded(false)}
            >
              About
            </NavLink>
            <NavLink
              className="nav-link text-center color"
              to="/products"
              onClick={() => setExpanded(false)}
            >
              Products
            </NavLink>
            <NavLink
              className="nav-link text-center color"
              to="/projects"
              onClick={() => setExpanded(false)}
            >
              Projects
            </NavLink>
            {/* <NavLink
              className="nav-link text-center color"
              to="/products"
              onClick={() => setExpanded(false)}
            >
              Products
            </NavLink> */}
            <NavLink
              className="nav-link text-center color"
              to="/blog"
              onClick={() => setExpanded(false)}
            >
              Blog
            </NavLink>
            <NavLink
              className="nav-link text-center color"
              to="/contact"
              onClick={() => setExpanded(false)}
            >
              Contact
            </NavLink>
          </Nav>
          {/* <Nav>
            <NavLink
              className="nav-link text-center"
              to="/search"
              onClick={() => setExpanded(false)}
            >
              <div className='nav-icon'>
                <BiSearch
                  size={20}
                />
              </div>
            </NavLink>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;