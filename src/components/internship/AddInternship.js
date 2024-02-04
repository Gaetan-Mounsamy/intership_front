import React, { useState } from 'react';
import './AddInternship.css';

function AddInternship() {
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Submitted:', { date, title });
    };

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
