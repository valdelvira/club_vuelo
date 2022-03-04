import axios from 'axios'

class NewsService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/news` })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    contact(createNewForm) {
        return this.api.post('/create', createNewForm)
    }

    getAllNews() {
        return this.api.get('/')
    }

    getTheNew(id) {
        return this.api.get(`/${id}`)
    }

    deleteTheNews(id) {
        return this.api.delete(`/${id}/delete`)
    }

}

const newsService = new NewsService()
export default newsService