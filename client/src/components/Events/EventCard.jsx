import { Card, Button, Col } from "react-bootstrap"


const EventCard = ({ title, description, imgURL }) => {
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img src={imgURL} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Unirse</Button>
                    <Button variant="primary">Ver</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default EventCard