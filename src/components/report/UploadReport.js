import { useState } from "react";
import './Report.css';
import BASE_URL from '../ApiConfig';


export default function Form() {
  const [file, setFile] = useState("");

  function handleForm(e) {
    e.preventDefault();

    const data = new FormData();
    data.append("file", file);

    fetch(`${BASE_URL}/report/upload`, {
      method: "POST",
      body: data,
    });
  }

  function handleFileChange(e) {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
  }

  return (
    <>
    <p>Insérez Votre Fichier ici:</p>
      <form>
        <input class="btn" type="file" name="file" onChange={handleFileChange} />
        <button class="btn" type="submit" onClick={(e) => handleForm(e)}>
          Submit
        </button>
      </form>
    </>
  );
}