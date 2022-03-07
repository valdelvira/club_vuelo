import { Form, Button } from 'react-bootstrap'
import { useState, useContext } from 'react'
import newsService from '../../../services/news.service'

function CommentForm({newsId, loadNews}) {
  const [ commentForm, setCommentForm ] = useState({
        comment: ''
    })

    const handleInputChange = e => {
        
        const { name, value } = e.target
        setCommentForm({ ...commentForm, [name]: value })
    }

    function handleSubmit(e){
        e.preventDefault()
        newsService
            .postComment(newsId, commentForm)
            .then(res => {
                loadNews()
                setCommentForm({comment:''})
            })
            .catch(err => console.log(err))
    }


    return ( 
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
                <Form.Label>Nuevo comentario</Form.Label>
                <Form.Control  as="textarea" name="comment"  style={{ height: '100px' }} value={ commentForm.comment } onChange={ handleInputChange } />
            </Form.Group>
            <Button variant="dark" type="submit" style={{ width: '50%' }}>Enviar</Button>
        </Form>

     )
}

export default CommentForm