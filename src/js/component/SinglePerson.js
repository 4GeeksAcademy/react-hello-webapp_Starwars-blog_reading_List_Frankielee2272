import React, { useEffect,useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardItem from "../component/card";
import { useParams } from "react-router-dom";
export const Person = () => {
	const [person, setPerson] = useState([]);
    const params=useParams();
	console.log(person, "person");
    console.log(params,"params")
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then((res) => res.json())
			.then((data) => setPerson(data.results))
			.then ((data) => console.log(data,"personData"))
			.catch((err) => console.error(err));
	}, []);
	return (
		<div className="text-center mt-5 person">
            <h1>Person</h1>
		
	</div>

	)
};
	

