import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'
import "./coriosity.css"
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Spinner from 'react-bootstrap/Badge'
import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'
import logo from "./punto.png"
import Modal from 'react-bootstrap/Modal'
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { useTranslation } from "react-i18next";


function Curiosity() {
    const [theme, setTheme, changeTheme, filmsName, setFilmsName, logName, setLogName, access, updateAcces, filmsValue, setFilmsValue] = useContext(themeContext)
    const [t, i18n] = useTranslation('global');
    const [curius, setCurius] = useState()
    const [detailC, setdetailC] = useState('')

    useEffect(() => {
        // fetch('http://localhost:4000/curiosity')
        fetch('https://young-headland-81478.herokuapp.com/curiosity')
            .then(j => j.json())
            .then(data => {

                setCurius(data)
                // console.log(data)


            })

    }, [])

    console.log(curius)
   
    const [show, setShow] = useState(false);
    const handleClick = (e) => {

        setShow(true)
        setdetailC(e)

        console.log(e)
        //  modalDetails(e)

    }

    const modalDetails = (a) => {
        return (
            <Modal show={show} onHide={() => setShow(false)} ClassName="modal-100w " aria-labelledby="example-custom-modal-styling-title">

                <Modal.Body className="d-flex justify-content-center flex-row p-5">
                    <Card.Text className="d-flex justify-content-center">

                        {a.detail}
                    </Card.Text>
                </Modal.Body>
            </Modal>

        )
    }








    return (

        <Col className='pe-5'>
            {modalDetails(detailC)}
            <Container className=" rotule__container d-flex justify-content-center mb-5 ">
                <hr></hr>
                <h1>
                    {/* {t("lists.top10")}   */}
                    <Badge bg={theme.secondary} >{t("trailers.curius")} </Badge>
                </h1>
                <hr></hr>
            </Container>
            <Container className="container__curiosity d-flex  flex-column gap-5 justify-content-center mb-5 p-4">
                {curius ?
                    curius[0].curiosity.map((a, i) => {
                        // console.log(a)
                        return (

                            <div key={i}   >
                                <Container className='d-flex flex-row align-items-center gap-2'>
                                    <Card.Img src={logo} style={{ width: '30px' }} />
                                    <Card.Title >{a.name}</Card.Title>

                                </Container>


                                <Card.Text className="">
                                    {a.data}
                                </Card.Text>
                                <Button variant={theme.secondary} onClick={() => handleClick(a)}>
                                    {t("cards.details")}
                                </Button>


                            </div>
                        )
                    })
                    :
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}
            </Container>
        </Col>
    )
}
export default Curiosity;