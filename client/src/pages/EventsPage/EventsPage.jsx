import EventForm from "../../components/Events/EventForm"
import { Row, Container } from "react-bootstrap"
import EventList from '../../components/Events/EventList'
import { useEffect, useState } from "react"
import eventService from "../../services/event.service"

const EventsPage = () => {

    const [events, setEvents] = useState([])

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
            <Row>
                <EventList events={events} />
            </Row>
            <EventForm />
        </Container>
    )
}
export default EventsPage