import { useContext, useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import Profile from "../../components/Profile/Profile"
import { AuthContext } from "../../context/auth.context"
import profileService from '../../services/profile.service'


const ProfilePage = () => {

    const [profile, setProfile] = useState([])
    const { user, isLoading } = useContext(AuthContext)

    useEffect(() => {
        user && loadProfile()
    }, [user])

    const loadProfile = () => {
        profileService
            .getProfile(user?._id)
            .then(({ data }) => setProfile(data))
            .catch(err => console.log(err))
    }


    return (
        <Container>
            Bienvenido al perfil de {user?.username}  <Profile {...profile} refreshProfile={loadProfile} />
        </Container>
    )
}

export default ProfilePage