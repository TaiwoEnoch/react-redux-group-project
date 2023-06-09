/** ****************************************
 * Project: react-redux-group-project
 * File: Navbar.js
 * Created: 4/24/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Navbar.css';

function NavBar() {
  return (
    <Container>
      <Navbar bg="white" className="contain">
        <Navbar.Brand className="d-flex align-items-center">
          <img
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top me-3"
            alt="Space Travelers Hub Logo"
          />
          <Navbar.Text className="brand-text">Space Travelers Hub</Navbar.Text>
        </Navbar.Brand>
        <Nav className="ms-auto d-flex">
          <NavLink className="ms-3" to="/">Rockets</NavLink>
          <NavLink className="mission ms-3" to="missions">Missions</NavLink>
          <NavLink className="ms-3" to="my profile">My Profile</NavLink>
        </Nav>
      </Navbar>
      <hr />
    </Container>
  );
}

export default NavBar;
