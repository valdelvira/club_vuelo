import { Button, Container, Row } from 'react-bootstrap'
import newsServices from '../../services/news.service'
import { AuthContext } from '../../context/auth.context'
import { useState, useEffect, useContext } from 'react'
import CommentForm  from '../../components/News/CommentForm/CommentForm'
import './NewsDetails.css'
import { Navigate, useParams, Link } from 'react-router-dom'


function NewsDetails() {
    const [theNew, setTheNew] = useState([])
    const { user } = useContext(AuthContext)
    const { _id } = useParams()

    useEffect(() => { loadNews() }, [])

    const deleteTheNews = () => {
        newsServices
            .deleteTheNews(_id)
            .then(() => Navigate('/news'))
            .catch(err => console.log(err))
    }

    const deleteComment = (comment_id) => {
        
        newsServices
            .deleteComment(comment_id, _id)
            .then(() => loadNews() )
            .catch(err => console.log(err))
    }

    const putEditNews = () => {
        newsServices
            .putEditNews(_id)
            .then(() => Navigate('/news'))
            .catch(err => console.log(err))
    }

    const loadNews = () => {
    
        newsServices
            .getTheNew(_id)
            .then(({ data }) => {
                setTheNew(data)})
            .catch(err => console.log(err))
    }
        return (
            <>
                <Container>
                    <img src={theNew.imgURL} alt={theNew.title} />
                    <h1>{theNew.title}</h1>
                
                    <Row>
                        <section>{theNew.description}</section>
                
                        {user?.role === 'ADMIN' && <Link className='btn btn-warning' to={`/news/${theNew._id}/edit`}>Editar</Link>}
                        {user?.role === 'ADMIN' && <Button variant="danger" onClick={deleteTheNews}>Borrar</Button>}
                        <CommentForm newsId={ theNew._id } loadNews={loadNews}/>
                            {
                                theNew.comments?.map(elem => {
                                    return (
                                        <span key={elem._id}>
                                            Escrito por: <q>{elem.owner?.name}</q>
                                            {elem.comment}
                                            { user?.role === 'ADMIN' && <Button variant="danger" onClick = {()=> deleteComment(elem._id) }>Borrar comentario</Button>}
                                        </span>)
                                })
                            }
                    </Row>
                </Container>
            </>
        )
    

}

export default NewsDetails