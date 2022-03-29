import React from "react";
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import "./register.css"
import { useTranslation } from "react-i18next"
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link, useNavigate } from 'react-router-dom';
import Col from "react-bootstrap/esm/Col";


function Register() {
    const [t, i18n] = useTranslation('global');
    let [Userdata, updateUserData] = useState([])
    const navigate = useNavigate()

    const handleOnSubmit = e => {
        e.preventDefault()
        const user = {
            name: e.target.name.value,
            userName: e.target.userName.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        fetch('http://localhost:4000/auth/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(d => d.json())
            .then((data) => {
                updateUserData(...Userdata, user)
                navigate('/')
            })
        // console.log(user)
    }
    const handleCancel = e => {
        e.preventDefault()
        navigate(-1)
    }
    return (
        <div className="main__reggister">
            <Col  xs={12} md={7} sm={8} lg={ 7} xl={7} xxl={5}>
                <Container  >
                    <Form onSubmit={handleOnSubmit} className={'pt-5 ps-5' }>
                        <div className="register__container">
                            <FloatingLabel controlId="floatingName" label={t("register.name")} className="all__input">
                                <Form.Control fluid type="text" placeholder="name" name="name" />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingUserName" label={t("register.userName")} className="all__input">
                                <Form.Control fluid type="text" placeholder="user name" name="userName" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput" label={t("register.email")} className="all__input" >
                                <Form.Control fluid type="email" placeholder="name@example.com" name="email" />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPassword" label={t("register.password")} className="all__input">
                                <Form.Control  fluid type="password" placeholder="Password" name="password" />
                            </FloatingLabel>

                            <Link to='/'><Button  fluid variant="secondary" onClick={handleCancel} className="all__input">{t("register.cancel")}</Button></Link>
                            <Button fluid variant="secondary" className="all__input" type="submit">{t("register.register")}</Button>{' '}

                        </div>
                    </Form>
                </Container >
            </Col>
        </div>
    )
}
export default Register;