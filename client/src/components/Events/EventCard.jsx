import { Card, Button, Col, Modal } from "react-bootstrap"
import { useState, useContext } from "react"
import '../../pages/EventsPage/EventsPage.css'
import eventService from "../../services/event.service"
import { AuthContext } from "../../context/auth.context"
import { Navigate } from 'react-router-dom'


const EventCard = ({ title, description, imgURL, _id }) => {

    const [showModal, setShowModal] = useState(false)

    const { isLoggedIn, user } = useContext(AuthContext)

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    const deleteEvent = () => {
        eventService
            .deleteEvent(_id)
            .then(() => Navigate('/events'))
            .catch(err => console.log(err))
    }


    return (
        <>
            <Col>
                <Card className='EventCard' style={{ width: '18rem' }}>
                    <Card.Img src={imgURL} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button variant="primary" onClick={handleModalOpen}>Detalles</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Modal show={showModal} onHide={handleModalClose} size="lg" >

                <Modal.Title>Detalles del evento</Modal.Title>

                <Modal.Body>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img src={imgURL} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                                <p>Listado de participantes</p>
                            </Card.Text>
                            {user?.role === 'ADMIN' && <Button variant="warning" onClick={deleteEvent(_id)}>Borrar</Button>}
                            <Button variant="primary">Unirse </Button>
                            <Button variant="warning">Editar </Button>

                        </Card.Body>
                    </Card>
                </Modal.Body>

            </Modal>
        </>
    )
}
export default EventCard