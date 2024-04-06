import React, { useEffect,useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardItem from "../component/card";
export const Home = () => {
	const [people, setPeople] = useState([]);
	console.log(people, "people");
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then((res) => res.json())
			.then((data) => setPeople(data.results))
			.catch((err) => console.error(err));
	}, []);
	return (
		<div className="text-center mt-5">

		{people && people.map((item, index) => (
			<CardItem key={index} name={item.name}/>
		))}
	</div>

	)
};
	

