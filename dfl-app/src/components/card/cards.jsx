import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useTranslation } from "react-i18next";
import React from 'react';

// y si me hago la parte del if en una funcion?? guardo el segundo fetch en una constante  y hago asincrona la funcion con el await

function Cards() {
    let filmSearch = 'langosta'
    let [filmsName, setFilmsName] = useState([])
    const [t, i18n] = useTranslation('global');

    useEffect(() => {
        fetch(`https://mdblist.p.rapidapi.com/?s=${filmSearch}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mdblist.p.rapidapi.com",
                
            }
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                if (data.search.length !== 0) {
                    const arrayID = data.search.map(a => a.id);
                    arrayID.map(a => {
                        // fetch(`https://mdblist.p.rapidapi.com/?i=${a}`, {
                        fetch('https://mdblist.p.rapidapi.com/?i=tt0073195', {
                            "method": "GET",
                            "headers": {
                                "x-rapidapi-host": "mdblist.p.rapidapi.com",
                                
                            }
                        })
                            .then(response => response.json())
                            .then(data => {
                                // console.log(data) 
                                setFilmsName((filmsName) => [...filmsName, data])
                                console.log(data)

                            })
                            .catch(err => {
                                console.error(err);
                            });
                    })
                }
                // console.log(data.search)
            })
            .catch(err => {
                console.error(err);
            });
    }, [])
    console.log(filmsName)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (

        <>
            <Container >
                {filmsName.length !== 0 ?
                    filmsName.map((a, i) => {
                        return (<Row xs={1} md={1} className="g-4 mt-5">
                            <Col key={i} >
                                <Card style={{ width: '500px', height: '400px bg-' }} className="shadow p-3 mb-5 bg-body rounded ">
                                    <Card.Img variant="top" src={a.poster} />
                                    <Card.Body className="d-flex justify-content-center  flex-column" >
                                        <Card.Title className="d-flex justify-content-center">{a.title}</Card.Title>
                                        <Card.Text className="d-flex justify-content-center">
                                            {a.year}
                                        </Card.Text>
                                        <Card.Text className="d-flex justify-content-center">
                                            {a.description}
                                        </Card.Text>
                                        <Button variant="secondary" onClick={handleShow} size="lg">
                                            {t("cards.details")}
                                        </Button>



                                        <Modal centered show={show} onHide={handleClose}
                                            size="lg"
                                        // dialogClassName="modal-90w"
                                        >
                                            <Modal.Header closeButton >
                                                <Modal.Title > {a.title}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="d-flex justify-content-center  flex-row">
                                                <Container> <Card.Img variant="top" src={a.poster} /> </Container>
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
                                                    <Card.Text className="d-flex justify-content-center">

                                                    </Card.Text>
                                                    <link rel="stylesheet" href={a.trailer} />
                                                    {/* <Player autoPlay src={a.trailer}>
                                                        <ControlBar autoHide={false} className="my-class" />
                                                    </Player>
                                                    <div style={{ width: 660, height: 'auto' }}>
                                                        <Ratio aspectRatio="16x9">
                                                            <embed type="video" src={a.trailer} />
                                                        </Ratio>
                                                    </div> */}


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
        </>
    )
}
export default Cards;