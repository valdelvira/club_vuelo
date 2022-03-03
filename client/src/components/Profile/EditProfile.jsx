import { useState, useEffect, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import profileService from '../../services/profile.service'
import { AuthContext } from '../../context/auth.context'



const EditProfile = () => {

    const [profile, setProfile] = useState([])
    const { user, isLoading } = useContext(AuthContext)


    useEffect(() => {
        user && loadProfile()
    }, [user])

    const loadProfile = () => {
        profileService
            .getProfile(user?._id)
            .then(({ data }) => console.log(data))
            .catch(err => console.log(err))
    }
    return (
        <Form >

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Horas de vuelo</Form.Label>
                <Form.Control type="text" name="flightHours" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Sobre mí</Form.Label>
                <Form.Control as="textarea" rows={4} type="text" name="aboutMe" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Foto de perfil</Form.Label>
                <Form.Control type="file" name='imageUrl' />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }}>Actualizar datos</Button>

        </Form>
    )
}
export default EditProfile