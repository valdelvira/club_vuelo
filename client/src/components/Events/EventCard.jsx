import { Card, Button, Col, Modal } from "react-bootstrap"
import { useState } from "react"
import '../../pages/EventsPage/EventsPage.css'



const EventCard = ({ title, description, imgURL }) => {

    const [showModal, setShowModal] = useState(false)


    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)
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
            <Modal show={showModal} onHide={handleModalClose} size="lg">

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
                            <Button variant="primary">Unirse </Button>
                            <Button variant="warning">Editar </Button>
                            <Button variant="danger">Eliminar </Button>

                        </Card.Body>
                    </Card>
                </Modal.Body>

            </Modal>
        </>
    )
}
export default EventCard