import { Button, Container, Row } from 'react-bootstrap'
import newsServices from '../../services/news.service'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import CommentForm  from '../../components/News/CommentForm/CommentForm'
import './NewsDetails.css'

function NewsDetails() {
    const  [ theNew, setTheNew ] = useState([])
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
    const {_id } = useParams()

    useEffect(() => { loadNews() }, [])
 
    const deleteTheNews = () => {
        newsServices
            .deleteTheNews(_id)
            .then(() => Navigate('/news') )
            .catch(err => console.log(err))
    }
 
    const deleteComment = () => {
        newsServices
            .deleteComment(_id)
            .then(() => loadNews() )
            .catch(err => console.log(err))
    }

    const loadNews = () => {
      
        newsServices
            .getTheNew(_id)
            .then(({data}) => setTheNew(data))
            .catch(err => console.log(err))
    }
    return ( 
        <>
        <Container>
                <img src={theNew.imgURL} alt={theNew.title}/>
                <h1>{theNew.title}</h1>
            
                <Row>
                    <section>{theNew.description}</section>
                {
                    theNew.comments?.map(elem => {
                    
                        return (
                        <p className='comment' key={ elem._id }> 
                    
                            { elem.comment }
                            { user?.role === 'ADMIN' && <Button variant="danger" onClick = { deleteComment }>Borrar comentario</Button>}
                        </p>)
                    })

                }
              
                <CommentForm newsId={ theNew._id } loadNews={loadNews}/>
                { user?.role === 'ADMIN' && <Button variant="danger" onClick={deleteTheNews}>Borrar noticia</Button>}
{/* <Button variant="warning" onClick={deleteTheNews}>Borrar</Button> */}
                </Row>
        </Container>
        </>
     )
}

export default NewsDetails