import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from './CountryCard'; // Import CountryCard component
import './CountryList.css'; // Import CSS file

const CountryList = () => {
  // State variable to store the fetched countries data
  const [countries, setCountries] = useState([]);
  // State variable to store error message
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        // Set the fetched data to the state variable
        setCountries(response.data);
      } catch (error) {
        // Log any errors to the console
        console.error('Error fetching data:', error.message);
        // Set error state to display error message
        setError('Error fetching data. Please try again later.');
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Clean-up function to cancel any ongoing requests if the component unmounts
    return () => {};
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="country-list">
      {/* Render error message if an error occurs */}
      {error && <p>{error}</p>}
      {/* Render country cards using the fetched data */}
      {countries.map(country => (
        <div key={country.name.common}>
          <CountryCard countryName={country.name.common} flagImageUrl={country.flags.png} />
        </div>
      ))}
    </div>
  );
};

export default CountryList;
