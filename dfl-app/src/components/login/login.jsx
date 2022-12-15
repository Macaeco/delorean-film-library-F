import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';
import Badge from 'react-bootstrap/Badge';
import { useTranslation } from "react-i18next";
import { useState, useContext } from 'react';
import { themeContext } from '../../context/themeContext';
import { Navigate, useNavigate, Link } from 'react-router-dom';

import './login.css';
import Container from 'react-bootstrap/esm/Container';

function Login() {
    const [t, i18n] = useTranslation('global');
    const [theme, setTheme, changeTheme, filmsName, setFilmsName, logName, setLogName] = useContext(themeContext)
    const navigate = useNavigate()



    const handleOnSubmit = e => {
        e.preventDefault()
        const user = {

            email: e.target.email.value,
            password: e.target.password.value,
        }
        // console.log(user)

        fetch('https://young-headland-81478.herokuapp.com/auth/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(d => d.json())
            .then((data) => {
                fetch('https://young-headland-81478.herokuapp.com/users', {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${data.access_token}` }

                })
                    .then(r => r.json())
                    .then(info => {

                        setLogName(info)

                        //  console.log(info)
                        localStorage.setItem('token', data.access_token)
                        localStorage.setItem("userName", info.userName)




                    })
                // console.log(data.access_token)
                navigate(-1)

            })


    }
    // console.log(logName)  
    return (
        <div className='mail__login pt-5 ps-5'>



            <Form className='login__container  ' onSubmit={handleOnSubmit}>

                <FloatingLabel controlId="floatingInput" label={t('login.email')} className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" name="email" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label={t('login.password')}>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </FloatingLabel>
                <Badge className=" badge__" bg={theme.secondary} >Si aún no tienes cuenta, ¿a qué esperas? regístrate </Badge>
                <Container className=" d-flex flex-row">
                    <Button variant="primary" type="submit" className='button'>{t('login.login')}</Button>{' '}
                    {/* <Badge bg={theme.secondary} >Si aún no tienes cuenta, ¿a qué esperas? </Badge> */}
                  
                        <Link to="/register"><Button variant="secondary" className='button'>{t('login.register')}</Button>{' '}</Link>
                       
                   
                </Container>
            </Form>
        </div>

    )
}

export default Login;