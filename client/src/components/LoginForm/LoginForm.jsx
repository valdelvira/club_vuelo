import { useState, useContext } from "react"
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import authService from "../../services/auth.service"
import { MessageContext } from "../../context/userMessage.context"
import { AuthContext } from './../../context/auth.context'

const LoginForm = ({ closeModal }) => {

    const [LoginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const { setMessageInfo, setShowMessage } = useContext(MessageContext)
    const { storeToken, authenticateUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setLoginForm({
            ...LoginForm,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        authService
            .login(LoginForm)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/')
                closeModal()
                setShowMessage(true)
                setMessageInfo({ title: 'Exito', desc: 'Has iniciado sesión correctamente!' })

            })
            .catch(err => console.log('Error en inicio sesion', err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={LoginForm.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" value={LoginForm.password} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }}>Acceder</Button>

        </Form>
    )
}
export default LoginForm