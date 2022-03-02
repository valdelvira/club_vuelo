import { Container } from 'react-bootstrap'
import CreateNew from '../../components/News/CreateNew/CreateNew'
import { useContext } from 'react'
import { AuthContext } from './../../context/auth.context'

const NewsPage = () => {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)


 return (
     <Container>
        <h1>¡¡¡Noticias!!!</h1>
        <CreateNew/>
     </Container>
 )
}

export default NewsPage