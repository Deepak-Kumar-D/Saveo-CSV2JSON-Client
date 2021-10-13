import React, { useState } from "react";
import axios from "axios";
import "../css/Home.css";
import { GoSearch } from "react-icons/go";

const Home = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const List = async () => {
    const obj = await axios.get(
      `http://localhost:5000/searchMedicine/${search}`
    );

    setResult(obj.data);
  };

  return (
    <div className="home">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Type the name of the medicine"
          onChange={(e) => setSearch(e.target.value)}
        />
        <span onClick={() => List()}>
          <GoSearch />
        </span>
      </div>

      {result.length > 0 ? (
        <div className="meds-list">
          <table>
            <thead>
              <tr>
                <th>Medicine(s)</th>
              </tr>
            </thead>

            <tbody>
              {result.map((meds) => {
                return (
                  <tr key={meds._id}>
                    <td>{meds.c_name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
