import { useState, useContext } from "react"
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import eventService from "../../services/event.service"
import { MessageContext } from "../../context/userMessage.context"
import uploadService from "../../services/upload.service"

const EventForm = ({ closeModal, refreshEvents }) => {

    const [EventForm, SetEventForm] = useState({
        title: "",
        description: "",
        imgURL: "",
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        SetEventForm({
            ...EventForm,
            [name]: value
        })
    }

    const navigate = useNavigate()

    const { setMessageInfo, setShowMessage } = useContext(MessageContext)

    const [loadingImage, setLoadingImage] = useState(false)

    const uploadEventImage = e => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                SetEventForm({ ...EventForm, imgURL: data.cloudinary_url })

            })
            .catch(err => console.log(err))
    }

    function handleSubmit(e) {

        e.preventDefault()

        eventService
            .create(EventForm)
            .then(() => {
                navigate('/events')
                refreshEvents()
                closeModal()
                setShowMessage(true)
                setMessageInfo({ title: 'Exito', desc: 'Evento creado correctamente' })

            })
            .catch(err => console.log('Error de creacion de eventos', err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" name="title" value={EventForm.title} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Descipción del evento</Form.Label>
                <Form.Control type="text" name="description" value={EventForm.description} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-4">
                <Form.Label>Foto de evento</Form.Label>
                <Form.Control type="file" name='imgURL' onChange={uploadEventImage} />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }} disabled={loadingImage}>
                {loadingImage ? 'Espere...' : 'Crear evento'}
            </Button>

        </Form>
    )
}
export default EventForm