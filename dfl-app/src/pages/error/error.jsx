import Container from "react-bootstrap/esm/Container"
import Card from "react-bootstrap/esm/Card"
import Nav from "react-bootstrap/esm/Nav"
import { Link, useNavigate } from "react-router-dom";


import "./error.css"
import logo404 from "./error-404.png"
import logo from "./boleto.png"
import flecha from "./flecha-curva.png"

import gif from "./pulp-fiction-john-travolta.gif"

function Error404() {


    return (

        <Container className=" d-flex flex-row container__404">
            <Card.Img src={gif} className="m-5 rounded mb-0" style={{ width: '40%' }} />
            <Container className="pt-5 mt-5 ms-5 ps-5 ">
                {/* <Card.Img src={logo404} style={{ width: '30%' }} className="mb-3" /> */}
                <h2 className="ms-3" >ERROR 404 NOT FOUND
                </h2>
                <h4 className="ms-4 ps-5">COMPRA UNOS TICKETS PARA VOLVER A HOME</h4>
                <Container className=" d-flex flex-row ">
                    <Nav.Link as={Link} to="/"  ><Card.Img src={logo} className=" rounded mb-0" style={{ width: '30%' }} /></Nav.Link>
                </Container>
            </Container>
        </Container>
    )
}
export default Error404