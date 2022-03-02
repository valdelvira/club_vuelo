import HeaderIndex from "../../components/Index/HeaderIndex/HeaderIndex"
import NewsIndex from "../../components/Index/NewsIndex/NewsIndex"
import PricesIndex from "../../components/Index/PricesIndex/PricesIndex"
import UserMessage from "../../components/UserMessage/UserMessage"
import { Container } from 'react-bootstrap'
import ContactPage from "../ContactPage/ContactPage"


const IndexPage = () => {


    return (

        <Container>
            <UserMessage />
            <HeaderIndex />
            <NewsIndex />
            <PricesIndex />
            <ContactPage/>
        </Container>
    )
}

export default IndexPage