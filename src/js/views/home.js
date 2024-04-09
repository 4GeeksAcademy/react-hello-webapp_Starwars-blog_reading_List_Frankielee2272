import React, { useEffect,useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {People} from "../component/People";
import {Starship} from "../component/Starship";	
import {Planet} from "../component/Planet";
import CardItem from "../component/card";
export const Home = () => {
	
	return (
		<div className="text-center mt-5 home">

	<People/>
	<Planet/>
	<Starship/>
	</div>

	)
};
	

