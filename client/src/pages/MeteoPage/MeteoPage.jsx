import { Container } from 'react-bootstrap'
import MeteoWindy from '../../components/MeteoWindy/MeteoWindy'
import './MeteoPage.css'

const MeteoPage = () => {
    return (
        <Container>
            <h1>Meteo</h1>
            <h3>AEMET</h3>
            <p>La Agencia Estatal de Meteorología, mediate su servicio <a href="http://ama.aemet.es/">AMA</a> (Autoservicio Meteorológico Aeronáutico), publica información muy útil para cualquier piloto.</p>
            <h3>TopMeteo</h3>
            <p>En <a href='https://vfr.topmeteo.eu/en-gb/'>TopMeteo</a> (inglés) también encontrarás mucha información imprescindible para la práctica de deportes aéreos como el vuelo a vela o el ala delta.</p>
            <h3>Windy</h3>
            <MeteoWindy className="windyAPI" />
        </Container>
    )
}

export default MeteoPage
