import axios from 'axios'

class BaseService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/` })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    contact(contactForm) {
        return this.api.post('/contact', contactForm)
    }
}

const baseService = new BaseService()
export default baseService