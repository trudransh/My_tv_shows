// ShowListComponent.js
import React from 'react';
import { Link } from 'react-router-dom';

const ShowListComponent = ({ shows }) => {
  return (
    <div className="show-list-container">
      {shows.map((show, index) => (
        <div key={index} className="show-item">
          <Link to={`/show/${show.id}`}>
            <img src={show.image?.medium} alt={show.name} />
          </Link>
          <div className='movie-title'>
          <h2>{show.name}</h2>
          </div>
          <Link to={`/show/${show.id}`}>
          <div className="show-item-details">
            <p>Rating: {show.rating?.average || 'N/A'}</p>
            <p>Genres: {show.genres.join(', ')}</p>
            <p>Language: {show.language}</p>       
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowListComponent;
