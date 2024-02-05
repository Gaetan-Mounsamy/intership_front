import React, { useState } from 'react';
import './AddInternship.css';

function AddInternship() {
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');


    const handleSubmit = async e => {
        e.preventDefault();

        const tmp = localStorage.getItem('token');
        const numericPart = tmp.match(/\d+/);
        const final = numericPart ? parseInt(numericPart[0]) : NaN;
        const internshipData = {
            date: date,
            title: title,
            studentId: final
        };

        const response = await fetch("http://localhost:8080/internship/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(internshipData)
        })
            .then(data => data.json())
            .catch((error) => {
                console.error('Error: ', error)
            });
        setDate('');
        setTitle('');
        alert("Successful addition");
    }

    return (
        <div className="internshipContainer">
            <h2>Internship Form</h2>
            <form className="internshipForm" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddInternship;
