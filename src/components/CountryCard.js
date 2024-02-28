import React from 'react';
import './CountryCard.css'; // Import CSS file

const CountryCard = ({ countryName, flagImageUrl }) => {
  return (
    <div className="country-card">
      <img src={flagImageUrl} alt={`Flag of ${countryName}`} />
      <h3>{countryName}</h3>
    </div>
  );
};

export default CountryCard;


