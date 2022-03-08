import { Container, Modal, Row } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'
import { useState, useEffect, useContext } from 'react'
import profileService from '../../services/profile.service'
import UsersList from './../../components/UsersList/UsersList'
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner'

function UserListPage() {
    const [usersList, setUserList] = useState([])
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
    useEffect(() => { loadUserList() }, [])

    const loadUserList = () => {

        profileService
            .getAllProfiles()
            .then(({ data }) => setUserList(data))
            .catch(err => console.log(err))
    }
    return (
        <>
            <Container>
                <h1>Gestión de usuarios</h1>
                <Row>
                    { !usersList.length ? <LoadingSpinner /> : <UsersList usersList={usersList} refreshProfiles={loadUserList}/>}
                </Row>
            </Container>
        </>
    )
}

export default UserListPage