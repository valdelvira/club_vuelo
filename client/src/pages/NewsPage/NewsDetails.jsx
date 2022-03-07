import { Button, Container, Row } from 'react-bootstrap'
import newsServices from '../../services/news.service'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { useState, useEffect } from 'react'
import { Navigate, useParams, Link } from 'react-router-dom'
import EditNew from '../../components/News/EditNew/EditNew'


function NewsDetails() {
    const [theNew, setTheNew] = useState([])
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
    const { _id } = useParams()

    useEffect(() => { loadNews() }, [])

    const deleteTheNews = () => {
        newsServices
            .deleteTheNews(_id)
            .then(() => Navigate('/news'))
            .catch(err => console.log(err))
    }

    // const deleteComment = () => {
    //     newsServices
    //         .deleteTheNews(_id)
    //         .then(() =>  nav)
    //         .catch(err => console.log(err))
    // }

    const putEditNews = () => {
        newsServices

            .putEditNews(_id)
            .then(() => Navigate('/news'))
            .catch(err => console.log(err))
    }


    const loadNews = () => {
        newsServices
            .getTheNew(_id)
            .then(({ data }) => setTheNew(data))
            .catch(err => console.log(err))
    }
    return (
        <>
            <Container>
                <img src={theNew.imgURL} alt={theNew.title} />
                <h1>{theNew.title}</h1>
                <Row>
                    <section>{theNew.description}</section>
                    {
                        theNew.comments?.map(elem => {
                            return (
                                <span key={elem.comment._id}>
                                    {elem.comment}
                                    {/* { user?.role === 'ADMIN' && <Button variant="warning" onClick = { deleteComment }>Borrar</Button>} */}
                                </span>)
                        })

                    }
                    {user?.role === 'ADMIN' && <Link className='btn btn-warning' to={`/news/${theNew._id}/edit`}>Editar</Link>}
                    {user?.role === 'ADMIN' && <Button variant="danger" onClick={deleteTheNews}>Borrar</Button>}

                </Row>
            </Container>
        </>
    )
}

export default NewsDetails