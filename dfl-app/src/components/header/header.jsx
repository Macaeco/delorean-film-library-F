import React, { useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import "./header.css"
import { useTranslation } from "react-i18next"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Link, useNavigate } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { propTypes } from "react-bootstrap/esm/Image";
import Modal from 'react-bootstrap/Modal'
import FloatingLabel from 'react-bootstrap/FloatingLabel'





function Header() {
    const [theme, setTheme, changeTheme, filmsName, setFilmsName, logName, setLogName, access, updateAcces, filmsValue, setFilmsValue] = useContext(themeContext)
    const [t, i18n] = useTranslation('global');
    const navigate= useNavigate()

    const handleSearchFilm = (e) => {
        e.preventDefault()
        // console.log(e.target.searchFilm.value)
        setFilmsValue(e.target.searchFilm.value)    
        // console.log(filmsValue)
        navigate(`/?name=${e.target.searchFilm.value}`)
    }


    console.log(filmsValue)






    return (
        <React.Fragment>


            <Navbar bg={theme.primary} style={{ width: '100%', height: '100px' }} expand={false} sticky="top" >
                <Container fluid>
                    <Link to={'/'} className={"text-decoration-none"}>
                        <Navbar.Brand href="#"><svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M326.1 160l127.4-127.4C451.7 32.39 449.9 32 448 32h-86.06l-128 128H326.1zM166.1 160l128-128H201.9l-128 128H166.1zM497.7 56.19L393.9 160H512V96C512 80.87 506.5 67.15 497.7 56.19zM134.1 32H64C28.65 32 0 60.65 0 96v64h6.062L134.1 32zM0 416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V192H0V416z" /></svg> DELOREAN FILM LIBRARY</Navbar.Brand>
                    </Link>


                {/* INPUUUTTTTTTTTTTTTTTTT!!!!!!!!!!!!!!!!!! */}



                    <Form className="d-flex" onSubmit={handleSearchFilm}>
                        <FormControl
                            type="search"
                            placeholder={t("header.search")}
                            className="me-2"
                            aria-label="Search"
                            name="searchFilm"
                        />
                        <Button type="submit" variant="outline-success" className="search__button">{t("header.search")}</Button>
                    </Form>
                    <ButtonGroup aria-label="Basic example" className="d-flex  flex-column">
                    </ButtonGroup>

                    {/* TERNARIO!!!! */}



                    {logName.name !== undefined ? <p className="logName_tit">{`${logName.name}`}</p> : ''}




                    <Form className="d-flex  flex-row" >

                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link as={Link} to="/"  >{t('header.home')}</Nav.Link>
                                    <Nav.Link as={Link} to="/lists">{t('header.lists')}</Nav.Link>
                                    <Nav.Link as={Link} to="/profile">{t('header.profile')}</Nav.Link>
                                    <Nav.Link as={Link} to="/register">{t('header.register')}</Nav.Link>
                                    <Nav.Link as={Link} to="/login">{t('header.login')}</Nav.Link>

                                </Nav>
                            </Offcanvas.Body>



                        </Navbar.Offcanvas>



                        <NavDropdown title={<svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z" fill="#4B4242" /></svg>} id="navbarScrollingDropdown" className="me-5">
                            <NavDropdown.Item href="#action3">
                                <Form >
                                    <Button onClick={() => i18n.changeLanguage('en')} variant={theme.secondary} className="fs-6">EN</Button>
                                    <Button onClick={() => i18n.changeLanguage('es')} variant={theme.secondary}>ES</Button>
                                </Form>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4"> <Form.Check onClick={changeTheme}

                                type="switch"
                                id="custom-switch"
                                label="Dark"
                            /></NavDropdown.Item>


                        </NavDropdown>
                    </Form>
                </Container>
            </Navbar>


        </React.Fragment>
    )
}
export default Header;