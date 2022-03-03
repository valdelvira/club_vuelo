import axios from 'axios'

class ProfileService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/user` })
    }

    getProfile = id => {
        return this.api.get(`/profile/${id}`)
    }
}

const profileService = new ProfileService()
export default profileService