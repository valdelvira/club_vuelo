import EventForm from "../../components/Events/EventForm"
<<<<<<< HEAD
import { Row, Container, Button, Modal } from "react-bootstrap"
=======
import { Row, Container, Modal, Button } from "react-bootstrap"
>>>>>>> refs/remotes/origin/main
import EventList from '../../components/Events/EventList'
import { useEffect, useState } from "react"
import eventService from "../../services/event.service"

const EventsPage = () => {

    const [events, setEvents] = useState([])
    const [showModal, setShowModal] = useState(false)


    const handleModalFormClose = () => setShowModal(false)
    const handleModalFormOpen = () => setShowModal(true)


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
<<<<<<< HEAD
            {/* <Button onClick={handleModalOpen}> Crear evento</Button> */}
=======
            <Button onClick={handleModalFormOpen}> Crear evento</Button>
>>>>>>> refs/remotes/origin/main
            <Row>
                <EventList events={events} />
            </Row>

            <Modal show={showModal} onHide={handleModalFormClose} size="lg">

                <Modal.Title>Crea un evento</Modal.Title>

                <Modal.Body>
<<<<<<< HEAD
                    {/* <EventForm closeModal={handleModalClose} /> */}
=======
                    <EventForm closeModal={handleModalFormClose} />
>>>>>>> refs/remotes/origin/main
                </Modal.Body>

            </Modal>
        </Container>
    )
}
export default EventsPage