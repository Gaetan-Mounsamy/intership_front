import React from "react";


function HomePage() {
    const tokenData  = localStorage.getItem('token');
    const tokenString = JSON.parse(tokenData);
    const parts  = tokenString.split('_');
    const name = parts.slice(0, -1).join(' ');

    return (
        <div>
            <h2>Welcome</h2>
            <h2>{name}</h2>
        </div>
    );
}

export default HomePage;