import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useState,useContext} from 'react';
import { FaHeart } from "react-icons/fa";
import "../../styles/home.css";
import { Context } from '../store/appContext';


function CardItem({ name }) {
  const { store, actions } = useContext(Context);
  const item = {
    name : name, id:id
  }
  
  return (
    <div className="people">

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="primary" onClick={() => actions.addFavorites(name)}><FaHeart /></Button>
        </Card.Body>
      </Card>
    </div>

  );
}

export default CardItem;