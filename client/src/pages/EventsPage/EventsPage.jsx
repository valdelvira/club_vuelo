import { Row, Container, Button, Modal } from "react-bootstrap"
import { useEffect, useState } from "react"
import eventService from "../../services/event.service"
import EventForm from "../../components/Events/EventForm"
import EventList from '../../components/Events/EventList'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

const EventsPage = () => {

    const [events, setEvents] = useState([])
    const [showModal, setShowModal] = useState(false)

    const handleModalFormClose = () => setShowModal(false)
    const handleModalFormOpen = () => setShowModal(true)


    useEffect(() => {
        loadEvents()
    }, [])

    const loadEvents = () => {
        eventService
            .getEvents()
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <h1>Eventos</h1>
            <Button onClick={handleModalFormOpen}> Crear evento</Button>
            <Row>
                { !events.length ? <LoadingSpinner /> : <EventList events={events} refreshEvents={loadEvents} />}
            </Row>

            <Modal show={showModal} onHide={handleModalFormClose} size="lg">

                <Modal.Title>Crea un evento</Modal.Title>

                <Modal.Body>
                    <EventForm closeModal={handleModalFormClose} refreshEvents={loadEvents} />
                </Modal.Body>

            </Modal>
        </Container>
    )
}
export default EventsPage