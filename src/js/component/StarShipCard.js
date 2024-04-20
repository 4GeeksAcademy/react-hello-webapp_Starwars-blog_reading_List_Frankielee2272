// StarshipCard.js
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

function StarshipCard({ name, id, image }) {
  const { actions } = useContext(Context);

  return (
    <div className="custom-card">
      <Card className="rounded-card h-100">
        <Card.Img
          className="card-img-top"
          variant="top"
          src={image || `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{name}</Card.Title>
          <div className="mt-auto card-actions">
            <Link
              className="learn-more-link"
              to={`/starship/${id}`} // Corrected to navigate to the starship's detail page
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

export default StarshipCard;
