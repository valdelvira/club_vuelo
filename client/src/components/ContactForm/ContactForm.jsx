import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

function ContactForm() {
    const [ email, message ] = useState({
        email: '',
        message: ''
    })
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        navigate('/')
    }


    return ( 
        <Form onSubmit={handleSubmit}>
            <Form.Group  className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={contactForm.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control type="text" name="message" value={ contactForm.message} onChange={handleInputChange} />
            </Form.Group>
            <Button type="submit"  style={{ width: '100%' }}>Enviar</Button>

        </Form>
     )
}

export default ContactForm