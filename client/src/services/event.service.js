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

    getEditEvent = (id) => {
        return this.api.get(`/${id}/edit`)
    }

    editEvent = (id, eventForm) => {
        return this.api.put(`/${id}/edit`, eventForm)
    }

    deleteEvent(id) {
        return this.api.delete(`/${id}/delete`)
    }

    joinEvent(id) {
        return this.api.put(`/${id}/join`)
    }
}

const eventService = new EventService()
export default eventService