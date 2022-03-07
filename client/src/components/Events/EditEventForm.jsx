import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import eventService from "../../services/event.service"
import { Form, Button } from 'react-bootstrap'


const EditEventForm = () => {

    const [eventForm, setEventForm] = useState({
        title: "",
        description: "",
    })

    const { event } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        event && loadEvent()
    }, [event])

    const loadEvent = () => {
        eventService
            .getSingleEvent(event?._id)
            .then(({ data }) => {
                setEventForm(data)
            })
            .cath(err => console.log(err))
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        setEventForm({
            ...eventForm,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        eventService
            .editEvent(event._id, eventForm)
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log("Error en actualización de evento", err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" value={eventForm.title} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" value={eventForm.description} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }}>Actualizar evento</Button>
        </Form >

    )
}
export default EditEventForm