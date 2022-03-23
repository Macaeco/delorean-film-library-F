import Container from "react-bootstrap/esm/Container"
import Carousel from 'react-bootstrap/Carousel'
import imagen1 from "./original (1).jpg"
import imagen2 from "./original (2).jpg"
import imagen3 from "./original (3).jpg"
import imagen4 from "./original (4).jpg"
import imagen5 from "./original (5).jpg"
import imagen6 from "./original (6).jpg"
import imagen7 from "./original (7).jpg"
import imagen8 from "./original (8).jpg"
import imagen9 from "./original (9).jpg"
import imagen10 from "./original (10).jpg"

function Carrusel() {
    return (
        <Container >
            <Carousel className={'mt-5 pt-5 me-5 shadow p-3 mb-5 bg-body rounded'}  >
                <Carousel.Item interval={100000}>
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