import { Card, Button, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const NewsCard = ({ _id, title, description, imgURL }) => {
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img src={imgURL} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={{ height: 100 }}>
                        {description?.substring(0, 200)}
                    </Card.Text>
                    <Link to={`/news/${_id}`}>
                        <Button variant="primary">Leer más</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default NewsCard