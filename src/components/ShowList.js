import React from 'react';
import { Link } from 'react-router-dom';

const ShowListComponent = ({ shows }) => {
  return (
    <div>
      {shows.map((show, index) => (
        <div key={index} className="show-item">
          <Link to={`/show/${show.id}`}>
            <img src={show.image?.medium} alt={show.name} />
          </Link>
          <h2>{show.name}</h2>
          <p>Genres: {show.genres.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowListComponent;
