import React, { useState, useEffect } from 'react';
import './App.css';
import ShowListComponent from './components/ShowList'; // Ensure the path is correct

function App() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const showsData = data.map(item => item.show);
        setShows(showsData);
        setIsLoading(false);

        // Console log here to avoid logging on every render
        showsData.forEach(show => {
          if (show.image) {
            console.log(`Show: ${show.name}`);
            console.log(`Medium Image URL: ${show.image.medium}`);
            console.log(`Original Image URL: ${show.image.original}`);
          }
        });
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* Header content */}
      </header>
      <main>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {!isLoading && !error && (
          <ShowListComponent shows={shows} />
        )}
      </main>
    </div>
  );
}

export default App;
