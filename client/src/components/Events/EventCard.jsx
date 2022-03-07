import { Card, Button, Col, Modal } from "react-bootstrap"
import { useState, useContext, useEffect } from "react"
import '../../pages/EventsPage/EventsPage.css'
import eventService from "../../services/event.service"
import { AuthContext } from "../../context/auth.context"
import { Navigate, Link } from 'react-router-dom'


const EventCard = ({ title, description, imgURL, participants, _id, refreshEvents }) => {

    const [showModal, setShowModal] = useState(false)
    const [event, setEvent] = useState([])

    const { isLoggedIn, user } = useContext(AuthContext)

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)


    const deleteEvent = () => {
        eventService
            .deleteEvent(_id)
            .then(() => {
                handleModalClose()
                refreshEvents()
            })
            .catch(err => console.log(err))
    }

    const joinEvent = () => {
        eventService
            .joinEvent(_id)
            .then(() => {
                handleModalClose()
                refreshEvents()
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <Col>
                <Card className='EventCard' style={{ width: '18rem' }}>
                    <Card.Img src={imgURL} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button variant="primary" onClick={handleModalOpen}>Detalles</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Modal show={showModal} onHide={handleModalClose} size="lg" >

                <Modal.Title>Detalles del evento</Modal.Title>

                <Modal.Body>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img src={imgURL} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                                <p>Listado de participantes</p>
                                {
                                    participants.map(elem => {
                                        return (<>
                                            <p key={elem.username}>{elem.username}</p>
                                            <Button variant="primary" onClick={joinEvent} key={elem.username}>Borrar participante </Button>
                                        </>)
                                    })
                                }
                            </Card.Text>



                            {user?.role === 'ADMIN' && <Button variant="warning" onClick={deleteEvent}>Borrar</Button>}


                            <Button variant="primary" onClick={joinEvent}>Unirse </Button>


                            <Link to={`/events/${_id}/edit`}>
                                <Button variant="warning">Editar </Button>
                            </Link>
                        </Card.Body >
                    </Card >
                </Modal.Body >

            </Modal >
        </>
    )
}
export default EventCard