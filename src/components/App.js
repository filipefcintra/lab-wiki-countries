import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import CountryList from './country/CountryList';
import CountryDetail from './country/CountryDetail';

class App extends React.Component {
  state = {
    countries: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        'https://countries.tech-savvy.tech/countries'
      );
      console.log(response);

      this.setState({ countries: [...response.data], loading: false });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div
                className="col-5"
                style={{ maxHeight: '90vh', overflow: 'scroll' }}
              >
                {this.state.loading ? (
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <CountryList countries={this.state.countries} />
                )}
              </div>
              <div className="col-7">
                <Route
                  path="/country/:cca3"
                  render={(routeProps) => {
                    return (
                      <CountryDetail
                        // RouteProps são as props padrão da rota: match, history e location
                        {...routeProps}
                        countries={this.state.countries}
                      />
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
