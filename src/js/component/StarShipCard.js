import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

function StarshipCard({ name, id, image }) {
  // Assuming you might want to rename for clarity
  const { actions } = useContext(Context);

  return (
    <div className="custom-card">
      {" "}
      {/* Reuse the .custom-card class for consistent styling */}
      <Card className="rounded-card h-100">
        {" "}
        {/* Use h-100 class to make card stretch full height */}
        <Card.Img
          className="card-img-top"
          variant="top"
          src={
            image ||
            `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
          } // Use image prop if provided
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{name}</Card.Title>
          <div className="mt-auto card-actions">
            <Link
              className="learn-more-link"
              to="#"
              onClick={(e) => {
                e.preventDefault();
                actions.addFavorites(name);
              }}
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

export default StarshipCard; // Rename export if you updated the component name
