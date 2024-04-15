import React, { useEffect, useState } from "react";
import CardItem from "../component/StarShipCard";
import "../../styles/home.css";

export const Starship = () => {
  const [starship, setStarship] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/starships")
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setStarship(data.results);
        }
      })
      .catch((err) => console.error('Error fetching starships:', err));
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Starships</h1>
        <div className="card-container">
          {starship.map((item, index) => (
            <CardItem key={index} name={item.name} id={item.uid}/>
          ))}
        </div>
      </div>
  );
};

export default Starship;
