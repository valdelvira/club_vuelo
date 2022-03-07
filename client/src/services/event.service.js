import axios from 'axios'

class EventService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/events` })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    create(eventForm) {
        return this.api.post('/create', eventForm)
    }

    getEvents = () => {
        return this.api.get('/')
    }

    getSingleEvent = id => {
        return this.api.get(`/${id}`)
    }

    editEvent = (id, eventForm) => {
        return this.api.put(`/${id}/edit`, eventForm)
    }

    deleteEvent(id) {
        return this.api.delete(`/${id}/delete`)
    }
}

const eventService = new EventService()
export default eventService