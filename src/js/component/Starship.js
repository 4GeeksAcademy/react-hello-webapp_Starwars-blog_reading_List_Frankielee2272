import React, { useEffect,useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardItem from "../component/card";
export const Starship = () => {
	const [starship, setStarship] = useState([]);
	console.log(starship, "Starship");
	useEffect(() => {
		fetch("https://www.swapi.tech/api/starships")
			.then((res) => res.json())
			.then((data) => setStarship(data.results))
			.catch((err) => console.error(err));
	}, []);
	return (
		<div className="text-center mt-5 people">
            <h1>Starships</h1>
		{starship && starship.map((item, index) => (
			<CardItem key={index} name={item.name}/>
		))}
	</div>

	)
};
	

