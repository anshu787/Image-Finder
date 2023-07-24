import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Result.css';

const PixabayResults = ({ searchQuery, numResults }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchQuery || searchQuery.trim() === '') {
        setResults([]); // Reset results if search query is empty
        return;
      }

      try {
        const response = await axios.get('https://pixabay.com/api/', {
          params: {
            key: '38109826-ea2116257ec7886d7b137466d',
            q: searchQuery,
            per_page: numResults,
            image_type: 'photo',
          },
        });
        setResults(response.data.hits);
      } catch (error) {
        console.error('Error fetching data from Pixabay:', error);
      }
    };

    // Fetch results when search query or number of results changes
    fetchResults();
  }, [searchQuery, numResults]);

  if (!searchQuery || searchQuery.trim() === '') {
    return null; // Don't render any results if search query is empty
  }

  return (
    <div className="results-container">
      {results.map((result) => (
        <div key={result.id} className="result-item">
          <img src={result.webformatURL} alt={result.tags} />
        </div>
      ))}
    </div>
  );
};

export default PixabayResults;
