import React,{useState,useContext} from 'react';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from '../store/appContext';


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
			<Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Favorites {store.Favorites.length()}
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
