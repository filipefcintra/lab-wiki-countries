import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../../countries.json';

function CountryDetail(props) {
  const foundCountry = countries.find((country) => {
    return country.cca3 === props.match.params.cca3;
  });

  const renderBorderName = (cca3) => {
    const foundCountry = countries.find((country) => {
      return country.cca3 === cca3;
    });

    if (foundCountry) {
      return foundCountry.name.common;
    } else {
      return 'NAME NOT FOUND';
    }
  };

  if (foundCountry) {
    return (
      <div>
        <h1>{foundCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {foundCountry.borders.map((border, i) => (
                    <li key={i}>
                      <Link to={border}>{renderBorderName(border)}</Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return <h1>Country not found ):</h1>;
  }
}

export default CountryDetail;
