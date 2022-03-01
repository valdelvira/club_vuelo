import axios from 'axios'

class AuthService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/auth`})
    }

    signup(credentials) {
        return this.api.post('/signup', credentials)
    }
}

const authService = new AuthService()
export default authService