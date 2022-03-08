import { useContext, useState } from 'react'
import { Card, Container, Button, Row, Col, Image, Modal } from 'react-bootstrap'
import './Profile.css'
import { AuthContext } from '../../context/auth.context'
import EditProfileForm from './EditProfileForm'

const Profile = ({ username, imageURL, aboutMe, flightHours, email, refreshProfile }) => {

    const { user } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)

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
            <Modal show={showModal} onHide={handleModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Editar perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditProfileForm closeModal={handleModalClose} refreshProfile={refreshProfile} />
                </Modal.Body>
            </Modal>
        </Container>

    )
}

export default Profile