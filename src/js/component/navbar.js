import React,{useState,useContext} from 'react';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from '../store/appContext';


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
        		<img src="https://th.bing.com/th/id/R.68c2fe0a2f5f2d52bf251f0a7d919abd?rik=htDNXwI%2fpuA67w&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fsensibleworld%2fstarwars%2f1024%2fDarth-Vader-icon.png&ehk=%2fKq2sJ6RJMGhTba%2fl94WKAh90QdAzQ1IW0wXpO8F%2bIU%3d&risl=&pid=ImgRaw&r=0" width= {125} height={125}/> 
				<img src= "https://th.bing.com/th?id=OIP.Z32JfxBYk_YvF6wGJDxpcgHaHa&w=250&h=250&c=8&rs=1&qlt=30&o=6&dpr=1.6&pid=3.1&rm=2" width={150} height={100}/>
			</Link>
			<div className="ml-auto">
			<Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
	  Favorites {''}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
			</div>
		</nav>
	);
};
