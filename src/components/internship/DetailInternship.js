import React, { useState, useEffect } from 'react';
import './DetailInternship.css';

function DetailInternship({ match }) {
    const [documents, setDocuments] = useState([]);

    const internshipDataString  = localStorage.getItem('internshipData');
    const internshipData = JSON.parse(internshipDataString);
    const internshipId = internshipData.internshipId;

    useEffect(() => {
        fetchDocuments(internshipId);
    }, [internshipId]);

    const fetchDocuments = async (internshipId) => {
        try {
            const response = await fetch(`http://localhost:8080/document/getByInternshipID/${internshipId}`);
            if (response.ok) {
                const data = await response.json();
                setDocuments(data);
            } else {
                console.error('Failed to fetch documents');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Documents for Internship : {internshipData.title}</h2>
            <table>
                <thead>
                <tr>
                    <th>Document Name</th>
                    <th>Level of Confidenciality</th>
                    <th>File Type</th>
                </tr>
                </thead>
                <tbody>
                {documents.map((document, index) => (
                    <tr key={index}>
                        <td>{document.document_name}</td>
                        <td>{document.loc}</td>
                        <td>{document.fileType}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default DetailInternship;
