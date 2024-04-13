// People.js
import React, { useEffect, useState } from 'react';
import CardItem from '../component/card';
import '../../styles/home.css';

export const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/people')
      .then(res => res.json())
      .then(data => setPeople(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='text-center mt-5'>
      <h1>People</h1>
      <div className='card-container'>
        {people.map((item, index) => {
          const imageName = item.name.split(' ').join('-') + '.jpeg';
          // Correct path assuming images are in public/img/Characters
          const imageUrl = `${process.env.PUBLIC_URL}/src/img/Characters/${imageName}`;

          // Instead of fetch, directly pass the imageUrl to CardItem
          return (
            <CardItem
              key={index}
              name={item.name}
              id={item.uid}
              image={imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default People;
