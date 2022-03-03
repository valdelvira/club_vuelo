import EventForm from "../../components/Events/EventForm"
import { Row, Container, Button, Modal } from "react-bootstrap"
import EventList from '../../components/Events/EventList'
import { useEffect, useState } from "react"
import eventService from "../../services/event.service"

const EventsPage = () => {

    const [events, setEvents] = useState([])

    // const handleModalClose = () => setShowModal(false)
    // const handleModalOpen = () => setShowModal(true)

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
            {/* <Button onClick={handleModalOpen}> Crear evento</Button> */}
            <Row>
                <EventList events={events} />
            </Row>

            <Modal>

                <Modal.Title>Crea un evento</Modal.Title>

                <Modal.Body>
                    {/* <EventForm closeModal={handleModalClose} /> */}
                </Modal.Body>

            </Modal>
        </Container>
    )
}
export default EventsPage