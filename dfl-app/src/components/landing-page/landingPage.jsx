import React from "react";
import "./landing-page.css"
import Cards from "../card/cards"
import Image from 'react-bootstrap/Image'
import background from "./file_79_166.jpg"
import Container from 'react-bootstrap/Container'
import ControlledCarousel from "../carrusel/carrusel";
import Carrusel from "../carrusel/carrusel";
import { Link, useLocation } from "react-router-dom";
import Header from "../header/header";
// import { useLocation } from "react-router-dom";


function LandingPage() {

    const location = useLocation()
    // console.log(location)
    return (
        <React.Fragment>
            {/* <Header></Header> */}

            <Container fluid className="main__landing d-flex flex-row " >
            
                <Carrusel ></Carrusel>
                <Cards></Cards>
            </Container>
        </React.Fragment>
    )
}
export default LandingPage;