import React, { useState } from 'react';
import axios from 'axios';

const GeolocationSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search`,
          {
            params: {
              q: value,
              format: 'json',
              addressdetails: 1,
              limit: 5,
            },
          }
        );
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching geolocation data:', error);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <h3>Search Location</h3>
      <input
        type="text"
        placeholder="Search for a location"
        value={query}
        onChange={handleSearch}
        style={{
          width: '300px',
          height: '40px',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <ul>
        {results.map((result:any, index:any) => (
          <li key={index} style={{ margin: '5px 0' }}>
            {result.display_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GeolocationSearch;
