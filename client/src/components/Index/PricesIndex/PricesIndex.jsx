import { Row, Col, Image } from 'react-bootstrap'



const PricesIndex = () => {
    return (
        <>
            <Row>

                <h2>Nuestros precios</h2>
                <p>Cuando salimos a volar, ser miembro de nuestro Akaflieg tiene muchas ventajas.</p>
            </Row>
            <Row>
                <Col md={4}>
                    <h3>Vuelo en K7</h3>
                    <Image src="./../../img/K7.jpeg" style={{width:200+'px'}}></Image>
                    <p>El primer avión del club fue nuestro planeador "old-school", Alexander Schleicher K7 Rhönadler. Tiene espacio para dos personas, así que si quieres volar acompañado solo te costará 0.20€/min.</p>
                </Col>
                <Col md={4}>
                    <h2>Vuelo en SB-5</h2>
                    <Image src="./../../img/K7.jpeg" style={{width:200+'px'}}></Image>
                    <p>Si por el contrario prefieres volar solo en nuestro avión monoplaza de la Akaflieg Braunschweig, SB-5 Danzig, te costará 0.30€/min.</p>
                </Col>
                <Col md={4}>
                    <h2>Remolque en nuestra Pawnee</h2>
                    <Image src="./../../img/K7.jpeg" style={{width:200+'px'}}></Image>
                    <p>Llegado a este punto te preguntarás cómo vuelan estos aviones si no tienen motor... Para ello necesitamos que otro avión nos remolque y todo esto cuesta 36€ más.</p>
                </Col>
            </Row>
        </>

    )
}
export default PricesIndex