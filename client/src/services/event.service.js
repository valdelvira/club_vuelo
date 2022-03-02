import axios from 'axios'

class EventService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/events` })
    }

    create(eventForm) {
        return this.api.post('/create', eventForm)
    }

    getEvents = () => {
        return this.api.get('/')
    }
}

const eventService = new EventService()
export default eventService