import React, { useState } from "react";
import axios from "axios";
import "../css/UploadCSV.css";

const UploadCSV = () => {
  const [file, setFile] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const uploadFile = new FormData();
    uploadFile.append("fileName", file);

    const obj = await axios.post(
      "https://saveo-csvjson-db.herokuapp.com/uploadCSV",
      uploadFile
    );

    if (obj.status === 200) {
      alert(obj.data.message);

      setFile("");
      document.getElementById("chooseFile").value = null;
    }
  };

  return (
    <div className="upload">
      <form
        method="POST"
        id="forms"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <p>Choose your CSV File to upload.</p>
        <br />
        <input
          type="file"
          accept=".csv"
          id="chooseFile"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input type="submit" value="Convert" />
      </form>
    </div>
  );
};

export default UploadCSV;
