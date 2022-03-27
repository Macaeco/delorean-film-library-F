import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useEffect, useState, useContext } from "react";
import Spinner from 'react-bootstrap/Spinner'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import { useTranslation } from "react-i18next";
import React from 'react';
import "./cards.css";
import { themeContext } from "../../context/themeContext";
import { useSearchParams } from "react-router-dom";

// y si me hago la parte del if en una funcion?? guardo el segundo fetch en una constante  y hago asincrona la funcion con el await

function Cards() {
    // let filmSearch = 'matrix'
    let [filmsName, setFilmsName] = useState([])
    const [t, i18n] = useTranslation('global');
    const [theme, setTheme, changeTheme, logName, setLogName, access, updateAcces, filmsValue, setFilmsValue] = useContext(themeContext)
    const [arrayID, setArrayID] = useState('')
    const [searchParams] = useSearchParams();
    const filmSearch = searchParams.get('name')
    // const filmSearch = 'canino'
    console.log(filmSearch)
    const [id, setID] = useState([])


    // setInterval(function(){console.log(filmsValue)  }, 9000)

    // console.log(filmsValue)
    // /?s=el%20se%C3%B1or%20de%20los%20anillos'



    // useEffect(() => {
    //     const fethMovies = async () => {
    //         try {
    //             const res = await fetch(`https://mdblist.p.rapidapi.com/?s=${filmSearch}`, {
    //                 "method": "GET",
    //                 "headers": {
    //                     "x-rapidapi-host": "mdblist.p.rapidapi.com",
    //                     'X-RapidAPI-Key': 'b81875d2cfmshebf4a27a4079fc3p1e2d91jsn52b81f728620'
    //                 }
    //             })
    //             const dat = await res.json()
    //             if (dat.search.length !== 0) {
    //                 console.log(dat.search)
    //                 const idarray = dat.search.map(a => a.id)
    //                 console.log(idarray)
    //                 function chunk(items, size) {
    //                     const chunks = []
    //                     items = [].concat(...items)

    //                     while (items.length) {
    //                         chunks.push(
    //                             items.splice(0, size)
    //                         )
    //                     }
    //                     return chunks
    //                 }
    //                 const arraychuck = chunk(idarray, 3)
    //                 console.log(arraychuck)
    //                 setFilmsName('')
    //                 arraychuck.map(a => {
    //                     a.map(
    //                         a => {
    //                             setTimeout(() => {
    //                                 const fetchMov2 = async () => {
    //                                     try {
    //                                         const res = await fetch(`https://mdblist.p.rapidapi.com/?i=${a}`, {
    //                                             "method": "GET",
    //                                             "headers": {
    //                                                 "x-rapidapi-host": "mdblist.p.rapidapi.com",
    //                                                 'X-RapidAPI-Key': 'b81875d2cfmshebf4a27a4079fc3p1e2d91jsn52b81f728620'
    //                                             }
    //                                         })
    //                                         const dat = await res.json()
    //                                         setFilmsName((filmsName) => [...filmsName, dat])
    //                                         console.log(dat)
    //                                     } catch (err) {
    //                                         console.log(err)
    //                                     }
    //                                 }
    //                                 fetchMov2()
    //                             }, 1500)
    //                         }
    //                     )
    //                 })
    //             }
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fethMovies()
    // }, [filmSearch])
    console.log(filmsName)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (


        <Container >
            {filmsName.length !== 0 ?
                filmsName.map((a, i) => {
                    return (
                        <Row xs={1} md={1} className="g-4 mt-5">
                            <Col key={i} >
                                <Card style={{ width: '500px', height: '400px bg-' }} className="shadow p-3 mb-5 bg-body rounded ">
                                    <Card.Img variant="top" src={a.poster} />
                                    <Card.Body className="d-flex justify-content-center  flex-column" >
                                        <Card.Title className="d-flex justify-content-center">{a.title}</Card.Title>
                                        {/* <Card.Text className="d-flex justify-content-center">
                                            {a.year}
                                        </Card.Text> */}
                                        <Card.Text className="d-flex justify-content-center">
                                            {a.idescription}
                                        </Card.Text>
                                        {/* BOTON MODAL */}
                                        <Button variant={theme.secondary} onClick={() => setShow(true)}>
                                            {t("cards.details")}
                                        </Button>
                                        {/* MOOOOOODAAAL */}
                                        <Modal show={show} onHide={() => setShow(false)} id="modal__idFull" ClassName="modal-100w " aria-labelledby="example-custom-modal-styling-title">
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-custom-modal-styling-title">

                                                    {a.title}
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="d-flex justify-content-center flex-row">
                                                <Container > <Card.Img variant="top" src={a.poster} /> </Container>
                                                <Container>
                                                    <Card.Text className="d-flex justify-content-center">
                                                        {t("cards.year")}:
                                                        <br></br>
                                                        {a.year}
                                                    </Card.Text>
                                                    <hr></hr>
                                                    <Card.Text className="d-flex justify-content-center">
                                                        {t("cards.sinopsis")}:
                                                        <br></br>
                                                        {a.description}
                                                    </Card.Text>
                                                    <hr></hr>
                                                    <Card.Text className="d-flex justify-content-center">
                                                        {t("cards.country")}:
                                                        <br></br>
                                                        {a.country}
                                                    </Card.Text>
                                                    <hr></hr>
                                                    <Container>
                                                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                                            <Form.Control as="textarea" placeholder={t("cards.comment")} style={{ height: '100px' }} />
                                                            <Button variant={theme.secondary} style={{ width: '12vh', height: '4vh' }} className=" mt-1 d-flex flex-row-reverse">
                                                                {t("cards.commented")}
                                                            </Button>
                                                        </FloatingLabel>
                                                    </Container>
                                                </Container>
                                            </Modal.Body>
                                        </Modal>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )
                })
                :
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
        </Container>

    )
}
export default Cards;