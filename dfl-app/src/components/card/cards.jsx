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
    let filmSearch = 'matrix'
    let [filmsName, setFilmsName] = useState([])
    const [t, i18n] = useTranslation('global');
    const [theme, setTheme, changeTheme, logName, setLogName, access, updateAcces, filmsValue, setFilmsValue] = useContext(themeContext)

    const [searchParams] =useSearchParams(); 
    const f= searchParams.get('name')
    console.log(f)

    // setInterval(function(){console.log(filmsValue)  }, 9000)
    
        console.log(filmsValue)



        // useEffect(() => {
        //     // fetch(`https://mdblist.p.rapidapi.com/?s=${filmsValue}`, {
        //         fetch(`https://mdblist.p.rapidapi.com/?s=${filmSearch}`, {

        //         "method": "GET",
        //         "headers": {
        //             "x-rapidapi-host": "mdblist.p.rapidapi.com",
        //            
        //         }
        //     })
        //         .then(response => response.json())
        //         .then(data => {
        //             // console.log(data)
        //             if (data.search.length !== 0) {
        //                 const arrayID = data.search.map(a => a.id);
        //                 arrayID.map(a => {
        //                     fetch(`https://mdblist.p.rapidapi.com/?i=${a}`, {
        //                         // fetch('https://mdblist.p.rapidapi.com/?i=tt0073195', {
        //                         "method": "GET",
        //                         "headers": {
        //                             "x-rapidapi-host": "mdblist.p.rapidapi.com",
        //                            
        //                         }
        //                     })
        //                         .then(response => response.json())
        //                         .then(data => {
        //                             // console.log(data) 
        //                             setFilmsName((filmsName) => [...filmsName, data])
        //                             console.log(data)

        //                         })
        //                         .catch(err => {
        //                             console.error(err);
        //                         });
        //                 })
        //             }
        //             // console.log(data.search)
        //         })
        //         .catch(err => {
        //             console.error(err);
        //         });
        // }, [])
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
                                            <Card.Text className="d-flex justify-content-center">
                                                {a.year}
                                            </Card.Text>
                                            <Card.Text className="d-flex justify-content-center">
                                                {a.idescription}
                                            </Card.Text>
{/* BOTON MODAL */}
                                            <Button variant={theme.primary} onClick={() => setShow(true)}>
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
                                                            {a.year}
                                                        </Card.Text>
                                                        <Card.Text className="d-flex justify-content-center">
                                                            {a.description}
                                                        </Card.Text>
                                                        <Card.Text className="d-flex justify-content-center">
                                                            {a.country}
                                                        </Card.Text>
                                                      
                                                        <link rel="stylesheet" href={a.trailer} />
                                                        <Container>
                                                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                                                <Form.Control as="textarea"  placeholder={t("cards.comment")}style={{ height: '100px' }}  />                                                                                                                                                                                                              
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