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




function Cards() {
    // let filmSearch = 'matrix'
    let [filmsName, setFilmsName] = useState([])
    const [t, i18n] = useTranslation('global');
    const [theme, setTheme, changeTheme, logName, setLogName, access, updateAcces, filmsValue, setFilmsValue] = useContext(themeContext)
    const [arrayID, setArrayID] = useState('')
    const [searchParams] = useSearchParams();
    const filmSearch = searchParams.get('name')
    const [descF, setDescF]=useState('')
    // const filmSearch = 'canino'
    console.log(filmSearch)
    const [id, setID] = useState([])


    useEffect(() => {
        const fethMovies = async () => {
            try {
                const res = await fetch(`https://mdblist.p.rapidapi.com/?s=${filmSearch}`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "mdblist.p.rapidapi.com",
                        'X-RapidAPI-Key': process.env.REACT_APP_KEY

                    }
                })
                const dat = await res.json()
                if (dat.search.length !== 0) {
                    console.log(dat.search)
                    const idarray = dat.search.map(a => a.id)
                    console.log(idarray)
                    const idCut = idarray.slice(0, 15)
                    function chunk(items, size) {
                        const chunks = []
                        items = [].concat(...items)

                        while (items.length) {
                            chunks.push(
                                items.splice(0, size)
                            )
                        }
                        return chunks
                    }
                    const arraychuck = chunk(idCut, 3)
                    console.log(arraychuck)
                    setFilmsName('')
                    arraychuck.map((a, i) => {
                        a.map(
                            a => {
                                setTimeout(() => {
                                    const fetchMov2 = async () => {
                                        try {
                                            const res = await fetch(`https://mdblist.p.rapidapi.com/?i=${a}`, {
                                                "method": "GET",
                                                "headers": {
                                                    "x-rapidapi-host": "mdblist.p.rapidapi.com",
                                                    'X-RapidAPI-Key': process.env.REACT_APP_KEY
                                                }
                                            })
                                            const dat = await res.json()
                                            setFilmsName((filmsName) => [...filmsName, dat])
                                            console.log(dat)
                                        } catch (err) {
                                            console.log(err)
                                        }
                                    }
                                    fetchMov2()
                                }, i * 1500)
                            }
                        )
                    })
                }
            } catch (err) {
                console.log(err)
            }
        }
        fethMovies()
    }, [filmSearch])
    console.log(filmsName)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = (e) => {

        setShow(true)
        setDescF(e)
    
        console.log(e)
        //  modalDetails(e)

    }

    const modalDetails = (a) => {
        return (
            <Modal show={show} onHide={() => setShow(false)} id="modal__idFull" ClassName="modal-100w " aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title" className="d-flex justify-content-center">

                    {a.title}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center flex-row">
                    <Container > <Card.Img variant="top" src={a.poster}  style={{ width: '16rem' }}/> </Container> 
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
                    </Container>
                </Modal.Body>
            </Modal>

        )
    }



    return (


        <Container >
            {modalDetails(descF)}
            {filmsName.length !== 0 ?
                filmsName.map((a, i) => {
                    return (
                        <Row xs={1} md={1} className="g-4 ">

                            <Card key={i} style={{ width: '300px', height: '400px bg-' }} className="shadow p-3 mb-5 bg-body rounded ">
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
                                    {/* <Button variant={theme.secondary} onClick={() => setShow(true)}> */}
                                    <Button variant={theme.secondary} onClick={()=>handleClick(a)}>
                                        {t("cards.details")}
                                    </Button>
                                    {/* MOOOOOODAAAL */}



                                </Card.Body>
                            </Card>

                        </Row>
                    )
                })
                :
                <Spinner animation="border" role="status" className="spinner__cards">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}




        </Container>

    )
}
export default Cards;