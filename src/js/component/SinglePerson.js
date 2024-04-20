import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams, Link } from 'react-router-dom';

export const Person = () => {
  const [person, setPerson] = useState(null);
  const { theid } = useParams();
  
  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/${theid}`);
        const data = await response.json();
        setPerson(data.result);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPersonData();
  }, [theid]);

  if (!person) {
    return <div>Loading...</div>;
  }

  // Define the background style
  const backgroundStyle = {
    backgroundImage: 'url("https://wallpaperaccess.com/full/9027792.jpg")', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyle}> {/* Apply the background style here */}
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`}
        />
        <Card.Body>
          <Card.Title>{person.properties.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Height: {person.properties.height}</ListGroup.Item>
          <ListGroup.Item>Mass: {person.properties.mass}</ListGroup.Item>
          <ListGroup.Item>Eye Color: {person.properties.eye_color}</ListGroup.Item>
          <ListGroup.Item>Skin Color: {person.properties.skin_color}</ListGroup.Item>      
        </ListGroup>
      </Card>
      <Link to="/" className="btn btn-home-glow btn-mt-3"><b>Home</b></Link> {/* Home button */}
    </div>
  );
};

export default Person;
