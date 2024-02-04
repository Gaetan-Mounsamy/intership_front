import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { redirect  } from 'react-router-dom';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
        .catch((error) => {
            console.error('Error: ', error)
        })
}

export default function Login({ setToken }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            password,
            username
        });
        //const token = await loginUser(loginData);
        //if (token.timestamp)
        //    alert("Login failed. Please try again.");
        //else {
            setToken('Kelly' + 'Brock' + '1');
            setLoggedIn(true);
        //}
    }

    if (loggedIn) {
        return <redirect to="/" />; // Redirect to HomePage
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input
                        type="text"
                        className={usernameError ? 'error' : ''}
                        value={username}
                        onChange={e => {
                            setUserName(e.target.value);
                            setUsernameError(false); // Reset error state when user changes input
                        }}
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        className={passwordError ? 'error' : ''}
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                            setPasswordError(false); // Reset error state when user changes input
                        }}
                    />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};