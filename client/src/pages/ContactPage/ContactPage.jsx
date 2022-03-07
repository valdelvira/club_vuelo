import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from '../../components/ContactForm/ContactForm'
import Map from "../../components/Map/Map"


function ContactPage() {




    const locationSede = {
        address: 'Plaza del Cardenal Cisneros 3, 28040 (Madrid)',
        lat: 40.44121632974322,
        lng: -3.724392058129775,
    }

    const locationAerodromo = {
        address: 'Aeródromo Municipal, Ctra. el Romeral, s/n, 45870 Lillo, Toledo',
        lat: 39.71695537824837,
        lng: -3.3158674423294583,
    }

    return (
        <Container>
            <Row className="justify-content-md-center">

                <h2>¿Dónde estamos?</h2>
                <Col md={6}>
                    <section>
                        Lunes – Viernes
                        Pza. Cardenal Cisneros, 3, 28040 Madrid
                        Nuestro local se encuentra en la Escuela Técnica Superior de Ingeniería Aeroespacial (ETSIAE) de la UPM, Plaza del Cardenal Cisneros 3, 28040 (Madrid).
                        Líneas de metro: 6 (Moncloa, Ciudad Universitaria), y 3 (Moncloa).
                        Líneas EMT: 82, 132, 46, 83, 133, 160, 161, 162, G y U
                        Nos puedes visitar en el local 164 (debajo de cafetería).
                        <Map location={locationSede} zoomLevel={17} />
                    </section>
                </Col>
                <Col md={6}>
                    <section>
                        Fines de semana
                        Aeródromo Municipal, Ctra. el Romeral, s/n, 45870 Lillo, Toledo
                        Sin embargo, nuestros aviones están en el aeródromo de Lillo, Toledo, a una hora aproximadamente desde Madrid. Es aquí donde el club realiza toda su actividad de vuelo y la mayor parte de las tareas de mantenimiento.
                        <Map location={locationAerodromo} zoomLevel={17} />
                    </section>
                </Col>
            </Row>

            <h1>Contacta con nosotros</h1>

            <Row className="justify-content-md-center">
                <Col md={6}>
                    <p>Si tienes cualquier duda, mándanos un e-mail y trataremos de responderte lo antes posible.</p>
                    <ContactForm />
                </Col>
            </Row>

        </Container>
    )
}

export default ContactPage