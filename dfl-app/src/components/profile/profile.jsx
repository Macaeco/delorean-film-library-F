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
                // console.log(data)


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
                    localStorage.removeItem('ID')
                    localStorage.removeItem('userName')
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
        // console.log(userData)

        fetch(`http://localhost:4000/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(userData),
            headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` }

        })
            .then(j => j.json())
            .then(data => {
                // console.log(data)
                
                 
                navigate('/profile')
            })


    }

    const handleCloseSession = () => {
        localStorage.removeItem('token')
        navigate('/')

    }


    

    console.log(user)
    const userLarr = [user.list]
    // console.log(userLarr)


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (
        <Container fluid className="card__profile__container "  >

            <Col>
                <div className="pt-4 ps-4 d-flex flex-row ">
                    <Card className="m-0 shadow p-1 bg-body rounded image_prof" style={{ width: '60rem', height: '32rem' }}>
                        <Card.Img variant={theme.secondary} style={{ width: "22rem", height: 'auto' }} src={gif1} className="mt-3 rounded mb-0 " />
                        <Container fluid >
                            <Card.Body className="d-flex flex-row">
                                <Container className=" flex-column d-flex  gap-3 m-1 ">
                                    <Card.Title className="d-flex flex-row-reverse"> {user.name}</Card.Title>
                                    <Card.Text className="d-flex flex-row-reverse">{user.userName} </Card.Text>
                                    <Card.Text className="d-flex flex-row-reverse" >{user.email} </Card.Text>

                                </Container>
                                <Container className="d-flex flex-column justify-content-center gap-4 m-1">
                                    <Button style={{ width: "5rem", height: '2rem' }} variant={theme.secondary}>{t("profile.edit")}</Button>
                                    <Button style={{ width: "5rem", height: '2rem' }}onClick={handleShow} variant={theme.secondary}>{t("profile.edit")}</Button>
                                    <Modal centered show={show} onHide={handleClose} >
                                        <Modal.Header closeButton>
                                            <Modal.Title>{t("profile.upload")}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form className="d-flex" onSubmit={handlePatch}>
                                                <FormControl
                                                    type="search"
                                                    placeholder=" .  .  . "
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

                                    <Button style={{ width: "5rem", height: '2rem' }} variant={theme.secondary}>{t("profile.edit")}</Button>
                                </Container>


                            </Card.Body>
                            <hr></hr>
                            <Form className="d-flex  flex-row justify-content-center m-1 gap-5">
                                <Button variant={theme.secondary} style={{ height: '3rem' }} onClick={handleDelete}>{t("profile.delete")}</Button>{' '}
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
                                    {user?.list?.idOniric?<p>{user?.list?.idOniric}</p>: ''}
                                    {user?.list?.idInteligence?<p>{user?.list?.idInteligence}</p>: ''}
                                    {user?.list?.idNeon?<p>{user?.list?.idNeon}</p>: ''}
                                    {user?.list?.idDrugs?<p>{user?.list?.idDrugs}</p>: ''}
                                    {user?.list?.idRoom?<p>{user?.list?.idRoom}</p>: ''}
                                    {user?.list?.idRConducta?<p>{user?.list?.idConducta}</p>: ''}
                                    {/* <cite title="Source Title">{user.list.idNeon}</cite> */}
                                    {/* <cite title="Source Title">{user.list.idOniric}</cite> */}
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