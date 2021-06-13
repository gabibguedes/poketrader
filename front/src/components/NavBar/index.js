import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const NavBar = () => {
  return(
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">PokeTrader</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>

          <Nav.Link href="/history">Historico de Trocas</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Button variant="outline-info" href="/new-trade">Realizar uma nova troca</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar