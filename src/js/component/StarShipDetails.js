import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const StarshipDetails = () => {
  const [starship, setStarship] = useState(null);
  const { starshipId } = useParams();

  useEffect(() => {
    async function fetchStarshipData() {
      try {
        const response = await fetch(`https://www.swapi.tech/api/starships/${starshipId}`);
        const data = await response.json();
        if (data.message === "ok") {
          setStarship(data.result.properties); // Update state with starship properties
        }
      } catch (err) {
        console.error('Error fetching starship:', err);
      }
    }

    fetchStarshipData();
  }, [starshipId]); // Dependency array includes starshipId to refetch if ID changes

  if (!starship) {
    return <div>Loading...</div>; // Display loading state while data is being fetched
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`} />
      <Card.Body>
        <Card.Title>{starship.name}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Model: {starship.model}</ListGroup.Item>
          <ListGroup.Item>Manufacturer: {starship.manufacturer}</ListGroup.Item>
          <ListGroup.Item>Cost in Credits: {starship.cost_in_credits}</ListGroup.Item>
          <ListGroup.Item>Length: {starship.length}</ListGroup.Item>
          <ListGroup.Item>Max Atmosphering Speed: {starship.max_atmosphering_speed}</ListGroup.Item>
          <ListGroup.Item>Crew: {starship.crew}</ListGroup.Item>
          <ListGroup.Item>Passengers: {starship.passengers}</ListGroup.Item>
          <ListGroup.Item>Cargo Capacity: {starship.cargo_capacity}</ListGroup.Item>
          <ListGroup.Item>Consumables: {starship.consumables}</ListGroup.Item>
          <ListGroup.Item>Hyperdrive Rating: {starship.hyperdrive_rating}</ListGroup.Item>
          <ListGroup.Item>MGLT: {starship.MGLT}</ListGroup.Item>
          <ListGroup.Item>Starship Class: {starship.starship_class}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default StarshipDetails;
