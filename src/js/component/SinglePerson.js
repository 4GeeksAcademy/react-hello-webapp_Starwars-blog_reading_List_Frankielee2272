import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';

export const Person = () => {
  const [person, setPerson] = useState(null); // Initialize to null for conditional rendering
  const { theid } = useParams(); // Destructure for clarity
  
  useEffect(() => {
    // Use async/await for better readability
    const fetchPersonData = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/${theid}`);
        const data = await response.json();
        setPerson(data.result); // Assuming the API returns an object with a 'result' key
      } catch (err) {
        console.error(err);
      }
    };

    fetchPersonData();
  }, [theid]); // Add 'theid' to dependency array to refetch if the parameter changes

  // Conditional rendering to handle loading state
  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`}
      />
      <Card.Body>
        <Card.Title>{person.properties.name}</Card.Title>
        {/* ...rest of your JSX */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Height: {person.properties.height}</ListGroup.Item>
        <ListGroup.Item>Mass: {person.properties.mass}</ListGroup.Item>
        <ListGroup.Item>Eye Color: {person.properties.eye_color}</ListGroup.Item>
        <ListGroup.Item>Skin Color: {person.properties.skin_color}</ListGroup.Item>      
      </ListGroup>
    </Card>
  );
};
