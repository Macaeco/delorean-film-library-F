import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import "./validate.css"
import logo from "./icons8-carrete-de-película-50.png"
import Card from "react-bootstrap/esm/Card"



function Validate() {
    const [theme, setTheme, changeTheme, filmsName, setFilmsName, logName, setLogName, access, updateAcces, filmsValue, setFilmsValue] = useContext(themeContext)
    const [queryParams] = useSearchParams();
    const param = queryParams.get('token')
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`http://localhost:4000/auth/validate?token=${param}`)
            .then(d => d.json())
            .then(data => console.log(data))

    }, []);
    const handleValidate = () => {
        navigate('/login')

    }


    return (
        <Col className=" container__validity  d-flex flex-column justify-content-center align-items-center gap-5">
            <Card.Img src={logo} style={{ width: '6rem' }} />
            <Row className="d-flex flex-column justify-content-center align-items-center gap-5">
                <h3>Bienvenido a Delorean Film-Library!  Para acceder a nuestro contenido restringido por favor:</h3>
                <Button variant={theme.secondary} style={{ width: '15rem' }} 
                    onClick={handleValidate}
                > <h4>inicia sesión</h4></Button>
            </Row>
        </Col>)



}

export default Validate;