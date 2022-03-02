import axios from 'axios'

class AuthService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/auth` })
    }

    signup(credentials) {
        return this.api.post('/signup', credentials)
    }

    login(credentials) {
        return this.api.post('/login', credentials)
    }

    verify(token) {
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }
}

const authService = new AuthService()
export default authService