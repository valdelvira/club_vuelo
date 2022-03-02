import './Navigator.css'
import { Navbar, Container, Nav, Image, NavDropdown, Form, Button, Modal } from 'react-bootstrap'
import { useState, useContext } from "react"
import { NavLink } from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm'
const Navigator = () => {

    const [showModal, setShowModal] = useState(false)

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)
    return (
        <>
            <Navbar bg="light" variant="light" className='navigator' sticky='top'>
                <Container>
                    <NavLink to="/">
                        <Image src='../../../logo.png' />
                    </NavLink>
                    <Nav>
                        <NavDropdown title="Akaflieg Madrid" id="navbarScrollingDropdown">
                            <NavLink to="/about-us">
                            <NavDropdown.Item as="span">Quiénes somos</NavDropdown.Item>
                            </NavLink>
                            <NavDropdown.Item href="#action4">Proyectos</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Patrocinadores</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Precios</NavDropdown.Item>
                            <NavDropdown.Item href="/contact">Contacto</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features">Meteo</Nav.Link>
                        <Nav.Link href="#pricing">Noticias</Nav.Link>
                        <Nav.Link href="#pricing">Eventos</Nav.Link>
                        <NavLink to="/signup">
                            <Nav.Link as="span" >Registrarse</Nav.Link>
                        </NavLink>
                        <Nav.Link onClick={handleModalOpen}> Iniciar sesión</Nav.Link>
                    </Nav>
                </Container>
            </Navbar >

            <Modal show={showModal} onHide={handleModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Formulario de login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm closeModal={handleModalClose} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default Navigator