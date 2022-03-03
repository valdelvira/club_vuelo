import EventCard from "./EventCard"
import { Col } from "react-bootstrap"

const EventList = ({ events }) => {



    return (
        <>{
            events.map(event => {
                console.log(event)
                return <Col md={4} key={event.title}> <EventCard {...event} /> </Col>
            })
        }
        </>
    )
}

export default EventList