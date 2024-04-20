import React, { useEffect,useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import PeopleScroller from "../component/PeopleScrollBar";
import StarshipScroller from "../component/StarShipScrollBar";	
import PlanetScroller from "../component/PlanetScrollBar";
export const Home = () => {
    return (
        <div>
         
            <div className="text-center mt-5 home" style={{ 
                position: 'relative', 
				backgroundImage: 'url(https://th.bing.com/th/id/OIP.q1iROYSmZKgDJJDQJhE7MQHaEo?w=250&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                minHeight: '100vh' 
            }}>
                {/* Overlay Div */}
                <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    bottom: 0, 
                    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
                    zIndex: 1 
                }}></div>
                
                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <PeopleScroller/>
                    <PlanetScroller/>
                    <StarshipScroller/>
                </div>
            </div>
        </div>
    );
};


export default Home;
