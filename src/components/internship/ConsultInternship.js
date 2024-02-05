import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConsultInternship.css';


function ConsultInternship() {
    const [internships, setInternships] = useState([]);

    useEffect(() => {
        fetchInternshipData();
    }, []);

    const navigate = useNavigate();

    const fetchInternshipData = async () => {
        try {

            const tmp = localStorage.getItem('token');
            const numericPart = tmp.match(/\d+/);
            const studentId = numericPart ? parseInt(numericPart[0]) : NaN;

            const response = await fetch("http://localhost:8080/internship/getAllByStudent/"+studentId);
            if (response.ok) {
                const data = await response.json();
                setInternships(data);
            } else {
                console.error('Failed to fetch internship data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDeleteInternship = async (internship) => {
        try {
            const response = await fetch("http://localhost:8080/internship/remove/"+internship.internship_id, {
                method: 'DELETE'
            });
            if (response.ok) {
                setInternships(internships.filter(internship => internship.id !== internship.internship_id));
                window.location.reload();
            } else {
                console.error('Failed to delete internship');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleOpenInternship = async (internship) => {
        localStorage.setItem('internshipData', JSON.stringify(internship));
        navigate(`/internship/consult/${internship.internship_id}`);
    };

    return (
        <div className="consult-internship-container">
            <h2>Consult Internships</h2>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {internships.map(internship => (
                    <tr key={internship.internship_id}>
                        <td>{internship.title}</td>
                        <td>{internship.date.substring(0, 10)}</td>
                        <td>
                            <button onClick={() => {handleOpenInternship(internship)}}>Open</button>
                            <button onClick={() => handleDeleteInternship(internship)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ConsultInternship;