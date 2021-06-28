import { Component } from 'react';
import { Link } from 'react-router-dom';

import countries from '../countries.json';

class CountriesList extends Component {
  state = {
    countries: [...countries],
  };

  render() {
    return (
      <div className="list-group">
        {this.state.countries.map((country) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.cca3}`}
              key={country.cca3}
            >
              {/* {country.flag} {country.name.common} */}
              <img
                className="pe-2"
                style={{ width: '25px', height: 'auto' }}
                src={`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`}
                alt={`Flag of ${country.name.common}`}
              />
              {country.name.common}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
