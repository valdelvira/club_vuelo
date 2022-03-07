import { Card, Button, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const NewsCard = ({ _id, title, description, imgURL }) => {
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img src={imgURL} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/news/${_id}`}>
                        <Button variant="primary">Ver</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default NewsCard