import { Container, Col, Row, Image } from "react-bootstrap"
import './AboutUsPage.css'
import photo1 from './images/Flugzeuge-7-1-1.jpeg'



const AboutUsPage = () => {
    return (
        <div className='aboutUs'>
            <Container>
                <Row>
                    <Col>
                        <h1>¿Quiénes somos?</h1>
                        <br />
                        <p>El Akaflieg Madrid está compuesto por un pequeño grupo de cerca de 20 miembros del Club de Vuelo UPM, con pasión por la aviación y la ingeniería.
                            Algunos de estos miembros ya han finalizado la carrera, sin embargo, son un apoyo fundamental para el desarrollo de los distintos proyectos del akaflieg.
                            Cada componente del Akaflieg posee unas habilidades y conocimientos distintos a los de los demás,
                            los cuales emplea para enseñar al resto y usa cómo mejor puede en las distintas tareas que se le encomiendan.</p>
                        <p>Estos miembros cumplen con un compromiso con el club distinto al resto de personas no pertenecientes al Akaflieg, ya que tienen la obligación de completar un
                            mínimo de horas de trabajo semanales en las distintas tareas que se les asignan. Sin embargo, también gozan de una serie de ventajas, como, por ejemplo, volar
                            los aviones del club únicamente abonando el importe del remolque. </p>
                    </Col>
                    <Col>
                        <Image src={photo1} className='imagesAbout' />
                    </Col>
                </Row>
            </Container>
            <p>A parte del desarrollo de los proyectos, también se hacen cargo de la gestión del Club así como del mantenimiento de las aeronaves (lo cual no implica que, si
                un miembro del club no perteneciente al Akaflieg desea ayudar, no pueda hacerlo).
            </p>
            <p>Pertenecer al Akaflieg ofrece a sus miembros unas habilidades muy útiles de cara a su futuro profesional, permitiéndoles enfrentarse a situaciones reales,
                empleando técnicas, herramientas y procedimientos que se emplean fuera de la universidad, así como poniendo a prueba y reforzando los conocimientos adquiridos en clase.
                Es la forma perfecta de formar a los futuros profesionales del mañana.</p>
            <br />


            <h2>¿Cómo me uno a Akaflieg Madrid</h2>
            <p>Antes de nada, debes ser miembro del Club de Vuelo de la UPM. Para apuntarte tienes que rellenar la hoja de inscripción que te entregaremos en el local del Club.</p>
            <p>Para formar parte del Akaflieg Madrid no es necesario poseer ninguna clase de conocimientos especiales ni habilidades. La finalidad última de esta organización es
                conseguir que sus miembros aprendan y apliquen los conocimientos que van adquiriendo a lo largo del desarrollo de los distintos proyectos, por lo que no debe preocuparte
                no tener la experiencia o los conocimientos necesarios.
                <br /><br />
                Lo único que necesitas es una buena actitud y ser capaz de mantener un compromiso constante, estando dispuesto a trabajar y esforzarte por el resto del equipo. También
                debes ser tolerante con los fallos de los demás, buscando siempre aprender de ellos o enseñar a los demás a través de ellos.
                <br /><br />
                Inicialmente, durante el primer semestre desde que entres al Akaflieg, estarás en «periodo de pruebas». En este tiempo intentaremos enseñarte todo lo posible, pero
                no gozarás de los privilegios del resto de miembros del Akaflieg hasta que termine ese periodo. El objetivo es que demuestres tu compromiso y capacidad para trabajar
                «sin esperar nada a cambio».</p>
        </div >

    )
}

export default AboutUsPage