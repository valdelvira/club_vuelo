import EventCard from "./EventCard"
import { Col } from "react-bootstrap"

const EventList = ({ events, refreshEvents }) => {

    return (
        <>{
            events.map(event => {
                return <Col md={4} key={event.title}> <EventCard {...event} refreshEvents={refreshEvents} /> </Col>
            })
        }
        </>
    )
}

export default EventList