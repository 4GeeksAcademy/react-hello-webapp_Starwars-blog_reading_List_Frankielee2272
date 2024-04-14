import React, { useEffect, useState } from "react";
import CardItem from "../component/PlanetCard";
import "../../styles/home.css";

export const Planet = () => {
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setPlanet(data.results);
        }
      })
      .catch((err) => console.error('Error fetching planets:', err));
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Planets</h1>
      <div className="planet-scrollable-container">
        <div className="card-container">
          {planet.map((item, index) => (
            <CardItem key={index} name={item.name} id={item.uid}/>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Planet; 