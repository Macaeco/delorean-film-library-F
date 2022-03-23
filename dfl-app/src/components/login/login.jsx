import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';
import { useTranslation } from "react-i18next";
import { useState,useContext } from 'react';
import { themeContext } from '../../context/themeContext';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const [t, i18n] = useTranslation('global');
    const [theme,setTheme,changeTheme,filmsName, setFilmsName,logName,setLogName ] = useContext(themeContext)
    const navigate=useNavigate()


   
    const handleOnSubmit = e => {
        e.preventDefault()
        const user = {

            email: e.target.email.value,
            password: e.target.password.value,
        }
        // console.log(user)

        fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(d => d.json())
            .then((data) => {
                fetch('http://localhost:4000/users', {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${data.access_token}`} 
                    
                })
                .then(r=>r.json())
                .then(info=>{
                    
                     setLogName(info)
                    //  console.log(info)
                     localStorage.setItem('token',data.access_token)
                     navigate(-1)

                })
                // console.log(data.access_token)
              
                
            })
        
            
    }  
    // console.log(logName)  
    return (
        <div className='mail__login pt-5 ps-5'>
            <Form className='login__container' onSubmit={handleOnSubmit}>
                <FloatingLabel controlId="floatingInput" label={t('login.email')} className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" name="email" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label={t('login.password')}>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </FloatingLabel>
                <Button variant="primary" type="submit" className='button'>{t('login.login')}</Button>{' '}
                <Button variant="secondary" className='button'>{t('login.register')}</Button>{' '}
            </Form>
        </div>

    )
}

export default Login;