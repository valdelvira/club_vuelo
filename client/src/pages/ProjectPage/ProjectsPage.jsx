import { Container, Row, Col, Image } from "react-bootstrap"
import raspberryImg from './img/Raspberry.jpeg'
import proj1photo1 from './img/plane1.jpeg'
import proj1photo2 from './img/plane2.jpeg'
import proj1photo3 from './img/plane3.jpeg'
import proj1photo4 from './img/plane4.jpeg'
import proj1photo5 from './img/plane5.jpeg'
import proj1photo6 from './img/plane6.jpeg'
import proj1photo7 from './img/planePart1.jpeg'



const ProjectsPage = () => {
    return (
        <Container>
            <article>
                <h2>Proyecto «Quijote»</h2>
                <h3>MAD-1 «Rocinante»</h3>
                <hr />
                <p>No ha pasado mucho desde la creación de la sección Akaflieg Madrid del Club de Vuelo pero y, sin embargo, tras un año de pruebas con proyectos más sencillos, este año comenzamos un proyecto mucho más grande y ambicioso que los demás: ¡nuestro primer avión! La influencia de otros compañeros de estudios en Alemania en diferentes Akaflieg nos ha inspirado y dado fuerzas e ilusión para intentar comenzar nuestra propia aventura como futuros ingenieros aeroespaciales.</p>

                <p>Así, en colaboración con el RACT (Real AeroClub de Toledo) y la Universidad Politécnica de Madrid, comenzaremos este año a dar los primeros pasos en el diseño de nuestro primer velero, MAD-1 «Rocinante», el que esperamos que pueda servirnos como plataforma para nuevos experimentos y diseños y, por supuesto, para seguir volando.</p>

                <p>Antes de nada, os explicaremos el origen de su nombre. Como muchos pensaréis, se trata de una idea un tanto alocada, tanto que el nombre del modelo, MAD-1, no solo es una abreviatura de “Madrid”, sino que también es un juego de palabaras por su significado en inglés (loco). Por otra parte, su apodo, “Rocinante”, recuerda al personaje literario “Don Quijote”, por ser el caballo que lo llevaba de un lado a otro sobre La Mancha (lugar donde principalmente volamos, por cierto). En resumen, un homenaje a nuestra procedencia y a la personalidad del personaje que, a su manera, también luchaba por sus sueños bajo cualquier circunstancia.</p>

            </article>
            <article>
                <h2>Flight testing platform</h2>
                <p>
                    <Row>
                        <p>Con este proyecto esperamos diseñar un sistema capaz de registrar información sobre la posición de la aeronave y el aire que la rodea. En concreto, intentaremos utilizar estos datos para detectar la presencia de corrientes de aire ascendente, lo que nos permitiría desarrollar algoritmos que prolonguen la autonomía de vehículos aéreos tales como RPAS.</p>
                    </Row>
                    <Row>
                        <Col>
                            <Image Style={`width:300px`} src={raspberryImg}></Image>

                        </Col>
                        <Col>
                            <p>El sistema está compuesto por un módulo central que, empleando una Raspberry Pi 3 model B, coordina y almacena la información de vuelo obtenida mediante una IMU (GY-80) y otros sensores situados en dos pods laterales sobre las alas. Estos pods transmiten los datos obtenidos mediante un emisor BTLE HM-10.</p>
                        </Col>
                    </Row>
                    <Row>
                        <p>
                            Los datos obtenidos serán analizados empleando programas como Matlab, con los que podremos visualizar la trayectoria seguida por el avión gracias a la información que nos proporcione la IMU.
                        </p>
                    </Row>
                </p>
            </article>
            <hr />
            <article>
                <h2>Simulador de vuelo a vela</h2>
                <Row>
                    <Col>
                        25 de julio de 2012 a las 17.30h locales. La aeronave matriculada como EC-GND se dispone a aterrizar por la cabecera 10 del Aeródromo de la Mancha. Cuando se encuentra en el tramo de viento en cola notifica que vuela muy alto y que realizará otro circuito. Tras terminar éste último y estimar que su posición es demasiado baja, aborta el aterrizaje en la pista, tomando fuera de campo, resultando ileso el piloto pero quedando la aeronave muy dañada.
                    </Col>
                    <Col>
                        <Image Style={`width:300px`} src={proj1photo1}></Image>
                    </Col>
                </Row>
            </article>
        </Container>
    )
}
export default ProjectsPage