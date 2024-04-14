import React, { useEffect, useState } from 'react';
import CardItem from '../component/card';
import '../../styles/home.css';

export const People = () => {
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/people')
      .then(res => res.json())
      .then(data => {
        if (data && data.results) {
          setPeople(data.results);
        } else {
          setError(true);
          console.error('Invalid data structure:', data);
        }
      })
      .catch(err => {
        setError(true);
        console.error('Failed to fetch people:', err);
      });
  }, []);

 

  if (error) {
    return <div className="text-center mt-5">Error loading people. Please try again later.</div>;
  }

  return (
    <div className='text-center mt-5'>
      <h1>People</h1>
        <div className='card-container'>
          {people.map((item, index) => (
            <CardItem
              key={index}
              name={item.name}
              id={item.uid}
            />
          ))}
        </div>
      </div>
  
  );
};

export default People;
