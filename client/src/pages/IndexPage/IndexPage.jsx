import UserMessage from "../../components/UserMessage/UserMessage"
import { Container, Button, Row, Col, Image } from 'react-bootstrap'
import './IndexPage.css'
import NewsCard from "../../components/News/NewsCard/NewsCard"
import Facebook from "../../components/Facebook/Facebook"
import Twitter from "../../components/Twitter/Twitter"

const IndexPage = () => {

    return (
        <>
            <UserMessage />
            <section className="hero">
                <Row className="d-flex">
                    <Col>
                        <br /><br />
                        <h1>Club de Vuelo UPM Akaflieg Madrid</h1>
                        <p>La primera asociación universitaria en España dedicada a la ingeniería del vuelo a vela</p>
                    </Col>
                </Row>
                <Row className="d-flex">
                    <Col>
                        <Button >
                            Saber más
                        </Button>
                    </Col>
                </Row>
            </section>

            <Container>
                <Row>
                    <Col md={4}><NewsCard /></Col>
                    <Col md={4}><NewsCard /></Col>
                    <Col md={4}><NewsCard /></Col>
                </Row>
                <section>
                    <Row>

                        <h2>Nuestros precios</h2>
                        <p>Cuando salimos a volar, ser miembro de nuestro Akaflieg tiene muchas ventajas.</p>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <h3>Vuelo en K7</h3>
                            <Image src="" style={{ width: 200 + 'px' }}></Image>
                            <p>El primer avión del club fue nuestro planeador "old-school", Alexander Schleicher K7 Rhönadler. Tiene espacio para dos personas, así que si quieres volar acompañado solo te costará 0.20€/min.</p>
                        </Col>
                        <Col md={4}>
                            <h2>Vuelo en SB-5</h2>
                            <Image src="" style={{ width: 200 + 'px' }}></Image>
                            <p>Si por el contrario prefieres volar solo en nuestro avión monoplaza de la Akaflieg Braunschweig, SB-5 Danzig, te costará 0.30€/min.</p>
                        </Col>
                        <Col md={4}>
                            <h2>Remolque en nuestra Pawnee</h2>
                            <Image src="" style={{ width: 200 + 'px' }}></Image>
                            <p>Llegado a este punto te preguntarás cómo vuelan estos aviones si no tienen motor... Para ello necesitamos que otro avión nos remolque y todo esto cuesta 36€ más.</p>
                        </Col>
                    </Row>
                    <Facebook />
                    <Twitter />

                </section>

            </Container>
        </>
    )
}

export default IndexPage