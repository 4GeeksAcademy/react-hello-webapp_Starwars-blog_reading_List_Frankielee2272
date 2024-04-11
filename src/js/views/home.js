import React, { useEffect,useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {People} from "../component/People";
import {Starship} from "../component/Starship";	
import {Planet} from "../component/Planet";
import CardItem from "../component/card";
export const Home = () => {
    return (
        <div>
         
            <div className="text-center mt-5 home" style={{ 
                position: 'relative', 
				backgroundImage: 'url(https://th.bing.com/th/id/OIP.8Ns3XoEYu0w2rXh1oCj8zgHaEK?rs=1&pid=ImgDetMain)', 
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
                    <People/>
                    <Planet/>
                    <Starship/>
                </div>
            </div>
        </div>
    );
};


