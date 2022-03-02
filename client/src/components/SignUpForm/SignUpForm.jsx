import { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import authService from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'
import { MessageContext } from '../../context/userMessage.context'
import './SignUpForm.css'
import uploadService from '../../services/upload.service'

const SignUpForm = () => {

    const [signUpForm, setSignUpForm] = useState({
        username: "",
        name: "",
        lastName: "",
        nif: "",
        flightHours: "",
        aboutMe: "",
        password: "",
        email: "",
        imageURL: "",
        birth: ""
    })

    const { setMessageInfo, setShowMessage } = useContext(MessageContext)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setSignUpForm({
            ...signUpForm,
            [name]: value
        })
    }

    const uploadProfileImage = e => {

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setSignUpForm({ ...signUpForm, imageURL: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    function handleSubmit(e) {

        e.preventDefault()

        authService
            .signup(signUpForm)
            .then(() => {
                navigate('/')
                setShowMessage(true)
                setMessageInfo({ title: 'Exito', desc: 'Te has registrado correctamente!' })
            })
            .catch(err => console.log('Error en registro', err))
    }

    return (
        <div className="signform">
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
                    <Form.Control type="file" name='imageUrl' onChange={uploadProfileImage} />
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

export default SignUpForm