import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HederIndex.css'


const HeaderIndex = () => {
    return (
        <section className="hero">
            <h1>Club de Vuelo UPM Akaflieg Madrid</h1>
            <p>La primera asociación universitaria en España dedicada a la ingeniería del vuelo a vela</p>
            <Button>
                <p>Saber más</p>
            </Button>
        </section>
    )
}
export default HeaderIndex