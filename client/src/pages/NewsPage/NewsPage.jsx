import { Container, Modal, Row } from 'react-bootstrap'
import CreateNew from '../../components/News/CreateNew/CreateNew'
import newsServices from '../../services/news.service'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { useState, useEffect } from 'react'
import NewsList from '../../components/News/NewsList/NewsList'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner' 

function ListNews() {
    const [news, setNews] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => { loadNews() }, [])

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    const loadNews = () => {

        newsServices
            .getAllNews()
            .then(({ data }) => setNews(data))
            .catch(err => console.log(err))
    }
    return (
        <>
            <Container>
                <h1>Noticias {
                    isLoggedIn && <span onClick={handleModalOpen}>+ Crear noticia</span>
                }</h1>
                <Row>
                    { !news.length ? <LoadingSpinner /> : <NewsList news={news} />}
                </Row>
            </Container>
            <Modal show={showModal} onHide={handleModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Crear noticia</Modal.Title>
                </Modal.Header >
                <Modal.Body>
                    <CreateNew />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ListNews