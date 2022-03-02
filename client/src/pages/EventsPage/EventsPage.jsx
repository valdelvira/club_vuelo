import EventCard from '../../components/Events/EventCard'
import EventForm from "../../components/Events/EventForm"
import { Row, Button, Container } from "react-bootstrap"

const EventsPage = () => {

    return (
        <Container>
            <h1>Eventos</h1>
            <Row>
                <EventCard />
                <EventCard />
                <EventCard />
            </Row>
            <EventForm />
        </Container>
    )
}
export default EventsPage