import { Form, Button } from 'react-bootstrap'
import { useState, useContext } from 'react'
import newsService from '../../../services/news.service'

function CreateNew() {

  const [ newsForm, setNewsForm ] = useState({
        title: '',
        description: '',
        imageUrl: ''
    })
      const handleInputChange = e => {
        
        const { name, value } = e.target
        setNewsForm({ ...newsForm, [name]: value })
    }

    function handleSubmit(e){
        e.preventDefault()
        newsService
            .contact(newsForm)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        //navigate('/')
    }


    return ( 
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" name="title" value={ newsForm.title } onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Descripción</Form.Label>
                <Form.Control  as="textarea" name="description"  style={{ height: '100px' }} value={ newsForm.description } onChange={ handleInputChange } />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Imagen de portada</Form.Label>
                <Form.Control type="file" name='imageUrl' value={ newsForm.imageUrl } onChange={ handleInputChange } />
            </Form.Group>
            <Button variant="dark" type="submit" style={{ width: '100%' }}>Acceder</Button>

        </Form>

     )
}

export default CreateNew