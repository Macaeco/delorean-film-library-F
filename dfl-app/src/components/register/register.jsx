import React from "react";
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import "./register.css"
import { useTranslation } from "react-i18next"
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";

function Register() {
    const [t, i18n] = useTranslation('global');
    let [Userdata, updateUserData] = useState([])

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
                // console.log(data)
            })
        // console.log(user)
    }

    return (
        <div className="main__reggister">
            <Container >
                <Form onSubmit={handleOnSubmit} className={'pt-5'}>
                    <div className="register__container">
                        <FloatingLabel controlId="floatingName" label={t("register.name")} className="all__input">
                            <Form.Control type="text" placeholder="name" name="name" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingUserName" label={t("register.userName")} className="all__input">
                            <Form.Control type="text" placeholder="user name" name="userName" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput" label={t("register.email")} className="all__input" >
                            <Form.Control type="email" placeholder="name@example.com" name="email" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label={t("register.password")} className="all__input">
                            <Form.Control type="password" placeholder="Password" name="password" />
                        </FloatingLabel>

                        <Button variant="secondary" className="all__input">{t("register.login")}</Button>
                        <Button variant="secondary" className="all__input" type="submit">{t("register.register")}</Button>{' '}

                    </div>
                </Form>
            </Container >
        </div>
    )
}
export default Register;