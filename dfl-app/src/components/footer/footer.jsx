import Container from "react-bootstrap/esm/Container";
import instagram from "./instagram.png"
import "./footer.css"
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import {Link} from 'react-router-dom';
import legal from "./icons8-cookies-64.png"
import cookie from "./icons8-documento-48.png"
function Footer() {

    return (
        <Row sticky="botton" >
            <Col className="footer__container d-flex flex-row justify-content-center  ">
                <h6 className="mt-3 me-2 text__footer">Consulta nuestra política de privacidad y política de cookies  : </h6>
                <Link to="/legalPages" ><img src={legal} className="mt-2 me-2"style={{width:'2rem', height:'2rem'}}></img></Link>
                <Link to="/legalPagess"> <img src={cookie} className="mt-2" style={{width:'2rem', height:'2rem'}} /></Link>
            </Col>
        </Row>

    )
}
export default Footer;
