import { Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import profileService from '../../services/profile.service'

const UserCard = ({ _id, name, lastname, email, refreshProfiles, role }) => {

    const deleteProfile = id => {
        profileService
            .deleteProfile(id)
            .then(()=>refreshProfiles())
            .catch(err => console.log(err))
    }

    const changeRole = (id, role) => {
        const uploadData = new FormData()
        uploadData.append('role', role)
        profileService
            .editProfile(id, uploadData)
            .then(() => console.log('done'))
            .catch(err => console.log(err))
    }

    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><Link to={`/profile/${_id}`}>{name }{ lastname }</Link></Card.Title>
                    <Card.Text>
                        { email } <br/>Tipo de usuario: {role}
                    </Card.Text>
                        <Button variant="danger" onClick={() => deleteProfile(_id) }>Eliminar</Button>
                        {
                            role === 'ADMIN' ?
                                <Button variant="warning" onClick={() => changeRole(_id,'USER' ) }>Hacer usuario</Button>
                            :
                                <Button variant="warning" onClick={() => changeRole(_id, 'ADMIN' ) }>Hacer administrador</Button>
                        }
                </Card.Body>
            </Card>
        </Col>
    )
}
export default UserCard