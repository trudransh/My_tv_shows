import React from 'react';

const ShowListComponent = ({ shows }) => {
  return (
    <div>
      {shows.map((show, index) => (
        <div key={index} className="show-item">
          <img src={show.image?.medium} alt={show.name} />
          <h2>{show.name}</h2>
          <p>Genres: {show.genres.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowListComponent;
