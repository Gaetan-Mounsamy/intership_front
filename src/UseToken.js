import { useState } from 'react';

export default function UseToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        //console.log("getToken" + tokenString)
        const userToken = JSON.parse(tokenString);
        //console.log("getToken" + userToken)
        return userToken
    };

    const [token, setToken] = useState(getToken());
    console.log(token)
    // console.log(setToken)

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
}