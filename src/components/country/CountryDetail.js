import React from 'react';
import { Link } from 'react-router-dom';

class CountryDetail extends React.Component {
  state = {
    name: '',
    capital: '',
    area: 0,
    borders: [],
  };

  // componentDidUpdate roda toda vez que as props ou o state sofrem qualquer alteração (equivalente ao useEffect)
  componentDidUpdate(prevProps) {
    // Filtrar a array de paises para procurar o pais com o codigo cca3 disponivel no parametro de rota

    // Se as props antes da atualização forem diferentes das props pós-atualização, atualize o state. Isso serve para evitar um loop infinito
    if (prevProps.match.params.cca3 !== this.props.match.params.cca3) {
      // Procurar na lista de paises que veio do arquivo JSON o codigo do pais que recebemos como parâmetro de rota
      const foundCountry = this.props.countries.find((country) => {
        return country.cca3 === this.props.match.params.cca3;
      });

      if (foundCountry) {
        this.setState({
          name: foundCountry.name.common,
          capital: foundCountry.capital,
          area: foundCountry.area,
          borders: foundCountry.borders,
        });
      }
    }
  }

  renderBorderName = (cca3) => {
    const foundCountry = this.props.countries.find((country) => {
      return country.cca3 === cca3;
    });

    if (foundCountry) {
      return foundCountry.name.common;
    } else {
      return 'NAME NOT FOUND';
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{this.state.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.state.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.state.borders.map((border, i) => (
                    <li key={i}>
                      <Link to={border}>{this.renderBorderName(border)}</Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
