import NewsCard from "../../News/NewsCard/NewsCard"
import { Col } from "react-bootstrap"

const NewsList = ({ news }) => {
    return (
        <>{
            news.map(theNew => {
                return <Col md={4} key={theNew._id}> <NewsCard {...theNew} /> </Col>
            })
        }
        </>
    )
}

export default NewsList