import axios from 'axios'

class ProfileService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/user` })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getProfile = id => {
        return this.api.get(`/profile/${id}`)
    }

    getAllProfiles = () => {
        return this.api.get(`/profile`)
    }

    deleteProfile = id => {
        return this.api.delete(`/profile/${id}/delete`)
    }

    editProfile = (id, profileForm) => {
        return this.api.put(`/profile/${id}/edit`, profileForm)
    }


}

const profileService = new ProfileService()
export default profileService