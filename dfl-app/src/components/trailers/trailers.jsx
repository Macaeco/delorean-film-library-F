import "./trailers.css"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import { useState, useEffect } from "react"
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { useTranslation } from "react-i18next";




function Trailers() {
    const [t, i18n] = useTranslation('global');
    const [theme, setTheme, changeTheme, filmsName, setFilmsName, logName, setLogName, access, updateAcces, filmsValue, setFilmsValue] = useContext(themeContext)
    return (
        <Col style={{ width: '24rem' }} className="justify-content-center ps-4">
            <Container className=" container__trailer d-flex flex-column justify-content-center mb-5 gap-3 align-items-center">
                <hr></hr>
                <h3>
                    <Badge bg={theme.secondary} >{t("trailers.scene")}</Badge>
                </h3>
                <hr></hr>
                <div class="embed-responsive embed-responsive-16by9" >
                    <iframe width="300" height="150" src="https://www.youtube.com/embed/D_rkkVy05cU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
                <br></br>
                <div class="embed-responsive embed-responsive-16by9" >
                    <iframe width="300" height="150" src="https://www.youtube.com/embed/b8dWtK4H7cE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br></br>
                <div class="embed-responsive embed-responsive-16by9" >
                    <iframe width="300" height="150" src="https://www.youtube.com/embed/6MzMA7kfafw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br></br>
                <div class="embed-responsive embed-responsive-16by9" >
                    <iframe width="300" height="150" src="https://www.youtube.com/embed/-QWL-FwX4t4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br></br>
                <div class="embed-responsive embed-responsive-16by9" >
                    <iframe width="300" height="150" src="https://www.youtube.com/embed/vpcl1P_L4rg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br></br>
                <div class="embed-responsive embed-responsive-16by9" >
                    <iframe width="300" height="150" src="https://www.youtube.com/embed/WSLMN6g_Od4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br></br>
                <div class="embed-responsive embed-responsive-16by9" >
                    <iframe width="300" height="150" src="https://www.youtube.com/embed/DEQZ9YCNbqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br></br>

                <div class="embed-responsive embed-responsive-16by9" >
                    <iframe width="300" height="150" src="https://www.youtube.com/embed/Pw6gXwf3gEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br></br>
                <div class="embed-responsive embed-responsive-16by9" >
                    <iframe width="300" height="150" src="https://www.youtube.com/embed/h3vOpQXU3X8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br></br>
                <div class="embed-responsive embed-responsive-16by9" >
                    <iframe width="300" height="150" src="https://www.youtube.com/embed/DUgA4fIK4mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                </div>
                <br></br>





            </Container>








        </Col >
    )


}
export default Trailers;