import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

function CardItem({ name, id, image }) {
  const { actions } = useContext(Context);

  return (
    <div className="card">
      <Card style={{ width: "18rem", height: "18rem" }}>
        <Card.Img
          variant="top"
          src={image}
          onError={(e) =>
            (e.target.src = `${process.env.PUBLIC_URL}/img/Characters/default-image.jpg`) // Update the path to your default image if different
          }
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div>
            <Link
              style={{ fontWeight: "bold", color: "black", backgroundColor: "yellow" }}
              to="#" // This should be the path you want the user to go to when they click "Learn More"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default action if this isn't meant to be a navigation link
                actions.addFavorites(name);
              }}
            >
              Learn More
            </Link>
            <Button variant="dark" onClick={() => actions.addFavorites(name)}>
              <FaHeart style={{ color: "yellow" }} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardItem;
