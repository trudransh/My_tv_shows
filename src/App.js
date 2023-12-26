import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowListComponent from './components/ShowList';
import ShowDetail from './components/ShowDetail';
import './App.css';

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
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={
            <>
              {isLoading && <div>Loading...</div>}
              {error && <div>Error: {error}</div>}
              {!isLoading && !error && <ShowListComponent shows={shows} />}
            </>
          } />
          <Route path="/show/:id" element={<ShowDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
