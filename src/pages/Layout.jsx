import { Outlet } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
    return <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home"><Nav.Link href="/" >Mobile Hub</Nav.Link></Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="./Mobile">Menu</Nav.Link>
            <Nav.Link href="./Login">Login</Nav.Link>
            <Nav.Link href="./Register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>  
        <Outlet />
    </>
}

export default Layout

