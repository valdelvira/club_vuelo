import { Row, Container, Button, Modal } from "react-bootstrap"
import { useEffect, useState } from "react"

import eventService from "../../services/event.service"

import EventForm from "../../components/Events/EventForm"
import EventList from '../../components/Events/EventList'
import EditEventForm from "../../components/Events/EditEventForm"

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
                <EventList events={events} />
            </Row>

            <Modal show={showModal} onHide={handleModalFormClose} size="lg">

                <Modal.Title>Crea un evento</Modal.Title>

                <Modal.Body>
                    <EventForm closeModal={handleModalFormClose} />
                </Modal.Body>

            </Modal>
        </Container>
    )
}
export default EventsPage