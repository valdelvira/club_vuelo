import { useContext, useState } from 'react'
import { Card, Container, Button, Row, Col, Image, Modal } from 'react-bootstrap'
import './Profile.css'
import { AuthContext } from '../../context/auth.context'
import EditProfileForm from './EditProfileForm'
import profileService from '../../services/profile.service'

const Profile = ({ imageURL, aboutMe, flightHours, email, refreshProfile }) => {

<<<<<<< HEAD
    const { user } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)

    const [profileUpdate, setProfileUpdate] = useState({})
=======
const Profile = ({ username,imageURL, aboutMe, flightHours, email }) => {
>>>>>>> 3c421e6122dffa8aeb795101a4bf76e73ba5df96

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    return (
        <Container>
            <Row>
                <Col>
                    <Card className='profileCard'>
                        <Card.Body>
                            <Card.Title>{username}</Card.Title>
                            <Card.Text>
                                Email : {email}
                                <br></br>
                                Sobre mí : {aboutMe}
                                <br></br>
                                Horas de vuelo :
                                {flightHours}
                            </Card.Text>
                            <Button variant="warning" onClick={handleModalOpen}>Editar</Button>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Image className='photoProfile' src={imageURL} />
                </Col>
            </Row>
<<<<<<< HEAD
            <Modal show={showModal} onHide={handleModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Editar perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditProfileForm closeModal={handleModalClose} refreshProfile={refreshProfile} />
                </Modal.Body>
            </Modal>
=======
            
            <EditProfileForm />
>>>>>>> 3c421e6122dffa8aeb795101a4bf76e73ba5df96
        </Container>

    )
}

export default Profile