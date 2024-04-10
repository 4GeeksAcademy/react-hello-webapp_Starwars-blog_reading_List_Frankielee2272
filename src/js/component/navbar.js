import React,{useState,useContext} from 'react';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from '../store/appContext';


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
        		<img src="https://th.bing.com/th/id/OIP.9MClJNLoxD8t7XqmwHggEwHaG9?w=169&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7" width= {125} height={125}/> 
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
