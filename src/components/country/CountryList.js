import React from 'react';
import { NavLink } from 'react-router-dom';
import countries from '../../countries.json';

function CountryList() {
  return (
    <div className="list-group">
      {countries.map((country) => (
        <NavLink
          key={country.cca3}
          className="list-group-item list-group-item-action d-flex align-items-center"
          activeClassName="active"
          to={`/country/${country.cca3}`}
        >
          {`${country.flag} ${country.name.common}`}
        </NavLink>
      ))}
    </div>
  );
}

export default CountryList;
