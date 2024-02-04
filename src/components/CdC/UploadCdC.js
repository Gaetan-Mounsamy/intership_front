import { useState } from "react";
import './CdC.css';

export default function Form() {
  const [file, setFile] = useState("");

  function handleForm(e) {
    e.preventDefault();

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