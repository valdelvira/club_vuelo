import { useContext } from 'react'
import { Card, Container, Button, Row, Col, Image } from 'react-bootstrap'
import './Profile.css'
import { AuthContext } from '../../context/auth.context'
import EditProfile from './EditProfile'



const Profile = ({ username, imageURL, aboutMe, flightHours, email }) => {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <Row>
                <Col>
                    <Card className='profileCard'>
                        <Card.Body>
                            <Card.Title>{user?.username}</Card.Title>
                            <Card.Text>
                                <p>{user?.email}</p>
                                <h5>Sobre mí</h5>
                                <p>{aboutMe}</p>
                                <h5>Horas de vuelo</h5>
                                <p>{flightHours}</p>
                            </Card.Text>
                            <Button variant="warning">Editar</Button>
                            <Button variant="danger">Borrar</Button>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Image className='photoProfile' src={imageURL} />
                </Col>
            </Row>
            <EditProfile />
        </Container>

    )
}

export default Profile