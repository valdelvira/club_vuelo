import NewsCard from "../../News/NewsCard/NewsCard"
import { Row, Col } from "react-bootstrap"

const NewsIndex = () => {
    return (
        <section>
            <Row>
                <Col md={4}><NewsCard></NewsCard></Col>
                <Col md={4}><NewsCard></NewsCard></Col>
                <Col md={4}><NewsCard></NewsCard></Col>
            </Row>
        </section>
    )
}
export default NewsIndex