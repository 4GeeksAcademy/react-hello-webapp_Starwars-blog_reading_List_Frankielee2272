import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

function CardItem({ name, id, image }) {
  const { actions } = useContext(Context);

  return (
    <div className="custom-card">
      <Card>
        <Card.Img
          variant="top"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div className="card-actions">
            <Link           
              className="learn-more-link"            
            to={`/person/${id}`}            
            >
              Learn More
            </Link>
            <Button variant="dark" onClick={() => actions.addFavorites(name)}>
              <FaHeart className="favorite-heart" />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardItem;
