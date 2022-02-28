import './Navigator.css'
import { Navbar, Container, Nav, Image, NavDropdown } from 'react-bootstrap'

const Navigator = () => {
    return (
        <Navbar bg="light" variant="light" className='navigator'>
            <Container>
                <Image src='../../../logo.png' />
                <Nav>
                    <NavDropdown title="Akaflieg" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Quiénes somos</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Proyectos</NavDropdown.Item>
                        <NavDropdown.Item href="#action5">Patrocinadores</NavDropdown.Item>
                        <NavDropdown.Item href="#action5">Precios</NavDropdown.Item>
                        <NavDropdown.Item href="#action5">Contacto</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#features">Meteo</Nav.Link>
                    <Nav.Link href="#pricing">Noticias</Nav.Link>
                    <Nav.Link href="#pricing">Eventos</Nav.Link>
                    <Nav.Link href="#pricing">Registrarse</Nav.Link>
                    <Nav.Link href="#pricing">Iniciar sesión</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigator