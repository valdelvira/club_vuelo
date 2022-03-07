import { useState, useEffect, useContext } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import uploadService from '../../../services/upload.service'
import { AuthContext } from '../../../context/auth.context'
import { Link, useNavigate, useParams } from 'react-router-dom'
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
        loadProfile()
    }, [])

    const loadProfile = () => {
        newsService
            .getEditNew(id)
            .then(({ data }) => {
                console.log(data)
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
            .then(() => navigate('/news'))
            .catch(err => console.log('Error en actualización de la noticia', err))
    }

    return (
        <Container>
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

                <Button variant="dark" type="submit" style={{ width: '50%' }}>Actualizar datos</Button>
                <Button variant="dark" style={{ width: '50%' }}><Link to='/news' >Volver al listado de noticias</Link></Button>

            </Form>
        </Container>
    )
}
export default EditNew