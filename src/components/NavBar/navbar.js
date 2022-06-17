import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider';

function NavBar() {
  const navigate = useNavigate()

  const { LogOut, user } = useContext(AuthContext);

  const navigateMain = () => {
    navigate("/mainpage/")
  }


  const navigateMyNotes = () => {
    navigate("/mainpage/mynotes")
  }

  const navigateNewNotes = () => {
    navigate("/mainpage/newnotes")
  }

  const navigateConfig = () => {
    navigate("/mainpage/config")
  }

  const handleLogOut = () => {
    LogOut()
    navigate("/")
  }


  return (
    <Navbar style={{ background: '#04C35C' }} expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ width: '100%' }} >
            <Nav.Link onClick={navigateMain}>Pagina Inicial</Nav.Link>
            <Nav.Link onClick={navigateMyNotes} > Minhas Anotações</Nav.Link>
            <Nav.Link onClick={navigateNewNotes}>Nova Anotação</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <NavDropdown title={<span style={{ color: '#fff' }} className="my-auto">{user.data.email}</span>} id="navbarScrollingDropdown">
          <NavDropdown.Item onClick={navigateConfig}>Configurações</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={handleLogOut}>
            Sair
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar >
  );
}

export default NavBar;