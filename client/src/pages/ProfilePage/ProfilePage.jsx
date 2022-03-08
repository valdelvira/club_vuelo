import { useContext, useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Profile from "../../components/Profile/Profile"
import { AuthContext } from "../../context/auth.context"
import profileService from '../../services/profile.service'


const ProfilePage = () => {

    const [profile, setProfile] = useState([])
    const { user, isLoading } = useContext(AuthContext)
    const { user_id } = useParams()

    useEffect(() => {
        user && loadProfile()
    }, [user])

    const loadProfile = () => {
        profileService
            .getProfile(user_id)
            .then(({ data }) => setProfile(data))
            .catch(err => console.log(err))
    }


    return (
        <Container>
            Bienvenido al perfil de {profile.username}  <Profile {...profile} refreshProfile={loadProfile} />
        </Container>
    )
}

export default ProfilePage