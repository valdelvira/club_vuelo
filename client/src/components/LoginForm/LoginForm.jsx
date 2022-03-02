import { useState, useContext } from "react"
import { Form, Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import authService from "../../services/auth.service"


const LoginForm = () => {

    const [LoginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setLoginForm({
            ...LoginForm,
            [name]: value
        })
    }


    return (
        <Form >
            <Form.Group className="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={LoginForm.email} />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" value={LoginForm.password} />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }}>Acceder</Button>

        </Form>
    )
}
export default LoginForm