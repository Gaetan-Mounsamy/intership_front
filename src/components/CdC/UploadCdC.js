import { useState } from "react";
import './CdC.css';
import { json } from "react-router-dom";

export default function Form() {
  const [file, setFile] = useState("");
  const [docuName, setDocuName] = useState("");
  const [loc, setLoc] = useState("");

  function handleForm(e) {
    e.preventDefault();



    const docuData = new FormData();
    docuData.append("docuName", docuName);
    docuData.append("loc", loc);
    docuData.append("internshipId", fetchInternshipId());

    fetch("http://localhost:8080/document/add", {
      method: "POST",
      body: docuData,
    });

    const data = new FormData();
    data.append("file", file);

    fetch("http://localhost:8080/cdC/upload", {
      method: "POST",
      body: data,
    });
  }

  function handleFileChange(e) {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
  }

  const fetchInternshipId = async () => {
    try {

        const tmp = localStorage.getItem('token');
        const numericPart = tmp.match(/\d+/);
        const studentId = numericPart ? parseInt(numericPart[0]) : NaN;

        const response = await fetch("http://localhost:8080/internship/getAllByStudent/"+studentId);
        if (response.ok) {
            const data = await response.json();
            let jsonData = JSON.parse(data);
            let Id = jsonData["internship_id"]; //<- Plusieurs internship ID sont retournés
            return Id;
        } else {
            console.error('Failed to fetch internship data');
        }
    } catch (error) {
        console.error('Error:', error);
    }
  };

  //You have to add an input field containing all the internship IDs in a slider (Then just copy paste the same thing in report)
  return (
    <>
    <p>Insert your file here:</p>
      <form>
        <div>
          <label htmlFor="docuName">Document's name:</label>
          <input
              type="text"
              id="docuName"
              value={docuName}
              onChange={e => setDocuName(e.target.value)}
              required
          />
        </div>
        <div>
          <label htmlFor="loc">Level of confidentiality:</label>
          0
            <input 
                id="loc"
                type="range"
                value={loc}
                min="0" max="5" step="1"
                onChange={e => setLoc(e.target.value)}
                required
            />
            5
        </div>
        <div>
          <input 
              class="btn" 
              type="file" 
              name="file" 
              onChange={handleFileChange}
              required
          />
        </div>
        <button class="btn" type="submit" onClick={(e) => handleForm(e)}>
          Submit
        </button>
      </form>
      
    </>
  );
}