import { useContext } from 'react'
import { Card, Container, Button, Row, Col, Image } from 'react-bootstrap'
import './Profile.css'
import { AuthContext } from '../../context/auth.context'
import EditProfileForm from './EditProfileForm'



const Profile = ({ imageURL, aboutMe, flightHours, email }) => {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <Row>
                <Col>
                    <Card className='profileCard'>
                        <Card.Body>
                            <Card.Title>{user?.username}</Card.Title>
                            <Card.Text>
                                Email : {email}
                                <br></br>
                                Sobre mí : {aboutMe}
                                <br></br>
                                Horas de vuelo :
                                {flightHours}
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
            <Button>Editar Perfil</Button>
            <EditProfileForm />
        </Container>

    )
}

export default Profile