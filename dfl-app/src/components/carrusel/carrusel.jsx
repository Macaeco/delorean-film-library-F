import Container from "react-bootstrap/esm/Container"
import Carousel from 'react-bootstrap/Carousel'
import "./carrousel.css"
import imagen1 from "../carrusel/posters/original (1).jpg"
import imagen2 from "../carrusel/posters/original (2).jpg"
import imagen3 from "../carrusel/posters/original (3).jpg"
import imagen4 from "../carrusel/posters/original (4).jpg"
import imagen5 from "../carrusel/posters/original (5).jpg"
import imagen6 from "../carrusel/posters/original (6).jpg"
import imagen7 from "../carrusel/posters/original (7).jpg"
import imagen8 from "../carrusel/posters/original (8).jpg"
import imagen9 from "../carrusel/posters/original (9).jpg"
import imagen10 from "../carrusel/posters/original (10).jpg"

function Carrusel() {
    return (
        <Container className="pt-4" >
            <Carousel className={'mt-5 pt-3 me-5 shadow p-3 mb-5 bg-body rounded'} id="carrousel_container">
                <Carousel.Item interval={100000} >
                    <img
                        className="d-block w-100"
                        src={imagen1}
                        alt="First "
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={imagen2}
                        alt="Second "
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen3}
                        alt="Third "
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen4}
                        alt="Third "
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen5}
                        alt="Third "
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen6}
                        alt="Third "
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen7}
                        alt="Third "
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen8}
                        alt="Third "
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen9}
                        alt="Third "
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen10}
                        alt="Third "
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>

    )
}
export default Carrusel