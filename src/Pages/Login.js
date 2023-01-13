import React, {useState} from 'react';
import './stylePages/login.css'
import decode from 'jwt-decode'
import {useNavigate, Link} from "react-router-dom";


export default function Login () {

    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const querry =  `query login{
        login(login: "${login}", password: "${password}")
     }`

    const makeRequest = query => {
        return fetch('http://shop-roles.node.ed.asmer.org.ua/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({query})  
            }).then(res => res.json()
            .then(result => {

                const data = decode(result.data.login)
                localStorage.setItem('token', result.data.login)

                if (data.sub.acl.includes('admin')) {
                    navigate('/admin')
                }
            })
            )
    }
    

    return (
        <div className='logContainer'>
            <div className='logInContainer'>
                <h1>Login</h1>
                <div>
                    <span>Login</span>
                    <input type='text' onChange = {e => setLogin(e.target.value)}></input>
                </div>
                <div>
                    <span>Password</span>
                    <input type='password' onChange = {e => setPassword(e.target.value)}></input>
                    <Link className='linkForgot'>Forgot password?</Link>
                </div>
                <button onClick = {() => makeRequest(querry)}>Login</button>
            </div>
            <div className='rightContainer'></div>
        </div>
    );
} 