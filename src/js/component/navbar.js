import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/" className="navbar-brand d-flex justify-content-center">
				<img
					src="https://th.bing.com/th/id/OIP.9MClJNLoxD8t7XqmwHggEwHaG9?w=169&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7"
					width={125}
					height={125}
				/>
				<img
					src="https://th.bing.com/th?id=OIP.Z32JfxBYk_YvF6wGJDxpcgHaHa&w=250&h=250&c=8&rs=1&qlt=30&o=6&dpr=1.6&pid=3.1&rm=2"
					width={150}
					height={100}
				/>
				

			</Link>
			<div className="ml-auto">
			<img src="https://i.pinimg.com/originals/d7/e4/48/d7e4484aa1cc7858a972f0b442adc114.jpg"
				width={150}
				height={150}
				/>
				<Dropdown>
				<Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ color: `yellow`, width: `150px`}}>
						Favorites {store.Favorites.length}
					</Dropdown.Toggle>

					<Dropdown.Menu>
    {store.Favorites.map((favorite, index) => (
        <Dropdown.Item key={index}>
            {favorite}
            <button
                onClick={() => actions.deleteFavorites(favorite)}
                style={{ marginLeft: '10px' }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
            </button>
        </Dropdown.Item>
    ))}
</Dropdown.Menu>
				</Dropdown>

			</div>
		</nav>
	);
};
