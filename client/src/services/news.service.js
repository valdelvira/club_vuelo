import axios from 'axios'

class NewsService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/news` })
    }

    contact(createNewForm) {
        return this.api.post('/create', createNewForm)
    }

    getAllNews() {
        return this.api.get('/')
    }
}

const newsService = new NewsService()
export default newsService