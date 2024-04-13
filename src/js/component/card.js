import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useContext } from "react";
import { FaHeart } from "react-icons/fa";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

function CardItem({ name, id }) {
  const { store, actions } = useContext(Context);
  const item = {
    name: name,
    id: id,
  };

  return (
    <div className="card">
      <Card style={{ width: "18rem", height: `18rem` }}>
        <Card.Body>
          <div className="placeholder"></div>
          <Card.Title>{name}</Card.Title>
          <div>
            <Link
              style={{ backgroundColor:"yello" }}
              onClick={() => actions.addFavorites(name)}
            >
              Learn More
            </Link>
            <Button variant="dark" onClick={() => actions.addFavorites(name)}>
              <FaHeart color="yellow" />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardItem;
