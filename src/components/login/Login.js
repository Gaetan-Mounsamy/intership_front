import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';


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
        if (token.timestamp)
            alert("Login failed. Please try again.");
        else {
            setToken(token.firstname + "_" + token.lastname + "_" + token.user_id);
            setLoggedIn(true);
        }
    }

    if (loggedIn) {
        return <redirect to="/" />;
    }

    return(
        <div className="login-wrapper">
            <h3>Please Log In</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input
                        type="text"
                        className={usernameError ? 'error' : ''}
                        value={username}
                        onChange={e => {
                            setUserName(e.target.value);
                            setUsernameError(false);
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
                            setPasswordError(false);
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