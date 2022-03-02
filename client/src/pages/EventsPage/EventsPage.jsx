import EventCard from '../../components/Events/EventCard'
import EventForm from "../../components/Events/EventForm"
import { useState } from "react"
import { Row, Modal, Container, Button } from "react-bootstrap"

const EventsPage = () => {

    const [showModal, setShowModal] = useState(false)

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    return (
        <Container>
            <h1>Eventos</h1>
            <Button onClick={handleModalOpen}> Crear evento</Button>
            <Row>
                <EventCard />
                <EventCard />
                <EventCard />
            </Row>

            <Modal>

                <Modal.Title>Crea un evento</Modal.Title>

                <Modal.Body>
                    <EventForm closeModal={handleModalClose} />
                </Modal.Body>

            </Modal>
        </Container>
    )
}
export default EventsPage