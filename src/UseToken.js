import { useState, useEffect } from 'react';

export default function UseToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        return tokenString ? JSON.parse(tokenString) : null; // Return null if tokenString is null or undefined
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    };
}
