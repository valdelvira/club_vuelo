import { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import uploadService from '../../../services/upload.service'
import { useNavigate, useParams } from 'react-router-dom'
import newsService from '../../../services/news.service'




const EditNew = () => {

    const [newForm, setNewForm] = useState({
        title: "",
        imgURL: "",
        description: ""
    })

    const navigate = useNavigate()
    const { id } = useParams()



    useEffect(() => {
        loadNews()
    }, [])

    const loadNews = () => {
        newsService
            .getEditNew(id)
            .then(({ data }) => {
                setNewForm(data)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        setNewForm({
            ...newForm,
            [name]: value
        })
    }

    const uploadNewImage = e => {

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setNewForm({ ...newForm, imgURL: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    function handleSubmit(e) {

        e.preventDefault()

        newsService
            .putEditNews(id, newForm)
            .then(() => {
                console.log(newForm)
                navigate('/')

            })
            .catch(err => console.log('Error en actualización de la noticia', err))
    }


    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" name="title" value={newForm?.title} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" name="description" value={newForm?.description} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Foto de la noticia</Form.Label>
                <Form.Control type="file" name='imgURL' onChange={uploadNewImage} />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }}>Actualizar datos</Button>

        </Form>
    )
}
export default EditNew