import axios from 'axios'

class BaseService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/` })
    }

    contact(contactForm) {
        return this.api.post('/contact', contactForm)
    }
}

const baseService = new BaseService()
export default baseService