import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const RickAndMortyFetcher = () => {
  const [dataType, setDataType] = useState("character");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/${dataType}`
        );
        setItems(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dataType]);

  return (
    <div className="container">
      <h2 className="title">Rick and Morty {dataType.charAt(0).toUpperCase() + dataType.slice(1)}</h2>
      <select className="dropdown" onChange={(e) => setDataType(e.target.value)} value={dataType}>
        <option value="character">Characters</option>
        <option value="episode">Episodes</option>
        <option value="location">Locations</option>
      </select>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id} className="list-item">
            {item.id} - {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RickAndMortyFetcher;
