import Container from "react-bootstrap/esm/Container";
import Badge from "react-bootstrap/esm/Badge";
import Spinner from "react-bootstrap/esm/Spinner";
import { useTranslation } from "react-i18next";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
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

    useEffect(() => {
        fetch('http://localhost:4000/lists')
            .then(j => j.json())
            .then(data => {

                setListFilms(data)
                console.log(data)


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
                console.log(data)
            })
    }, [])
    console.log(userL)





    const id = localStorage.getItem('ID')
    let token = localStorage.getItem('token')

 
    const idFunction = (e) => {
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
            idList: 'ONIRICS'
        }
        idFunction(idList)
    }
    const handleInteligence = (e) => {
        e.preventDefault()
        const idList = {
            idList: 'I.A LIST'
        }
        idFunction(idList)
    }
    const handleRoom = (e) => {
        e.preventDefault()
        const idList = {
            idList: 'ONE SPACE '
        }
        idFunction(idList)
    }
    const handleNeon = (e) => {
        e.preventDefault()
        const idList = {
            idList: 'NEON LIST'
        }
        idFunction(idList)
    }



    // console.log(listFilms)

    return (
        <Container className=" card__list__container container__lists ms-0 mt-0 ms-0  "  >


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
                        <Button variant={theme.secondary} onClick={handleOnSubmmit} className="mt-2 ms-5">SEGUIR</Button>
                    </Card.Body>
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
                        <Button variant={theme.secondary} onClick={handleInteligence} className="mt-2 ms-5">SEGUIR</Button>
                    </Card.Body>
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
                        <Button variant={theme.secondary} type="submit" onClick={handleRoom} className="mt-2 ms-5">SEGUIR</Button>
                    </Card.Body>
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
                        <Button variant={theme.secondary} onClick={handleNeon}className="mt-2 ms-5">SEGUIR</Button>
                    </Card.Body>
                </Card>
            </Container>







            {/* </Container> */}

        </Container>

    )
}
export default Lists;
//preparar en el back un get y un post