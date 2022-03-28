import { useEffect, useState } from "react";
import { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { themeContext } from "../../context/themeContext";
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import imgPerfil from "./perfil.jpg"
import Form from 'react-bootstrap/Form'
import gif1 from "./gifprofile2.webp"
import "./profile.css"
import Modal from 'react-bootstrap/Modal'
import FormControl from 'react-bootstrap/FormControl'

function Profile() {
    const [t, i18n] = useTranslation('global');
    const [theme, setTheme, changeTheme, filmsName, setFilmsName, logName, setLogName, access, updateAcces, filmsValue, setFilmsValue] = useContext(themeContext)
    let token = localStorage.getItem('token')
    let [user, setUser] = useState([])
    let [listsFollowed, setListsFollowed] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        fetch('http://localhost:4000/users', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                setUser(data)
                localStorage.setItem('ID', data._id)
                console.log(data)


            })

    }, [])
    console.log(user)

    const handleDelete = () => {
        {
            fetch('http://localhost:4000/users', {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(j => j.json())
                .then(data => {
                    // console.log(data)
                    localStorage.removeItem('token')
                    navigate('/')
                })
        }

    }
    const id = localStorage.getItem('ID')
    const handlePatch = (e) => {
        e.preventDefault()
        const userData = {
            userName: e.target.userName.value,
        }
        console.log(userData)

        fetch(`http://localhost:4000/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(userData),
            headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` }

        })
            .then(j => j.json())
            .then(data => {
                console.log(data)
                navigate('/profile')
            })


    }

    const handleCloseSession = () => {
        localStorage.removeItem('token')
        navigate('/')

    }


    // useEffect(() => {

    //     fetch('http://localhost:4000/', {
    //         method: 'GET', 
    //     })
    //         .then(j => j.json())
    //         .then(data => {
    //             setListsFollowed(data)


    //             console.log(data)

    //         })

    // }, [])


    console.log(user)
    const userLarr = [user.list]
    console.log(userLarr)


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <Container fluid className="card__profile__container m-0 p-0" fluid  >

            <Col>
                <div className="pt-5 ps-5 d-flex flex-row ">
                    <Card className="m-0 shadow p-3 mb-5 bg-body rounded" style={{ width: '80%', height: 'auto' }}>
                        <Card.Img variant={theme.secondary} src={gif1} className="m-5 rounded mb-0" />
                        <Container fluid >
                            <Card.Body className="d-flex flex-row">
                                <Container className=" flex-column d-flex  gap-4 m-1 ">
                                    <Card.Title className="d-flex flex-row-reverse"> {user.name}</Card.Title>
                                    <Card.Text className="d-flex flex-row-reverse">{user.userName} </Card.Text>
                                    <Card.Text className="d-flex flex-row-reverse" >{user.email} </Card.Text>

                                </Container>
                                <Container className="d-flex flex-column justify-content-center gap-4 m-1">
                                    <Button style={{ width: "65%", height: '4vh' }} variant={theme.secondary}>{t("profile.edit")}</Button>
                                    <Button style={{ width: "65%", height: '4vh' }} onClick={handleShow} variant={theme.secondary}>{t("profile.edit")}</Button>
                                    <Modal centered show={show} onHide={handleClose} >
                                        <Modal.Header closeButton>
                                            <Modal.Title>{t("profile.upload")}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form className="d-flex" onSubmit={handlePatch}>
                                                <FormControl
                                                    type="search"
                                                    placeholder={t("header.search")}
                                                    className="me-2"
                                                    aria-label="Search"
                                                    name="userName"
                                                />
                                                <Modal.Footer >
                                                    <Button type="submit" variant="outline-success" className="search__button">{t("profile.send")}</Button>
                                                </Modal.Footer>

                                            </Form>
                                        </Modal.Body>

                                    </Modal>

                                    <Button style={{ width: "65%", height: '4vh' }} variant={theme.secondary}>{t("profile.edit")}</Button>
                                </Container>


                            </Card.Body>
                            <hr></hr>
                            <Form className="d-flex  flex-row justify-content-center m-2 gap-5">
                                <Button variant={theme.secondary} style={{ height: '10vh' }} onClick={handleDelete}>{t("profile.delete")}</Button>{' '}
                                <Button variant={theme.secondary} onClick={handleCloseSession}>{t("profile.close")}</Button>{' '}
                            </Form>
                        </Container>
                    </Card>
                    <Container fluid className="d-flex ms-5 ">
                        <Card style={{ width: "40%", height: '40vh' }} >


                            <Card.Header>SIGUES ESTAS LISTAS</Card.Header>
                            <Card.Body className="blockquote mb-0">

                                {/* <Card.Title >{user.list}</Card.Title> */}


                                <footer className="blockquote-footer">
                                    <cite title="Source Title">{user.list}</cite>
                                </footer>

                            </Card.Body>
                        </Card>


                    </Container>
                </div>
            </Col>

            <p></p>

        </Container>


    )
}
export default Profile;