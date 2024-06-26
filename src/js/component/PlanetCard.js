import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

function PlanetCard({ name, id, image }) {
  // Renamed to PlanetCard for clarity
  const { actions } = useContext(Context);

  return (
    <div className="custom-card">
      <Card className="h-100 rounded-card" style={{ height: "200px" }}>
        <Card.Img
          className="card-img-top"
          variant="top"
          src={
            image ||
            `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
          }
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

export default PlanetCard; // Make sure to update the export as well
