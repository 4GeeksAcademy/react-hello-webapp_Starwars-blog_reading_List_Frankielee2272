import React, { useEffect,useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardItem from "../component/card";
export const Planet = () => {
	const [planet, setPlanet] = useState([]);
	console.log(planet, "planet");
	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets")
			.then((res) => res.json())
			.then((data) => setPlanet(data.results))
			.catch((err) => console.error(err));
	}, []);
	return (
		<div className="text-center mt-5 people">
            <h1>Planets</h1>
			<div className="card-container">
		{planet && planet.map((item, index) => (
			<CardItem key={index} name={item.name}/>
		))}
		</div>
	</div>

	)
};
	

