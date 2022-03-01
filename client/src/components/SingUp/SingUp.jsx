import { useState, useContext } from 'react'
import { Form, Button, Row } from 'react-bootstrap'
import authService from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {

    const [signUpForm, setSignUpForm] = useState({
        username: "",
        name: "",
        lastName: "",
        nif: "",
        flightHours: "",
        aboutMe: "",
        password: "",
        email: "",
        imageUrl: "",
        birth: ""
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const {name, value} = e.target
        setSignUpForm({
            ...signUpForm,
            [name] : value
        })
    }

    function handleSubmit(e) {
        
        e.preventDefault()

        authService
            .signup(signUpForm)
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log('Cuidadín', err))
    }

    return (
        <div className="prueba">
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="text" name="username" value={signUpForm.username} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={signUpForm.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" value={signUpForm.password} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="name" value={signUpForm.name} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" name="lastName" value={signUpForm.lastName} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>NIF</Form.Label>
                <Form.Control type="text" name="nif" value={signUpForm.nif} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Horas de vuelo</Form.Label>
                <Form.Control type="text" name="flightHours" value={signUpForm.flightHours} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Sobre mí</Form.Label>
                <Form.Control as="textarea" rows={4} type="text" name="aboutMe" value={signUpForm.aboutMe} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Foto de perfil</Form.Label>
                <Form.Control type="file" name='imageUrl' value={signUpForm.imageUrl} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control type="date" name="birth" value={signUpForm.birth} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }}>Acceder</Button>

        </Form>
        </div>
    )
}

export default SignUp