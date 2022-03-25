import Container from "react-bootstrap/esm/Container";
import Badge from "react-bootstrap/esm/Badge";
import Spinner from "react-bootstrap/esm/Spinner";
import { useTranslation } from "react-i18next";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import chihiro from "./posters/chihiro.jpg"
import wakinLife from "./posters/wakinglife.jpg"
import adaption from "./posters/adaption.jpg"
import paprika from "./posters/paprika_.jpg"
import origen from "./posters/origen.jpg"
import solaris from "./posters/solaris.jpg"
import { useState, useEffect } from "react"



import "./lists.css"

function Lists(props) {
    const [t, i18n] = useTranslation('global');
    const [listFilms, setListFilms] = useState()
    const [favsFilms,setFavsFilms]= useState([])

    useEffect(() => {
        fetch('http://localhost:4000/lists')
            .then(j => j.json())
            .then(data => {
                
                setListFilms(data)
                console.log(data)
              

            })
    }, [])

    const handleOnSubmmit= e => {
        const listFoll = "Mejores peliculas sobre tema onírico"

        fetch('http://localhost:4000/lists', {

        method:'POST',
        body: JSON.stringify(listFoll),
        headers: {'Content-Type': 'application/json'}
        })
        .then(d=>d.json())
        .then((data)=>{
            console.log(data)
            setFavsFilms([...favsFilms,listFoll])
            console.log(listFoll)
        })

    }


    // listFilms?console.log(listFilms[0].lists[0].onirics):console.log('cargando');
    // listFilms?console.log(listFilms[0].lists[0]):console.log('cargando');
    // listFilms?console.log(listFilms[0].lists):console.log('cargando');
    // listFilms?console.log(listFilms[0]):console.log('cargando')
    console.log(listFilms)





    return ( 
        <Container className="gap-3 " >


            <Container className="container__lists pt-0" >

                <hr></hr>
                <h1>
                    {t("lists.top10")}  <Badge bg="secondary">{t("lists.new")}</Badge>
                </h1>
                <hr></hr>
                <Card className=" d-flex flex-column overflow-auto ">
                    <Card.Header>{t("lists.oniric")}</Card.Header>
                    <Card.Body>

                        <Container className=" d-flex  flex-nowrap overflow-auto">
                            {listFilms?
                                listFilms[0].onirics.map((a, i) => {
                                    console.log(a)
                                    return (

                                        <Card key={i} style={{ minWidth: '18rem',maxWidth: '18rem' }} className="card card-block mx-2" >
                                            <Card.Img variant="top" src={a.img} style={{ minWidth: '10rem' }}  />
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
                        <Button variant="primary" onClick={handleOnSubmmit}>SEGUIR</Button>
                    </Card.Body>
                </Card>

                <Card className=" d-flex flex-column overflow-auto ">
                    <Card.Header>{t("lists.inteligence")}</Card.Header>
                    <Card.Body>

                        <Container className=" d-flex  flex-nowrap overflow-auto">
                            {listFilms?
                                listFilms[1].inteligence.map((a, i) => {
                                    console.log(a)
                                    return (

                                        <Card key={i} style={{ minWidth: '18rem',maxWidth: '18rem' }} className="card card-block mx-2" >
                                            <Card.Img variant="top" src={a.img} style={{ minWidth: '10rem' }}  />
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
                        <Button variant="primary"  >SEGUIR</Button>
                    </Card.Body>
                </Card>
                <Card className=" d-flex flex-column overflow-auto ">
                    <Card.Header>{t("lists.room")}</Card.Header>
                    <Card.Body>

                        <Container className=" d-flex  flex-nowrap overflow-auto">
                            {listFilms?
                                listFilms[2].room.map((a, i) => {
                                    console.log(a)
                                    return (

                                        <Card key={i} style={{ minWidth: '18rem',maxWidth: '18rem' }} className="card card-block mx-2" >
                                            <Card.Img variant="top" src={a.img} style={{ minWidth: '10rem' }}  />
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
                        <Button variant="primary" type="submit" >SEGUIR</Button>
                    </Card.Body>
                </Card>








            </Container>

        </Container>

    )
}
export default Lists;
//preparar en el back un get y un post