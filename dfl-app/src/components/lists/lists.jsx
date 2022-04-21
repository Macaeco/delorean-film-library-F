import Container from "react-bootstrap/esm/Container";
import Badge from "react-bootstrap/esm/Badge";
import Spinner from "react-bootstrap/esm/Spinner";
import { useTranslation } from "react-i18next";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { useState, useEffect } from "react"
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import "./lists.css"

import "./lists.css"

function Lists(props) {
    const [t, i18n] = useTranslation('global');
    const [listFilms, setListFilms] = useState()
    const [favsFilms, setFavsFilms] = useState([])
    const [userL, setUserL] = useState([])
    const [theme, setTheme, changeTheme, filmsName, setFilmsName, logName, setLogName, access, updateAcces, filmsValue, setFilmsValue] = useContext(themeContext)
    const [idLisMB, setidLisMB] = useState({})


    useEffect(() => {
        fetch('http://localhost:4000/lists')
            .then(j => j.json())
            .then(data => {

                setListFilms(data)
                // console.log(data)


            })
    }, [])
    useEffect(() => {

        fetch('http://localhost:4000/users', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                setUserL(data.list)
                localStorage.setItem('ID', data._id)
                // console.log(data)
                data.list ? setidLisMB(data.list) : setidLisMB({})


            })
    }, [])






    const id = localStorage.getItem('ID')
    let token = localStorage.getItem('token')


    const idFunction = (e) => {
        // console.log(e)
        fetch(`http://localhost:4000/users/lists/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(e),
            headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                // console.log(data) 
            })

    }

    const handleOnSubmmit = (e) => {
        e.preventDefault()
        const idList = {
            idOniric: 'ONIRICS'
        }
        setidLisMB(idLisMB => Object.assign(idLisMB, idList))
        // console.log(idLisMB)
        idFunction(idLisMB)

    }
    const handleInteligence = (e) => {
        e.preventDefault()
        const idList = {
            idInteligence: 'I.A LIST'
        }
        setidLisMB(idLisMB => Object.assign(idLisMB, idList))
        idFunction(idLisMB)
    }
    const handleRoom = (e) => {
        e.preventDefault()
        const idList = {
            idRoom: 'ONE SPACE LIST  '
        }
        setidLisMB(idLisMB => Object.assign(idLisMB, idList))
        idFunction(idLisMB)
    }
    const handleNeon = (e) => {
        e.preventDefault()
        const idList = {
            idNeon: 'NEON LIST'
        }
        setidLisMB(idLisMB => Object.assign(idLisMB, idList))
        idFunction(idList)
    }
    const handleConducta = (e) => {
        e.preventDefault()
        const idList = {
            idConducta: 'MALA CONDUCTA RULES'
        }
        setidLisMB(idLisMB => Object.assign(idLisMB, idList))
        idFunction(idLisMB)
    }
    const handleDrugs = (e) => {
        e.preventDefault()
        const idList = {
            idDrugs: ' PÁSATE ESO LIST'
        }
        setidLisMB(idLisMB => Object.assign(idLisMB, idList))
        idFunction(idLisMB)
    }




    const [show, setShow] = useState(false);

    return (
        <Container className=" card__list__container container__lists ms-0 mt-0 ms-0  pb-5 "  >


            {/* <Container className="container__lists pt-0 gap-3" > */}
            <Container className=" rotule__container d-flex justify-content-center pt-5">
                <hr></hr>
                <h1>
                    {/* {t("lists.top10")}   */}
                    <Badge bg={theme.secondary} >{t("lists.top10")}  </Badge>
                </h1>
                <hr></hr>
            </Container>
            <Container style={{ minWidth: '2rem', maxWidth: '50rem', }} >





                <Card className=" d-flex flex-column overflow-auto mt-4 "    >


                    <Card.Header>{t("lists.oniric")}</Card.Header>
                    <Card.Body>

                        <Container className=" d-flex  flex-nowrap overflow-auto">
                            {listFilms ?
                                listFilms[0].onirics.map((a, i) => {
                                    // console.log(a)
                                    return (

                                        <Card key={i} style={{ minWidth: '18rem', maxWidth: '18rem' }} className="card card-block mx-2" >
                                            <Card.Img variant="top" src={a.img} style={{ minWidth: '10rem' }} />
                                            <Card.Body>
                                                <Card.Title >{a.nameEn}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                                :
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>}

                        </Container>
                        <Button variant={theme.secondary} onClick={handleOnSubmmit} className="mt-2 ms-5">{t("lists.follow")}</Button>
                        {!show && <Button variant={theme.secondary} onClick={() => setShow(true)} className="mt-2 ms-5">?</Button>}
                    </Card.Body>
                    <Alert show={show} variant="success">
                        <p>
                            {t("lists.onirics")}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                               {t("lists.close")}
                            </Button>
                        </div>
                    </Alert>
                </Card>




                <Card className=" d-flex flex-column overflow-auto mt-4 "     >
                    <Card.Header>{t("lists.inteligence")}</Card.Header>
                    <Card.Body>

                        <Container className=" d-flex  flex-nowrap overflow-auto">
                            {listFilms ?
                                listFilms[1].inteligence.map((a, i) => {
                                    // console.log(a)
                                    return (

                                        <Card key={i} style={{ minWidth: '18rem', maxWidth: '18rem' }} className="card card-block mx-2" >
                                            <Card.Img variant="top" src={a.img} style={{ minWidth: '10rem' }} />
                                            <Card.Body>
                                                <Card.Title >{a.nameEn}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                                :
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>}

                        </Container>
                        <Button variant={theme.secondary} onClick={handleInteligence} className="mt-2 ms-5">{t("lists.follow")}</Button>
                        {!show && <Button variant={theme.secondary} onClick={() => setShow(true)} className="mt-2 ms-5">?</Button>}
                    </Card.Body>
                    <Alert show={show} variant="success">
                        <p>
                            {t("lists.inteligences")}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                               {t("lists.close")}
                            </Button>
                        </div>
                    </Alert>
                </Card>



                <Card className=" d-flex flex-column overflow-auto mt-4 "     >
                    <Card.Header>{t("lists.room")}</Card.Header>
                    <Card.Body >

                        <Container className=" d-flex  flex-nowrap overflow-auto">
                            {listFilms ?
                                listFilms[2].room.map((a, i) => {
                                    // console.log(a)
                                    return (

                                        <Card key={i} style={{ minWidth: '18rem', maxWidth: '18rem' }} className="card card-block mx-2" >
                                            <Card.Img variant="top" src={a.img} style={{ minWidth: '10rem' }} />
                                            <Card.Body>
                                                <Card.Title >{a.nameEn}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                                :
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>}

                        </Container>
                        <Button variant={theme.secondary} type="submit" onClick={handleRoom} className="mt-2 ms-5">{t("lists.follow")}</Button>
                        {!show && <Button variant={theme.secondary} onClick={() => setShow(true)} className="mt-2 ms-5">?</Button>}
                    </Card.Body>
                    <Alert show={show} variant="success">
                        <p>
                            {t("lists.rooms")}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                               {t("lists.close")}
                            </Button>
                        </div>
                    </Alert>
                </Card>





                <Card className=" d-flex flex-column overflow-auto mt-4 "     >
                    <Card.Header>{t("lists.inteligence")}</Card.Header>
                    <Card.Body>

                        <Container className=" d-flex  flex-nowrap overflow-auto">
                            {listFilms ?
                                listFilms[3].neon.map((a, i) => {
                                    // console.log(a)
                                    return (

                                        <Card key={i} style={{ minWidth: '18rem', maxWidth: '18rem' }} className="card card-block mx-2" >
                                            <Card.Img variant="top" src={a.img} style={{ minWidth: '10rem' }} />
                                            <Card.Body>
                                                <Card.Title >{a.nameEn}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                                :
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>}

                        </Container>
                        <Button variant={theme.secondary} onClick={handleNeon} className="mt-2 ms-5">{t("lists.follow")}</Button>
                        {!show && <Button variant={theme.secondary} onClick={() => setShow(true)} className="mt-2 ms-5">?</Button>}
                    </Card.Body>
                    <Alert show={show} variant="success">
                        <p>
                            {t("lists.neons")}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                               {t("lists.close")}
                            </Button>
                        </div>
                    </Alert>
                </Card>



                <Card className=" d-flex flex-column overflow-auto mt-4 "     >
                    <Card.Header>{t("lists.conducta")}</Card.Header>
                    <Card.Body>

                        <Container className=" d-flex  flex-nowrap overflow-auto">
                            {listFilms ?
                                listFilms[4].malaConducta.map((a, i) => {
                                    // console.log(a)
                                    return (

                                        <Card key={i} style={{ minWidth: '18rem', maxWidth: '18rem' }} className="card card-block mx-2" >
                                            <Card.Img variant="top" src={a.img} style={{ minWidth: '10rem' }} />
                                            <Card.Body>
                                                <Card.Title >{a.nameEn}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                                :
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>}

                        </Container>
                        <Button variant={theme.secondary} onClick={handleConducta} className="mt-2 ms-5">{t("lists.follow")}</Button>
                        {!show && <Button variant={theme.secondary} onClick={() => setShow(true)} className="mt-2 ms-5">?</Button>}
                    </Card.Body>
                    <Alert show={show} variant="success">
                        <p>
                            {t("lists.conductas")}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                               {t("lists.close")}
                            </Button>
                        </div>
                    </Alert>
                </Card>



                <Card className=" d-flex flex-column overflow-auto mt-4  "     >
                    <Card.Header>{t("lists.drugs")}</Card.Header>
                    <Card.Body>

                        <Container className=" d-flex  flex-nowrap overflow-auto">
                            {listFilms ?
                                listFilms[5].drugs.map((a, i) => {
                                    // console.log(a)
                                    return (

                                        <Card key={i} style={{ minWidth: '18rem', maxWidth: '18rem' }} className="card card-block mx-2" >
                                            <Card.Img variant="top" src={a.img} style={{ minWidth: '10rem' }} />
                                            <Card.Body>
                                                <Card.Title >{a.nameEn}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                                :
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>}

                        </Container>
                        <Button variant={theme.secondary} onClick={handleDrugs} className="mt-2 ms-5">{t("lists.follow")}</Button>
                        {!show && <Button variant={theme.secondary} onClick={() => setShow(true)} className="mt-2 ms-5">?</Button>}
                    </Card.Body>
                    <Alert show={show} variant="success">
                        <p>
                            {t("lists.drugss")}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                               {t("lists.close")}
                            </Button>
                        </div>
                    </Alert>
                </Card>


                {/* <Card className=" d-flex flex-column overflow-auto mt-4 mb-5"     >
                    <Card.Header>{t("lists.drugs")}</Card.Header>
                    <Card.Body>

                        <Container className=" d-flex  flex-nowrap overflow-auto">
                            {listFilms ?
                                listFilms[6].drugs.map((a, i) => {
                                    // console.log(a)
                                    return (

                                        <Card key={i} style={{ minWidth: '18rem', maxWidth: '18rem' }} className="card card-block mx-2" >
                                            <Card.Img variant="top" src={a.img} style={{ minWidth: '10rem' }} />
                                            <Card.Body>
                                                <Card.Title >{a.nameEn}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                                :
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>}

                        </Container>
                        <Button variant={theme.secondary} onClick={handleDrugs} className="mt-2 ms-5">{t("lists.follow")}</Button>
                    </Card.Body>
                </Card> */}



            </Container>







            {/* </Container> */}

        </Container>

    )
}
export default Lists;
//preparar en el back un get y un post